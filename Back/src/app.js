import express from 'express';
import expressSession from 'express-session'
import router from './Routes/index.js';
import not_found_handler from './middlewares/not_found.js';
import { __dirname } from './utils.js';
import manager from './managers/Product.js';
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import passport from 'passport'
import { config } from './config/config.js';
import { addLogger } from './config/winston.js';
import { logger } from './config/winston.js'
import swaggerJSDoc from 'swagger-jsdoc';
import initializePassport from './passport-JWT/passport.config.js'
import swaggerUiExpress from 'swagger-ui-express'
import cors from 'cors'


const PORT = config.PORT

const server = express();

const httpServer = () => server.listen(PORT, err => {
    if (err) logger.error(err)
    logger.info(`Server listening on port ${PORT}`)
})

const swaggerOptions = {
    definition: {
        openapi: '3.0.2',
        info: {
            title: 'documentacion de mi app',
            description: 'api pensada para un E-Commerce'
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]

}
logger.info(__dirname)
const specs = swaggerJSDoc(swaggerOptions)

const allowedOrigins = ['http://localhost:5173', 'http://localhost:8080', 'https://malakit.onrender.com', 'http://localhost:4173', 'https://stalwart-bavarois-867516.netlify.app'];

server.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Acceso no permitido por CORS'));
        }
    }
}));


server.use(cookieParser())
server.use(expressSession({
    secret: config.secretSession,
    resave: true,
    saveUninitialized: true
}))
server.use('', express.static('public'));
server.use(express.json());
server.use('/', router);
server.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
server.use(express.urlencoded({ extended: true }));

// server.use(error_handler);
server.use(not_found_handler);
server.use(morgan('dev'))
initializePassport()
server.use(passport.initialize())
server.use(passport.session())

server.use(addLogger)


server.use((req, res, next) => {
    req.manager = manager;
    next();
});

config.connectDB()

export default httpServer;
import cluster from "node:cluster";
import { cpus } from 'node:os'
import httpServer from "./app.js";
import { logger } from './config/winston.js'



const numeroProcesadores = cpus().length


if (cluster.isPrimary) {
    logger.info(cluster.isPrimary)
    logger.info('Proceso primario generando un Worker')
    for (let i = 0; i < 1; i++) {
        cluster.fork()
    }
    cluster.on('message', worker => {
        console.log(`mensaje recibido del worker ${worker.process.pid}`)
    })
} else {
    logger.info('Al ser un proceso forkeado, no cuento como Primary, soy un worker')
    logger.info(`soy un worker, con id: ${process.pid}`)
    httpServer()
}

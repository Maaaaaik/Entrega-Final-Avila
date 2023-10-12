import passport from 'passport'
import passportJWT from 'passport-jwt'
import { Strategy } from 'passport-local'
import GHStrategy from 'passport-github2'
import User from '../dao/mongo/models/users.model.js'
import { config } from '../config/config.js'

export default function () {

    passport.serializeUser(
        (user, done) => done(null, user._id)
    )
    passport.deserializeUser(
        async (id, done) => {
            const user = await User.findById(id)
            return done(null, user)
        }
    )

    const JWTStrategy = passportJWT.Strategy
    const ExtractJWT = passportJWT.ExtractJwt

    let cookieExtractor = (req) => {
        let token = null
        if (req && req.cookies) {
            token = req.cookies.jwtToken // Nombre del campo de cookie donde está el token
        }
        return token
    }
    const configStrategy = {
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: config.privateKeyJwt
    }

    passport.use('github',
        new GHStrategy({
            clientID: config.GHClientID,
            clientSecret: config.GHID,
            callbackURL: config.callback
        },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    console.log(profile)

                    const existingUser = await User.findOne({ email: profile._json.login })

                    if (existingUser) {
                        return done(null, existingUser)
                    }

                    const newUser = await User.create({
                        name: profile._json.name,
                        email: profile._json.login,
                        age: 18,
                        photo: profile._json.avatar_ur,
                        password: profile._json.id
                    })

                    return done(null, newUser)
                } catch (error) {
                    return done(error)
                }
            })
    )

    passport.use('register', new Strategy({ passReqToCallback: true, usernameField: 'email' },
        async (req, username, password, done) => {
            try {
                let one = await User.findOne({ email: username })
                if (!one) {
                    let user = await User.create(req.body)
                    return done(null, user)
                }
                return done(null, false)
            } catch (error) {
                return done(error, false)
            }
        }
    )
    )



    passport.use('jwt', new JWTStrategy(configStrategy, async (jwt_payload, done) => {
        try {
            return done(null, jwt_payload)
        } catch (error) {
            return done(error)
        }
    }))

}

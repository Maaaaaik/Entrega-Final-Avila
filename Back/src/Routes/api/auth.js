import Router from "express";
import validator from "../../middlewares/validator.js";
import password8 from "../../middlewares/password8.js";
import is_valid_password from "../../middlewares/is_valid_password.js";
import passport from "passport";

const auth_router = Router()

auth_router.post('/register',
    validator,
    password8,
    passport.authenticate(
        'register',
        { failureRedirect: '/api/auth/fail-register' }
    ),
    (req, res) => res.status(201).json({
        success: true,
        message: "user created"
    })
)

auth_router.get('/fail-register', (req, res) => res.status(401).json({
    success: false,
    message: 'auth error'
}))

auth_router.post('/signin', password8, passport.authenticate('signin', { failureRedirect: '/api/auth/fail-signin' }), is_valid_password, (req, res, next) => {
    try {
        const { email } = req.body
        req.session.email = email
        req.session.role = one.role
        return res.status(200).json({
            success: true,
            message: "user signed in"
        })
    } catch (error) {
        next(error)
    }
})

auth_router.get('/fail-signin', (req, res) => res.status(401).json({
    success: false,
    message: 'auth error'
}))


auth_router.post('/signout', async (req, res, next) => {
    try {
        req.session.destroy()
        return res.status(200).json({
            success: true,
            message: "user signed out"
        })
    } catch (error) {
        next(error)
    }
})

auth_router.get('/github', passport.authenticate('github', { scope: ['user:email'] }), (req, res) => { })
auth_router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/api/auth/fail-register-github' }),
    (req, res) => res.status(200).redirect('/')
)

auth_router.get('/fail-register-github', (req, res) => res.status(403).json({
    succes: false,
    message: 'bad auth'
}))
export default auth_router
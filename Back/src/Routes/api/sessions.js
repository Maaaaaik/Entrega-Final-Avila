import { Router } from "express"
import UserController from "../../controllers/user.controller.js";
import passport from "passport";


const session_router = Router()

session_router.get('/session', UserController.sessionCounter)
session_router.get('/github', passport.authenticate('github', { scope: ['user:email'] }, (req, res) => { }))
session_router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/fail-register' }),
    (req, res) => {
        req.session.user = req.user
        return res.status(201).redirect('/home')
    }
)
session_router.get('/fail-register-github', (req, res) => res.status(401).json({
    success: false,
    message: 'bad auth'
}))
session_router.get('/', UserController.getUsers);
session_router.get('/:uid', UserController.getUser);
session_router.put('/:uid', UserController.updateUser);
session_router.delete('/:uid', UserController.deleteUser);
session_router.post('/register', UserController.createUser);
session_router.post('/login', UserController.login)
session_router.post('/signout', UserController.signOut)

export default session_router
import { userService } from "../service/service.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';


class UserController {
    constructor() {
        this.userService = userService
    }
    sessionCounter = async (req, res, next) => {
        async (req, res) => {
            if (!req.session.counter) { req.session.counter = 1 }
            else { req.session.counter++ }
            return res.status(200).json({
                message: `han ingresado ${req.session.counter} ususarios`
            })
        }
    }

    login = async (req, res) => {
        const { email, password } = req.body;
        const user = await this.userService.findUser(email);
        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.PRIVATE_KEY_JWT, { expiresIn: '1h' });
        res.json({ token });
    }

    signOut = async (req, res, next) => {
        try {
            req.session.destroy()
            return res.status(200).json({
                message: "ha cerrado sesion"
            })
        } catch (error) {
            next(error)
        }
    }

    getUsers = async (req, res, next) => {
        try {
            const users = await this.userService.getUsers();
            if (users.length > 0) {
                return res.json({ status: 200, users });
            }

            let message = 'No users found';
            return res.json({ status: 404, message });
        } catch (error) {
            next(error);
        }
    }

    getUser = async (req, res, next) => {
        try {
            let id = req.params.uid;
            let user = await this.userService.getUser(id);
            if (user) {
                return res.json({ status: 200, user });
            }

            let message = 'User not found';
            return res.json({ status: 404, message });
        } catch (error) {
            next(error);
        }
    }

    createUser = async (req, res, next) => {
        try {
            const userData = req.body;
            const saltRounds = 10;

            // Hash de la contraseña
            const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

            // Asigna la contraseña hasheada a userData.password
            userData.password = hashedPassword;

            const response = await this.userService.createUser(userData);
            if (response) {
                return res.json({ status: 201, message: 'User created' });
            } else {
                return res.json({ status: 400, message: 'User not created' });
            }
        } catch (error) {
            next(error);
        }
    }
    updateUser = async (req, res, next) => {
        try {
            let id = req.params.uid;
            let data = req.body;
            let response = await this.userService.updateUser(id, data);
            if (response) {
                return res.json({ status: 200, message: 'User updated' });
            }

            return res.json({ status: 404, message: 'User not found' });
        } catch (error) {
            next(error);
        }
    }

    deleteUser = async (req, res, next) => {
        try {
            let id = req.params.uid;
            let response = await this.userService.deleteUser(id);
            if (response) {
                return res.json({ status: 200, message: 'User deleted' });
            }

            return res.json({ status: 404, message: 'User not found' });
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController()


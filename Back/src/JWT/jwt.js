import { config } from "../config/config";
import User from "../dao/mongo/models/users.model";
import { Jwt } from "jsonwebtoken";

export default (req, res, next) => {
    const auth = req.headers.authorization
    console.log(auth)
    if (!auth) {
        return res.status(401).json({
            sucess: false,
            message: 'error de autorizacion'

        })
    }
    const token = auth.split(' ')[1]
    jwt.verify(
        token,
        config.privateKeyJwt,
        async (error, credentials) => {
            if (error) {
                return res.status(401).json({
                    success: false,
                    message: 'errror de autorizacion'
                })
            }
            let user = await User.findOne({ email: credentials.email })
            req.user = user
            return next()
        }
    )
}

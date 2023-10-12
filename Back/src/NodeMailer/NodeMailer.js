import nodemailer from 'nodemailer'
import { config } from "../config/config.js"

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.GmailUser,
        pass: config.GmailPass
    }
})

class NodeMailer {

    sendMail = async () => {
        return await transport.sendMail({
            from: 'Testeo biatch <miiikeel@gmail.com',
            to: 'miiikeel@gmail.com',
            subject: 'correo elecronico de prueba',
            html: '<h1> PRUEBA <h1>',
            attachments: {}
        })
    }

}

export default NodeMailer
import twilio from "twilio";
import { config } from "../config/config.js";

const cliente = twilio(config.TwilioSSID, config.twilioToken)

let sendSMS = (persona) =>
    cliente.messages.create({
        body: 'gracias por tu sms',
        from: config.twilioPhone,
        to: config.myPhone
    })

export default sendSMS
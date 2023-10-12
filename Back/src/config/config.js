import dotenv from 'dotenv'
import commander from "../utils/commander.js"
import MongoSingleton from "./singletonMongoConnect.js"


const { mode } = commander.opts()

dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
})


const config = {
    secretSession: process.env.SESSION_SECRET,
    twilioToken: process.env.TWILIO_TOKEN,
    TwilioSSID: process.env.TWILIO_SSID,
    twilioPhone: process.env.TWILIO_PHONE,
    myPhone: process.env.MY_PHONE,
    GmailUser: process.env.GMAIL_USER_APP,
    GmailPass: process.env.GMAIL_PASS_APP,
    privateKeyJwt: process.env.PRIVATE_KEY_JWT,
    PORT: process.env.PORT,
    mongoURL: process.env.LINK_MONGO,
    GHID: process.env.GITHUB_APP_ID,
    GHClientID: process.env.GITHUB_CLIEND_ID,
    callback: process.env.CALLBACK_URL,
    connectDB: async () => MongoSingleton.getInstance()
}

export { config }
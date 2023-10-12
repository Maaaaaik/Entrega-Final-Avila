import { Router } from "express"
const router = Router()



router.get('/mail', (req, res) => {
    nodeMailer.sendMail()
    res.send('Mail enviado')
})

router.get('/sms', (req, res) => {
    sendSMS()
    res.send('sms enviado')
})

router.get('/complejo', (req, res,) => {
    let suma = 0
    for (let i = 0; i < 5e8; i++) {
        suma += i
    }
    res.send({ mensaje: 'operacion compleja', suma })
})

router.get('/simple', (req, res) => {
    let suma = 0;
    for (let i = 0; i < 100000; i++) {
        suma += i;
    }
    res.send({ mensaje: 'operacion simple', suma })
});

export default router
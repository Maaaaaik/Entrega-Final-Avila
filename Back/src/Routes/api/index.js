import { Router } from "express"
import products_router from "./products.js"
import carts_router from "./carts.js"
import cookies_router from "./cookies.js"
import session_router from "./sessions.js"
import auth_router from "./auth.js"
import pruebas_router from './pruebas.js'

const router = Router()

router.use('/cookies', cookies_router)
router.use('/products', products_router)
router.use('/carts', carts_router)
router.use('/users', session_router)
router.use('/auth', auth_router)
router.use('/pruebas', pruebas_router)

export default router 
import { Router } from "express"
import auth from "../../middlewares/auth.js"
import CartController from '../../controllers/cart.controller.js'

const router = Router()

router.get('/', CartController.getCarts)
router.get('/:cid', CartController.getCart)
router.post('/', CartController.createCart)
router.post('/:cid/product/:pid', CartController.addToCart);
router.put('/:pid', CartController.updateCart)
router.delete('/:pid', CartController.deleteCart)



export default router
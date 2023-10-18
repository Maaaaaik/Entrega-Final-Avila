import { Router } from "express"
import CartController from '../../controllers/cart.controller.js'

const router = Router()

router.get('/', CartController.getCarts)
router.get('/:cid', CartController.getCart)
router.post('/', CartController.createCart)
router.post('/:cid/product/:pid', CartController.addToCart);
router.put('/:cid', CartController.updateCart)
router.delete('/:cid', CartController.deleteCart)


export default router
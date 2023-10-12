import { cartService } from "../service/service.js";

class CartController {
    constructor() {
        this.cartService = cartService
    }
    getCarts = async (req, res, next) => {
        try {
            let all = await this.cartService.getCarts()
            if (all.length > 0) {
                return res.json({ status: 200, all })
            }
            let message = 'not found'
            return res.json({ status: 404, message })
        } catch (error) {
            next(error)
        }
    }
    getCart = async (req, res, next) => {
        try {
            let id = req.params.pid
            let one = await this.cartService.getCart(id)
            if (one) {
                return res.json({ status: 200, one })
            }
            let message = 'not found'
            return res.json({ status: 404, message })
        } catch (error) {
            next(error)
        }
    }
    createCart = async (req, res, next) => {
        try {
            let response = await this.cartService.createCart(req.body)
            if (response) {
                return res.json({ status: 201, message: 'cart created' })
            }
            return res.json({ status: 400, message: 'not created' })
        } catch (error) {
            next(error)
        }
    }
    updateCart = async (req, res, next) => {
        try {
            let id = req.params.pid
            let data = req.body
            let response = await this.cartService.updateCart(id, data)
            if (response) {
                return res.json({ status: 200, message: 'cart updated' })
            }
            return res.json({ status: 404, message: 'not found' })
        } catch (error) {
            next(error)
        }
    }

    addToCart = async (req, res, next) => {
        try {
            let cartId = req.params.cid;
            let productId = Number(req.params.pid);

            let cart = this.cartService.Cart.findById(cartId);
            if (!cart) {
                return res.json({ status: 404, message: 'Cart not found' });
            }

            let existingProduct = cart.products.find(product => product.product === productId);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.products.push({ product: productId, quantity: 1 });
            }
            await this.cartService.findByIdAndUpdate(cartId, cart);

            return res.json({ status: 200, message: 'Product added to cart' });
        } catch (error) {
            next(error);
        }
    }

    deleteCart = async (req, res, next) => {
        try {
            let id = req.params.pid
            let response = await this.cartService.deleteCart(id)
            if (response) {
                return res.json({ status: 200, message: 'cart deleted' })
            }
            return res.json({ status: 404, message: 'not found' })
        } catch (error) {
            next(error)
        }
    }
}

export default new CartController()
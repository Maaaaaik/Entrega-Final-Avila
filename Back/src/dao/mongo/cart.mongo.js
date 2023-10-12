import Cart from "./models/carts.model.js"

export default class CartDaoMongo {
    constructor() {
        this.Cart = Cart
    }
    async get() { return await this.Cart.find() }
    async getById(id) { return await this.Cart.findById(id) }
    async create() { return await this.Cart.create(req.body) }
    async addToCart(cartId, cart) {
        return await this.Cart.findByIdAndUpdate(cartId, cart)
    }
    async update(id, data) { return await this.Cart.findByIdAndUpdate(id, data) }
    async delete(id) { return await this.Cart.findByIdAndDelete(id) }
}


class CartRepository {
    constructor(dao) {
        this.dao = dao
    }
    async getCarts() {
        return await this.dao.get()

    }
    async getCart(pid) {
        return await this.dao.getById(id)

    }
    async createCart() {
        return await this.dao.create(req.body)

    }
    async updateCart(pid, updateToCart) {
        return await this.dao.update(cartId, cart)

    }
    async addToCart(pid, updateToCart) {
        return await this.dao.addToCart(id, data)

    }
    async deleteCart(pid) {
        return await this.dao.delete(id)

    }
}
export default CartRepository
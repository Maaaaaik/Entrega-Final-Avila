import Product from "./models/products.model.js";

export default class ProductDaoMongo {
    constructor() {
        this.Product = Product
    }
    async get(page, limit) { return await this.Product.paginate({}, { page, limit }); }
    async create(productData) {
        return await this.Product.create(productData);
    }
    async getById(id) { return await this.Product.findById(id) }
    async update(id, data) { return await this.Product.findByIdAndUpdate(id, data) }
    async update(id, data) { return await this.Product.findByIdAndUpdate(id, data) }
    async delete(id) { return await this.Product.findByIdAndDelete(id) }
}


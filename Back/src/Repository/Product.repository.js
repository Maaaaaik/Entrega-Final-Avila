class ProductRepository {
    constructor(dao) {
        this.dao = dao
    }
    async getProducts(page, limit) {
        return await this.dao.get(page, limit)

    }
    async getProduct(id) {
        return await this.dao.getById(id)

    }
    async createProduct(productData) {
        try {
            console.log('Creating product with data:', productData); // Agrega esta línea para depurar
            return await this.dao.create(productData);
        } catch (error) {
            console.error('Error creating product:', error); // Agrega esta línea para depurar
            throw error;
        }
    }

    async updateProduct(id, data) {
        return await this.dao.update(id, data)

    }
    async deleteProduct(id) {
        return await this.dao.delete(id)

    }
}
export default ProductRepository
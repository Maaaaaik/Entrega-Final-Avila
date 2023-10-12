import { productService } from "../service/service.js";


class ProductController {
    constructor() {
        this.productService = productService
    }
    getProducts = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 6;

            const products = await this.productService.getProducts(page, limit)

            if (products.docs.length > 0) {
                return res.json({ status: 200, products });
            }

            let message = 'No products found';
            return res.json({ status: 404, message });
        } catch (error) {
            next(error);
        }
    }
    getProduct = async (req, res, next) => {
        try {
            let id = req.params.pid
            let product = await this.productService.getProduct(id)
            if (product) {
                return res.json({ status: 200, product })
            }
            let message = 'not found'
            return res.json({ status: 404, message })
        } catch (error) {
            next(error)
        }
    }
    createProduct = async (req, res, next) => {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Token no proporcionado' });
        }

        try {
            // Verificar y decodificar el token
            const decoded = jwt.verify(token, secretKey);

            // El usuario está autenticado, puedes realizar acciones protegidas aquí
            res.json({ message: 'Ruta protegida', user: decoded });
        } catch (error) {
            res.status(401).json({ message: 'Token inválido' });
        }

        try {
            const productData = req.body;
            console.log('Product data:', productData); // Agrega esta línea para depurar
            const response = await this.productService.createProduct(productData);
            if (response) {
                return res.json({ status: 201, message: 'product created' });
            }
            return res.json({ status: 400, message: 'not created' });// Resto del código...
        } catch (error) {
            next(error);
        }
    }

    updateProduct = async (req, res, next) => {
        try {
            let id = req.params.pid
            let data = req.body
            let response = await this.productService.updateProduct(id, data)
            if (response) {
                return res.json({ status: 200, message: 'product updated' })
            }
            return res.json({ status: 404, message: 'not found' })
        } catch (error) {
            next(error)
        }
    }
    deleteProduct = async (req, res, next) => {
        try {
            let id = req.params.pid
            let response = await this.productService.deleteProduct(id)
            if (response) {
                return res.json({ status: 200, message: 'product deleted' })
            }
            return res.json({ status: 404, message: 'not found' })
        } catch (error) {
            next(error)
        }
    }
}

export default new ProductController()
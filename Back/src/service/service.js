import CartDaoMongo from "../dao/mongo/cart.mongo.js"
import ProductRepository from "../Repository/Product.repository.js";
import CartRepository from "../Repository/Cart.Repository.js";
import ProductDaoMongo from "../dao/mongo/product.mongo.js";
import UserDaoMongo from "../dao/mongo/Users.mongo.js"
import UserRepository from '../Repository/User.Repository.js'

export const productService = new ProductRepository(new ProductDaoMongo())
export const cartService = new CartRepository(new CartDaoMongo())
export const userService = new UserRepository(new UserDaoMongo())


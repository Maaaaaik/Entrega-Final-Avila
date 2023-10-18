import { model, Schema } from "mongoose";

let collection = "carts";

let productSchema = new Schema({
    product: { type: Array, ref: 'Product', required: true },
    qty: { type: Number, required: true, default: 1 }
});

let schema = new Schema({
    user: { type: String, ref: 'Users', required: true },
    products: [productSchema]
});

let Cart = model(collection, schema);

export default Cart;






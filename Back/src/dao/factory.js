let ProductDao

switch ('MONGO') {
    case 'MONGO':
        ProductDao = import('./mongo/product.mongo.js')
        break;

    default:
        breake
}

export default ProductDao
import mongoose from 'mongoose';
const productSchema= new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String
    
})
const Product = mongoose.model('products', productSchema);

export default Product;
import mongoose from 'mongoose';
const productSchema= new mongoose.Schema({
    name: {type:String, required:true},
    price: {type:Number, required:true},
    category: {type:String, required:true},
    userId: {type:String, required:true},
    company: {type:String, required:true},
    image: {type:Object, required:true} 
    
},{
    timestamps:true
})
const Product = mongoose.model('products', productSchema);

export default Product;
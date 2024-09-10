import  User  from './db/User.js';
import express from 'express';
import cors from 'cors';
import Product from './db/Product.js';

import './db/config.js'; 

const app = express();
app.use(express.json());
app.use(cors());
app.post("/", async (req,resp)=>{
    let user= new User(req.body);
    let result =await user.save();
    resp.send(result);
})
app.post("/add-product",async (req,resp)=>{
  let product = new Product(req.body);
  let result =await product.save()
  resp.send(result)
});

app.get("/products", async(req,resp)=>{
 let products = await Product.find();
 if(products.length>0){
   resp.send(products)
}
 else{
    resp.send("No Products Founds")
}
});

app.delete("/product/:id", async(req,resp)=>{

 const result = await Product.deleteOne({_id:req.params.id})
 resp.send(result);
});


app.listen(5000, () => {
    console.log("Server started on port 5000");
});

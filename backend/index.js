import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path'; // Import 'path'
import User from './db/User.js';
import Product from './db/Product.js';
import './db/config.js'; 

const app = express();
app.use(express.json());
app.use(cors());

// POST route to create a new user
app.post("/", async (req, resp) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    resp.status(201).send(result);
  } catch (error) {
    resp.status(500).send({ error: "Failed to create user" });
  }
});

// Multer storage configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Public/Images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

// Initialize multer with storage settings
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // Limit file size to 10MB (optional)
});

// POST route to add a new product with file upload support
app.post("/add_product", upload.single('image'), async (req, resp) => {
  try {
    let productData = {
      ...req.body,
      image: req.file ? req.file.filename : null // Save the filename in the database
    };
    
    let product = new Product(productData);
    let result = await product.save();
    resp.status(201).send(result);
  } catch (error) {
    resp.status(500).send({ error: "Failed to add product" });
  }
});

// GET route to retrieve all products
app.get("/products", async (req, resp) => {
  try {
    let products = await Product.find();
    if (products.length > 0) {
      resp.status(200).send(products);
    } else {
      resp.status(404).send({ message: "No products found" });
    }
  } catch (error) {
    resp.status(500).send({ error: "Failed to retrieve products" });
  }
});

// DELETE route to remove a product by its ID
app.delete("/product/:id", async (req, resp) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) {
      resp.status(200).send({ message: "Product deleted successfully" });
    } else {
      resp.status(404).send({ message: "Product not found" });
    }
  } catch (error) {
    resp.status(500).send({ error: "Failed to delete product" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

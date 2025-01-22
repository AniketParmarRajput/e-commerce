// Import required modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url'; // To handle __dirname in ES Modules

// Import User model
import UserModel from './model/User.js'; // Ensure this matches the correct file path

const app = express();

// Define __dirname (because it's not available in ES Modules by default)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/Product', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process on connection error
  });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For handling URL-encoded data
app.use(express.static('public'));

// Serve static files from 'public/images'
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Ensure the directory exists for uploads
const uploadDir = path.join(__dirname, 'public/images');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, `${file.fieldname}_${uniqueSuffix}`);
  },
});

// Initialize multer with storage configuration
const upload = multer({ storage });

// File upload route
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const { name, prize, categories } = req.body;

    if (!name || !prize || !categories) {
      return res.status(400).send('Missing required fields (name, prize, categories).');
    }

    const product = await UserModel.create({
      name,
      categories,
      prize: Number(prize),
      image: req.file.filename,
    });

    res.status(200).send({
      message: 'File uploaded successfully',
      file: req.file,
      product,
    });
  } catch (err) {
    console.error('Error uploading file:', err);
    res.status(500).send('Error saving to database.');
  }
});

// Fetch all products route
app.get('/getimage', async (req, res) => {
  try {
    const products = await UserModel.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Error fetching products.');
  }
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

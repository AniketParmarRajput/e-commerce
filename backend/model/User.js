// Multer.js
import mongoose from 'mongoose'; // Use import for ES Modules

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name field is required
  categories: { type: [String], required: true }, // Categories is an array of strings
  prize: { type: Number, required: true }, // Prize is a required number
  image: { type: String, required: true }, // Image is a required string
});

// Create the model
const UserModel = mongoose.model('User', userSchema);

// Export the model
export default UserModel;

import React, { useState, useRef } from 'react';
import './AddProduct.css'; // Import the CSS file
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddProduct = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [prize, setPrize] = useState('');
  const [categories, setCategories] = useState('');
  const [uploadedData, setUploadedData] = useState(null); // State to store uploaded data
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file || !name || !prize || !categories) {
      alert('Please fill all fields and select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('prize', prize);
    formData.append('categories', categories);

    // Perform API call to backend (assuming the server is running on http://localhost:8000)
    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setUploadedData(data.product); // Set uploaded data after successful upload
        alert('Product uploaded successfully!');
      })
      .catch(error => {
        alert('Error uploading product');
        console.error(error);
      });

    // Reset form fields after upload
    setFile(null);
    setName('');
    setCategories(''); // Reset categories state
    setPrize('');
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear the file input
    }
  };

  return (
    <div className="addProduct">
      <div className="formContainer">
        <h2>Add a New Product</h2>
        <label>Name</label>
        <input
          type="text"
          value={name}
          placeholder="Product name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Prize</label>
        <input
          type="number"
          value={prize}
          placeholder="Product prize"
          onChange={(e) => setPrize(Number(e.target.value))}
        />
        <label>Categories</label>
        <input
          type="text"
          value={categories}
          placeholder="Categories"
          onChange={(e) => setCategories(e.target.value)}
        />
        <label>Upload Image</label>
        {/* Custom file upload button */}
        <label htmlFor="fileInput" className="custom-file-upload">
          <CloudUploadIcon style={{ color: '#d3d3d3' }} />
        </label>
        <input
          type="file"
          id="fileInput"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <button
          onClick={handleUpload}
          disabled={!file || !name || !prize || !categories} // Updated condition to include categories
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default AddProduct;

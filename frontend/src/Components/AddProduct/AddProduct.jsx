import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [image, setImage] = React.useState("");   // Corrected spelling of setCompany
    const [error, setError] = React.useState(false); 
    const [success, setSuccess] = React.useState(false);// error in inputs

    const addProduct = async () => {
        setError(false);
        setSuccess(false);
    
        if (!name || !price || !category || !company || !image) {
            setError(true);
            console.warn("All fields are required.");
            return;
        }
    
        // Retrieve the user data from localStorage
        const user = localStorage.getItem('user');
    
        if (!user) {
            console.error("User not found in localStorage");
            // Optionally, redirect the user to the login page or show a message
            // window.location.href = "/login"; // Uncomment this line to redirect
            return;
        }
    
        const userData = JSON.parse(user);
        const userId = userData._id;
    
        try {
            const response = await fetch("http://localhost:5000/add-product", {
                method: 'POST',
                body: JSON.stringify({ name, price, category, company, userId }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            const result = await response.json();
    
            if (response.ok) {
                console.warn("Product added successfully:", result);
                setSuccess(true);
                setName("");
                setPrice("");
                setImage("")
                setCategory("");
                setCompany("");
            } else {
                console.error("Error adding product:", result.message || "Unknown error");
            }
        } catch (error) {
            console.error("Error during the request:", error);
        }
    };
    

    return (
        <div className="h-1/2 flex flex-col space-y-4 justify-center items-center border border-black rounded-md p-6 bg-gray-50 shadow-md">
            <h1 className="text-2xl font-semibold text-gray-800">Add Product</h1>
            <input
                required
                type="text"
                placeholder="Enter product name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name} onChange={(e) => setName(e.target.value)}
            />
              {error &&  !name && <span className='text-red-500'>Enter a valid name</span>}
            <input
                required
                type="text"
                placeholder="Enter product price"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={price} onChange={(e) => setPrice(e.target.value)}
            />
            {error &&  !price && <span className='text-red-500'>Enter a valid product price</span>}
            
            <input
                required
                type="text"
                placeholder="Enter product category"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={category} onChange={(e) => setCategory(e.target.value)}
            />
            {error &&  !category && <span className='text-red-500'>Enter a valid product category</span>}
            <input
                required
                type="text"
                placeholder="Enter product company"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={company} onChange={(e) => setCompany(e.target.value)}
            />
            {error &&  !company && <span className='text-red-500'>Enter a valid product company</span>}
            <input
                type="file"
                accept="image/*"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setImage(e.target.files[0])} // Set image file
            />
            {error && !image && <span className='text-red-500'>Please upload an image</span>}
            <button 
                onClick={addProduct} 
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Add Product
            </button>
        </div>
    );
}

export default AddProduct;

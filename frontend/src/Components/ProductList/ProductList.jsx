import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  // Fetch products from the server
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/getimage'); // Replace with your server URL
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json(); // Parse the JSON response
      setProducts(data); // Update the products state
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Error fetching products. Please try again later.');
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 style={styles.header}>Product List</h1>

      {/* Display error message if there is an error */}
      {error && <p style={styles.error}>{error}</p>}

      <div id="product-list" style={styles.productList}>
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="product" style={styles.productCard}>
              <p style={styles.categories}>Categories: {product.categories.join(', ')}</p>
              <img
                src={`http://localhost:8000/images/${product.image}`}
                alt={product.name}
                style={styles.image}
              />
              <h2 style={styles.productName}>{product.name}</h2>
              <p style={styles.price}>Prize: &#8377; {product.prize}</p>
              <button style={styles.button}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  header: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '30px',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
  },
  productCard: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '12px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
    },
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  categories: {
    marginBottom: '10px',
    fontSize: '14px',
    color: '#888',
    fontWeight: '500',
  },
  productName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '10px',
  },
  price: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  error: {
    color: 'red',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default ProductList;

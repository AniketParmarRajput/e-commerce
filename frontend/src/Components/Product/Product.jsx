import React, { useState, useEffect } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.in/api/products');
        const data = await response.json();

        console.log("Fetched Data:", data); // Log the data for debugging

        // Handle nested product arrays
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Unexpected response format:', data);
          setProducts([]);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-2xl">Loading...</div>;
  }

  if (!products || products.length === 0) {
    return <div className="text-center text-2xl">No products found!</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-80 object-contain mb-4"
          />
          <h2 className="text-lg font-bold text-center text-primary-black hover:text-primary-Camel transition duration-200 ease-in-out">
  {product.title}
</h2>

          <p className="text-primary-Camel font-bold text-lg mt-2">${product.price}</p>
          <button className="mt-4 px-4 py-2 bg-primary-Camel text-white rounded hover:bg-primary-black transition">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;




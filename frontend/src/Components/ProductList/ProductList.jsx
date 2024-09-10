import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">Error: {error}</div>;
  }

  const deleteProduct=(id)=>{
    console.log(id)

  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Products</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-black">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">S.No</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">Operation</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr key={product._id} className="border-b hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.prize}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><button onClick={()=>deleteProduct(product.id)}>Delete</button></td>
                </tr>
                
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;

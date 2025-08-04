import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/product')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-xl font-medium">Loading products...</div>;
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100 rounded-2xl shadow-md p-4 hover:shadow-xl transition">
            <img
              src={product.Thumbnail}
              alt={product.ProductName}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold">{product.ProductName}</h2>
            <p className="text-sm text-gray-500 mb-2">{product.Description}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-green-600 font-bold text-lg">${product.Price.toFixed(2)}</span>
              <span className="text-sm text-gray-600">Stock: {product.Stock}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Code: {product.ProductCode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

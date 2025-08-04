import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [favMessage, setFavMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  const addToFavourites = async (product) => {
    try {
      const userId = localStorage.getItem("userId"); // Get userId from localStorage or other source

      if (!userId) {
        setFavMessage("❌ Please login to add favourites.");
        return;
      }

      await axios.post("http://localhost:5000/api/favourites/add", {
        userId,
        productId: product._id, // Use _id as productId
      });

      setFavMessage(`❤️ ${product.ProductName} added to favourites!`);
      setTimeout(() => setFavMessage(""), 3000);
    } catch (err) {
      console.error("Error adding to favourites", err);
      setFavMessage("❌ Failed to add to favourites.");
      setTimeout(() => setFavMessage(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to Our Store</h1>

      {favMessage && (
        <div className="text-center text-green-600 font-medium mb-4">{favMessage}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.Thumbnail}
              alt={product.ProductName}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h2 className="text-xl font-semibold">{product.ProductName}</h2>
            <p className="text-sm text-gray-600 mb-1">{product.Description}</p>
            <p className="text-green-600 font-bold mb-2">${product.Price.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mb-3">Stock: {product.Stock}</p>
            <button
              onClick={() => addToFavourites(product)}
              className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition w-full justify-center"
            >
              <FaHeart /> Add to Favourites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

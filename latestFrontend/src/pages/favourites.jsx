import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const Favourites = () => {
  const userId = localStorage.getItem("userId"); // Get userId from localStorage or other source
  const [favourites, setFavourites] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch user's favourite products
  useEffect(() => {
    if (!userId) return;

    const fetchFavourites = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/favorites/${userId}`);
        setFavourites(response.data.favorites); // <-- access .favorites here
      } catch (err) {
        console.error("Failed to load favourites:", err);
      }
    };

    fetchFavourites();
  }, [userId]);

  // Remove item from favourites
  const removeFavourite = async (productId) => {
    try {
      await axios.delete("http://localhost:5000/api/favorites/remove", {
        data: { userId, productId },
      });

      setFavourites((prev) => prev.filter((item) => item._id !== productId));
      setMessage("❌ Removed from favourites.");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Error removing from favourites:", err);
      setMessage("Error removing item.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  if (!userId) {
    return <p className="text-center text-red-600 mt-8">Please log in to view your favourites.</p>;
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Favourites</h1>

      {message && (
        <div className="text-center text-red-600 font-medium mb-4">{message}</div>
      )}

      {favourites.length === 0 ? (
        <p className="text-center text-gray-500">You have no favourites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favourites.map((product) => (
            <div
              key={product._id}
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
                onClick={() => removeFavourite(product._id)}
                className="flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition w-full"
              >
                <FaTrash /> Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;

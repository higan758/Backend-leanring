// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [favMessage, setFavMessage] = useState("");

  const userId = "68804a37af89c278c4fda523"; // Replace with logged-in user ID

  // Fetch products
  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/api/product")
      .then((res) => {
        setProducts(res.data);
        setCategories([...new Set(res.data.map((p) => p.category))]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(fetchProducts, 5000);
    return () => clearInterval(interval);
  }, []);

  // Add to Favourites
  const addToFavorites = (productId) => {
    axios
      .post("http://localhost:5000/api/favorites/add", {
        userId,
        productId,
      })
      .then(() => {
        setFavMessage("Added to favourites!");
        setTimeout(() => setFavMessage(""), 2000);
      })
      .catch((err) => {
        console.error(err);
        setFavMessage("Error adding to favourites");
      });
  };

  // Add to Cart (you can hook this to your cart API)
  const addToCart = (product) => {
    console.log("Added to cart:", product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white">
      {/* Show message */}
      {favMessage && (
        <div className="bg-green-100 text-green-700 p-2 text-center">
          {favMessage}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Upgrade your style with our latest arrivals and timeless classics.
          </p>
          <a
            href="#shop"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-12 container mx-auto px-6" id="shop">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const sampleProduct = products.find((p) => p.category === cat);
            return (
              <div
                key={idx}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                {sampleProduct?.images?.[0] ? (
                  <img
                    src={sampleProduct.images[0]}
                    alt={cat}
                    className="h-40 w-full object-cover"
                  />
                ) : (
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">{cat}</span>
                  </div>
                )}
                <div className="p-4 text-center">
                  <a
                    href={`/category/${cat}`}
                    className="text-black font-semibold hover:underline"
                  >
                    Explore {cat}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Products */}
      <section className="py-12 container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Products</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={
                    product.images?.length > 0
                      ? product.images[0]
                      : "/placeholder.jpg"
                  }
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-500"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => addToFavorites(product._id)}
                      className="flex-1 bg-red-600 text-white px-3 py-2 rounded hover:bg-red-500"
                    >
                      ❤️ Fav
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;

// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch products from API
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/product")
      .then((res) => {
        setProducts(res.data);
        // Extract unique categories
        const uniqueCategories = [
          ...new Set(res.data.map((p) => p.category)),
        ].slice(0, 4); // Top 4 categories
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white">
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
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">{cat}</span>
              </div>
              <div className="p-4 text-center">
                <a
                  href={`/category/${cat}`}
                  className="text-black font-semibold hover:underline"
                >
                  Explore {cat}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products
            .filter((product) => product.isFeatured)
            .slice(0, 4)
            .map((product) => (
              <div
                key={product._id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={product.images && product.images.length > 0 ? product.images[0] : "/placeholder.jpg"}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sophia R.",
                text: "Absolutely love the quality and style of these clothes!",
              },
              {
                name: "Liam K.",
                text: "Fast shipping and the packaging was beautiful!",
              },
              {
                name: "Emma W.",
                text: "Customer service was super helpful and friendly.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                <h4 className="font-bold text-gray-800">- {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram / TikTok Feed */}
      <section className="py-12 container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          Follow Us on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-gray-200 h-40 flex items-center justify-center text-gray-400"
            >
              IG Post {i}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

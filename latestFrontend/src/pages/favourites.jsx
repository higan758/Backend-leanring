import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiStar, FiChevronLeft } from 'react-icons/fi';

const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading favorite products (in a real app, this would come from context/API)
    const fetchFavoriteProducts = async () => {
      try {
        // Mock data - these would be the products the user has favorited
        const mockFavoriteProducts = [
          {
            "ProductName": "Elderborn: Chronicles of Valara",
            "ProductCode": "GAME-VALARA-2025-EX92345",
            "Price": 49.99,
            "Stock": 120,
            "Thumbnail": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "An epic open-world RPG where you battle mythic beasts and uncover ancient secrets in the realm of Valara.",
            "Rating": 4.8,
            "Platforms": ["PC", "PS5", "Xbox Series X"],
            "Genre": ["RPG", "Open World", "Adventure"],
            "IsNew": true
          },
          {
            "ProductName": "Shadow of the Forgotten",
            "ProductCode": "GAME-SHADOW-2025-FT36987",
            "Price": 54.99,
            "Stock": 62,
            "Thumbnail": "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "A dark fantasy adventure with souls-like combat and hauntingly beautiful environments.",
            "Rating": 4.9,
            "Platforms": ["PC", "PS5", "Xbox Series X", "Switch"],
            "Genre": ["Adventure", "Action", "RPG"],
            "IsNew": false
          }
        ];

        setFavoriteProducts(mockFavoriteProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
        setLoading(false);
      }
    };

    fetchFavoriteProducts();
  }, []);

  const removeFromFavorites = (productCode) => {
    setFavoriteProducts(favoriteProducts.filter(product => product.ProductCode !== productCode));
    // In a real app, you would also update the favorites in context/backend
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with back button */}
        <div className="flex items-center mb-6">
          <Link to="/" className="flex items-center text-purple-600 hover:text-purple-800 mr-4">
            <FiChevronLeft className="mr-1" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Your Favorite Games</h1>
        </div>

        {/* Empty state */}
        {favoriteProducts.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FiHeart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">No favorites yet</h2>
            <p className="text-gray-600 mb-6">Games you favorite will appear here</p>
            <Link 
              to="/products" 
              className="inline-block px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Browse Games
            </Link>
          </div>
        )}

        {/* Favorites grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteProducts.map((product) => (
            <div key={product.ProductCode} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
              <div className="relative">
                <Link to={`/product/${product.ProductCode}`}>
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={product.Thumbnail} 
                      alt={product.ProductName} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x400?text=Game+Image';
                      }}
                    />
                  </div>
                </Link>
                {product.IsNew && (
                  <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </div>
                )}
                <button
                  onClick={() => removeFromFavorites(product.ProductCode)}
                  className="absolute top-2 right-2 p-2 rounded-full text-red-500 bg-white hover:bg-red-50"
                >
                  <FiHeart className="w-5 h-5 fill-current" />
                </button>
              </div>
              <div className="p-4">
                <Link to={`/product/${product.ProductCode}`} className="hover:text-purple-600">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">{product.ProductName}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FiStar 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(product.Rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-gray-600">{product.Rating}</span>
                      </div>
                    </div>
                    <div className="text-purple-600 font-bold">${product.Price.toFixed(2)}</div>
                  </div>
                </Link>
                <div className="flex flex-wrap gap-1 mt-2">
                  {product.Platforms.map(platform => (
                    <span key={platform} className="text-xs bg-gray-100 px-2 py-1 rounded">{platform}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {product.Genre.map(genre => (
                    <span key={genre} className="text-xs bg-gray-100 px-2 py-1 rounded">{genre}</span>
                  ))}
                </div>
                <div className="mt-4 flex justify-between">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-medium text-sm">
                    <FiShoppingCart className="inline mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
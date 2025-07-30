import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiStar, FiShoppingCart, FiHeart, FiShare2, FiChevronLeft } from 'react-icons/fi';

const Product = () => {
  const { productCode } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Simulate API fetch for product details
    const fetchProduct = async () => {
      try {
        // In a real app, this would be an API call with productCode
        const mockProducts = {
          "GAME-VALARA-2025-EX92345": {
            "ProductName": "Elderborn: Chronicles of Valara",
            "Price": 49.99,
            "Stock": 120,
            "Thumbnail": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "An epic open-world RPG where you battle mythic beasts and uncover ancient secrets in the realm of Valara.",
            "Rating": 4.8,
            "Reviews": 215,
            "Developer": "Valara Studios",
            "Publisher": "Epic Games Publishing",
            "ReleaseDate": "2025-03-15",
            "Genre": ["RPG", "Open World", "Adventure"],
            "Platforms": ["PC", "PS5", "Xbox Series X"],
            "Screenshots": [
              "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            ],
            "Features": [
              "Vast open world to explore with dynamic weather",
              "Deep character customization with 12 unique classes",
              "Real-time combat with tactical elements",
              "Branching storyline with 36 possible endings",
              "4-player online co-op mode"
            ]
          },
          "GAME-CYBER-2077-NX78451": {
            "ProductName": "Cyber Nexus 2077",
            "Price": 59.99,
            "Stock": 85,
            "Thumbnail": "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "Immerse yourself in a dystopian future filled with high-tech gadgets and cyber-enhanced gameplay in this groundbreaking action RPG.",
            "Rating": 4.5,
            "Reviews": 189,
            "Developer": "Neon Dreams Interactive",
            "Publisher": "FutureTech Games",
            "ReleaseDate": "2023-11-21",
            "Genre": ["Action", "Cyberpunk", "FPS"],
            "Platforms": ["PC", "PS5"],
            "Screenshots": [
              "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1549317661-bd32b8e9b8e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            ],
            "Features": [
              "Neon-lit open world city with day/night cycle",
              "Cyberware augmentation system with 50+ upgrades",
              "First-person shooter mechanics with RPG progression",
              "Non-linear story with meaningful choices",
              "Vehicle combat and hacking mini-games"
            ]
          },
          "GAME-STAR-2024-SL45210": {
            "ProductName": "Starlight Strategy",
            "Price": 39.99,
            "Stock": 45,
            "Thumbnail": "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "Command interstellar fleets and build your empire across the galaxy in this 4X strategy masterpiece with turn-based tactical combat.",
            "Rating": 4.7,
            "Reviews": 92,
            "Developer": "Cosmic Forge Studios",
            "Publisher": "Strategy First",
            "ReleaseDate": "2024-06-10",
            "Genre": ["Strategy", "Space", "4X"],
            "Platforms": ["PC", "Mac"],
            "Screenshots": [
              "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            ],
            "Features": [
              "Build and manage a space empire across 100+ star systems",
              "Turn-based tactical combat with customizable ships",
              "16 unique alien races with distinct playstyles",
              "Deep technology tree with 200+ research options",
              "Multiplayer mode with up to 8 players"
            ]
          },
          "GAME-SHADOW-2025-FT36987": {
            "ProductName": "Shadow of the Forgotten",
            "Price": 54.99,
            "Stock": 62,
            "Thumbnail": "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "A dark fantasy adventure with souls-like combat and hauntingly beautiful environments in a world consumed by darkness.",
            "Rating": 4.9,
            "Reviews": 156,
            "Developer": "Dark Realm Games",
            "Publisher": "Midnight Studios",
            "ReleaseDate": "2025-02-28",
            "Genre": ["Adventure", "Action", "RPG"],
            "Platforms": ["PC", "PS5", "Xbox Series X", "Switch"],
            "Screenshots": [
              "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1534423855097-49e3f5b85c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            ],
            "Features": [
              "Challenging souls-like combat with parry and dodge mechanics",
              "Atmospheric open world with dynamic lighting",
              "Character progression with 7 skill trees",
              "Crafting system using materials from defeated enemies",
              "New Game+ mode with additional challenges"
            ]
          }
        };

        // Get similar products (exclude current product)
        const currentProduct = mockProducts[productCode] || mockProducts["GAME-VALARA-2025-EX92345"];
        const similar = Object.values(mockProducts)
          .filter(p => p.ProductName !== currentProduct.ProductName)
          .slice(0, 4);

        setProduct(currentProduct);
        setSimilarProducts(similar);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productCode]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.ProductName} to cart`);
    // In a real app, you would add to cart context/state
  };

  const handleWishlist = () => {
    setIsFavorite(!isFavorite);
    console.log(`${isFavorite ? 'Removed from' : 'Added to'} wishlist: ${product.ProductName}`);
    // In a real app, you would update user's wishlist
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-700">Product not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link to="/products" className="flex items-center text-purple-600 hover:text-purple-800 mb-6">
          <FiChevronLeft className="mr-1" /> Back to Products
        </Link>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Images */}
            <div className="md:w-1/2 p-6">
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.Screenshots[selectedImage]} 
                  alt={product.ProductName} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/500x500?text=Game+Image';
                  }}
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.Screenshots.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`h-20 bg-gray-200 rounded-md overflow-hidden ${selectedImage === index ? 'ring-2 ring-purple-500' : ''}`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.ProductName} screenshot ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{product.ProductName}</h1>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(product.Rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{product.Rating} ({product.Reviews} reviews)</span>
                  </div>
                </div>
                <button 
                  onClick={handleWishlist}
                  className={`${isFavorite ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
                >
                  <FiHeart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="mt-6">
                <p className="text-3xl font-bold text-gray-900">${product.Price.toFixed(2)}</p>
                <p className={`mt-2 text-sm ${product.Stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.Stock > 0 ? `${product.Stock} available in stock` : 'Out of stock'}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Description</h3>
                <p className="mt-2 text-gray-600">{product.Description}</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Developer</h4>
                  <p className="mt-1 text-sm text-gray-900">{product.Developer}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Publisher</h4>
                  <p className="mt-1 text-sm text-gray-900">{product.Publisher}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Release Date</h4>
                  <p className="mt-1 text-sm text-gray-900">{new Date(product.ReleaseDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Platforms</h4>
                  <p className="mt-1 text-sm text-gray-900">{product.Platforms.join(', ')}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  {product.Features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <div className="flex items-center">
                  <label htmlFor="quantity" className="mr-4 text-sm font-medium text-gray-700">Quantity</label>
                  <div className="flex border border-gray-300 rounded-md">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={product.Stock <= 0}
                    className={`flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-md font-medium ${product.Stock <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <FiShoppingCart className="inline mr-2" />
                    Add to Cart
                  </button>
                  <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
                    <FiShare2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Games You Might Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((game) => (
              <div key={game.ProductName} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`/product/${game.ProductCode || 'GAME-VALARA-2025-EX92345'}`}>
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={game.Thumbnail} 
                      alt={game.ProductName} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x400?text=Game+Image';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{game.ProductName}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FiStar 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(game.Rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="ml-1 text-sm text-gray-600">{game.Rating}</span>
                    </div>
                    <p className="text-purple-600 font-bold">${game.Price.toFixed(2)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
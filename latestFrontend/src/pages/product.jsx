import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { productCode } = useParams();

  useEffect(() => {
    // Simulate API fetch for product details
    const fetchProductData = async () => {
      try {
        // Mock data for the product
        const mockProductData = {
          "ProductName": "Elderborn: Chronicles of Valara",
          "ProductCode": "GAME-VALARA-2025-EX92345",
          "Price": 49.99,
          "Stock": 120,
          "Thumbnail": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          "Images": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          ],
          "Description": "An epic open-world RPG where you battle mythic beasts and uncover ancient secrets in the realm of Valara. Explore vast landscapes, engage in deep character customization, and make choices that shape the world around you.",
          "LongDescription": "Elderborn: Chronicles of Valara is a next-generation RPG experience set in the expansive fantasy world of Valara. With over 100 hours of gameplay, players can explore diverse regions, from frozen tundras to scorching deserts, each with unique ecosystems and cultures. The game features a dynamic combat system that blends magic, melee, and ranged attacks with precision timing. Your choices matter - ally with factions, shape political landscapes, and experience consequences that ripple throughout your journey. The game includes a robust crafting system, housing mechanics, and multiplayer cooperative dungeons for up to 4 players.",
          "Category": "RPG",
          "Rating": 4.8,
          "Features": [
            "Open world with dynamic weather and day/night cycles",
            "Deep character customization with 6 playable races",
            "Branching narrative with multiple endings",
            "Co-op multiplayer for dungeons and raids",
            "Mod support with Steam Workshop integration"
          ],
          "SystemRequirements": {
            "OS": "Windows 10 64-bit",
            "Processor": "Intel Core i5-6600K or AMD Ryzen 5 1400",
            "Memory": "8 GB RAM",
            "Graphics": "NVIDIA GeForce GTX 970 or AMD Radeon RX 570",
            "Storage": "60 GB available space"
          },
          "ReleaseDate": "2025-03-15",
          "Developer": "Valara Studios",
          "Publisher": "Epic Games Publishing"
        };

        // Mock data for related products
        const mockRelatedProducts = [
          {
            "ProductName": "Shadow of the Forgotten",
            "ProductCode": "GAME-SHADOW-2025-FT36987",
            "Price": 54.99,
            "Stock": 62,
            "Thumbnail": "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "A dark fantasy adventure with souls-like combat and hauntingly beautiful environments.",
            "Category": "Adventure",
            "Rating": 4.9
          },
          {
            "ProductName": "Cyber Nexus 2077",
            "ProductCode": "GAME-CYBER-2077-NX78451",
            "Price": 59.99,
            "Stock": 85,
            "Thumbnail": "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "Immerse yourself in a dystopian future filled with high-tech gadgets and cyber-enhanced gameplay.",
            "Category": "Action",
            "Rating": 4.5
          },
          {
            "ProductName": "Starlight Strategy",
            "ProductCode": "GAME-STAR-2024-SL45210",
            "Price": 39.99,
            "Stock": 45,
            "Thumbnail": "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "Command interstellar fleets and build your empire across the galaxy in this 4X strategy masterpiece.",
            "Category": "Strategy",
            "Rating": 4.7
          }
        ];

        setProduct(mockProductData);
        setRelatedProducts(mockRelatedProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, [productCode]);

  if (isLoading) {
    return (
      <div className="max-w-[1200px] mx-auto px-5 py-20 grid place-items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-[1200px] mx-auto px-5 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors duration-300">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-6 text-sm text-gray-600">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/category/${product.Category.toLowerCase()}`} className="hover:text-purple-600 capitalize">{product.Category}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">{product.ProductName}</span>
      </nav>

      {/* Product Main Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
            <img 
              src={product.Images[0]} 
              alt={product.ProductName}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600?text=Game+Image';
              }}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.Images.map((image, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md cursor-pointer">
                <img 
                  src={image} 
                  alt={`${product.ProductName} ${index + 1}`}
                  className="w-full h-24 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Game+Image';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <div className="mb-4">
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded capitalize">
              {product.Category}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.ProductName}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(product.Rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-600 ml-1 text-sm">
                {product.Rating} ({Math.floor(product.Rating * 42)} reviews)
              </span>
            </div>
            <span className={`text-xs px-2 py-1 rounded ${product.Stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {product.Stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">${product.Price.toFixed(2)}</span>
            {product.Price > 59.99 && (
              <span className="ml-2 text-sm text-gray-500 line-through">$69.99</span>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.Description}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button 
              className={`bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors duration-300 ${
                product.Stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={product.Stock === 0}
            >
              {product.Stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-md transition-colors duration-300">
              Add to Wishlist
            </button>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Developer</h3>
                <p className="text-sm">{product.Developer}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Publisher</h3>
                <p className="text-sm">{product.Publisher}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Release Date</h3>
                <p className="text-sm">{new Date(product.ReleaseDate).toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Product Code</h3>
                <p className="text-sm">{product.ProductCode}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-12">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button className="mr-8 py-4 px-1 border-b-2 font-medium text-sm border-purple-500 text-purple-600">
              Description
            </button>
            <button className="mr-8 py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Features
            </button>
            <button className="mr-8 py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
              System Requirements
            </button>
            <button className="py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Reviews
            </button>
          </nav>
        </div>
        <div className="py-6">
          <h3 className="text-xl font-semibold mb-4">About This Game</h3>
          <p className="text-gray-700 mb-6">{product.LongDescription}</p>
          
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {product.Features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((game) => (
            <div 
              key={game.ProductCode} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.Thumbnail} 
                  alt={game.ProductName}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x400?text=Game+Image';
                  }}
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                  {game.Category}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{game.ProductName}</h3>
                  <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{game.Rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {game.Description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-purple-600 text-lg font-bold">${game.Price.toFixed(2)}</div>
                  <Link 
                    to={`/game/${game.ProductCode}`} 
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-center transition-colors duration-300 text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
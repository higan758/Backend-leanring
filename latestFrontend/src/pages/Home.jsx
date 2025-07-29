import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [featuredGames, setFeaturedGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch with more game products
    const fetchFeaturedGames = async () => {
      try {
        const mockData = [
          {
            "ProductName": "Elderborn: Chronicles of Valara",
            "ProductCode": "GAME-VALARA-2025-EX92345",
            "Price": 49.99,
            "Stock": 120,
            "Thumbnail": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "An epic open-world RPG where you battle mythic beasts and uncover ancient secrets in the realm of Valara.",
            "Category": "RPG",
            "Rating": 4.8
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
          },
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
            "ProductName": "Neon Racers X",
            "ProductCode": "GAME-NEON-2024-NR78520",
            "Price": 44.99,
            "Stock": 110,
            "Thumbnail": "https://images.unsplash.com/photo-1549317661-bd32b8e9b8e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "High-octane racing through futuristic cities with customizable vehicles and intense multiplayer.",
            "Category": "Racing",
            "Rating": 4.3
          },
          {
            "ProductName": "Puzzle Dimensions",
            "ProductCode": "GAME-PUZZLE-2025-PD96321",
            "Price": 29.99,
            "Stock": 200,
            "Thumbnail": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "Mind-bending puzzles that transcend reality with physics-defying challenges across multiple dimensions.",
            "Category": "Puzzle",
            "Rating": 4.6
          },
          {
            "ProductName": "Zombie Outbreak: Survival",
            "ProductCode": "GAME-ZOMBIE-2024-ZO45213",
            "Price": 49.99,
            "Stock": 78,
            "Thumbnail": "https://images.unsplash.com/photo-1534423855097-49e3f5b85c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "Survive the apocalypse in this intense cooperative shooter with base-building elements.",
            "Category": "FPS",
            "Rating": 4.4
          },
          {
            "ProductName": "Fantasy Football 2025",
            "ProductCode": "GAME-FF-2025-FF78542",
            "Price": 59.99,
            "Stock": 95,
            "Thumbnail": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "The most realistic football simulation with enhanced AI and stunning graphics.",
            "Category": "Sports",
            "Rating": 4.7
          }
        ];
        
        setFeaturedGames(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching games:", error);
        setIsLoading(false);
      }
    };

    fetchFeaturedGames();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-8">
      {/* Hero Section */}
      <section 
        className="bg-[url('https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white rounded-lg mb-10 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
        }}
      >
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl mb-6">Explore our vast collection of epic games and exclusive titles</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md text-lg transition-colors duration-300">
            Browse Games
          </button>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Featured Games</h2>
          <Link to="/games" className="text-purple-600 hover:text-purple-700 font-medium">
            View All →
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid place-items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
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
                  {game.Stock < 50 && (
                    <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                      Low Stock
                    </div>
                  )}
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
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-purple-600 text-xl font-bold">${game.Price.toFixed(2)}</div>
                    <div className={`text-xs px-2 py-1 rounded ${game.Stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {game.Stock > 0 ? `${game.Stock} available` : 'Out of stock'}
                    </div>
                  </div>
                  <div className="flex justify-between gap-2">
                    <button 
                      className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex-1 transition-colors duration-300 ${game.Stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={game.Stock === 0}
                    >
                      {game.Stock > 0 ? 'Add to Cart' : 'Sold Out'}
                    </button>
                    <Link 
                      to={`/game/${game.ProductCode}`} 
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-center transition-colors duration-300 text-sm"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['RPG', 'Action', 'Strategy', 'Adventure', 'Racing', 'Puzzle', 'FPS', 'Sports'].map((category) => (
            <Link 
              to={`/category/${category.toLowerCase()}`} 
              key={category}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3 ${
                category === 'RPG' ? 'bg-orange-500' :
                category === 'Action' ? 'bg-blue-500' :
                category === 'Strategy' ? 'bg-teal-500' :
                category === 'Adventure' ? 'bg-purple-500' :
                category === 'Racing' ? 'bg-red-500' :
                category === 'Puzzle' ? 'bg-yellow-500' :
                category === 'FPS' ? 'bg-green-500' : 'bg-indigo-500'
              } text-white`}>
                {category.substring(0, 3)}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 rounded-lg p-10 mb-10 text-center">
        <h2 className="text-3xl font-bold mb-3 text-gray-800">Stay Updated</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Subscribe to our newsletter for the latest releases, exclusive deals, and gaming news delivered straight to your inbox</p>
        <form className="max-w-lg mx-auto flex">
          <input 
            type="email" 
            placeholder="Your email address" 
            required 
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button 
            type="submit" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-r-md transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
      </section>
    </div>
  );
};

export default Home;
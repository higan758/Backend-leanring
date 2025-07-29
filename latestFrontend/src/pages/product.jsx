import React, { useState, useEffect } from 'react';
import { FiHeart, FiFilter, FiStar, FiShoppingCart } from 'react-icons/fi';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortOption, setSortOption] = useState('featured');

  useEffect(() => {
    // Simulate API fetch
    const fetchProducts = async () => {
      try {
        // Mock data with more products
        const mockProducts = [
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
            "ProductName": "Cyber Nexus 2077",
            "ProductCode": "GAME-CYBER-2077-NX78451",
            "Price": 59.99,
            "Stock": 85,
            "Thumbnail": "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "Immerse yourself in a dystopian future filled with high-tech gadgets and cyber-enhanced gameplay.",
            "Rating": 4.5,
            "Platforms": ["PC", "PS5"],
            "Genre": ["Action", "Cyberpunk", "FPS"],
            "IsNew": false
          },
          {
            "ProductName": "Starlight Strategy",
            "ProductCode": "GAME-STAR-2024-SL45210",
            "Price": 39.99,
            "Stock": 45,
            "Thumbnail": "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "Command interstellar fleets and build your empire across the galaxy in this 4X strategy masterpiece.",
            "Rating": 4.7,
            "Platforms": ["PC", "Mac"],
            "Genre": ["Strategy", "Space", "4X"],
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
          },
          {
            "ProductName": "Neon Racers X",
            "ProductCode": "GAME-NEON-2024-NR78520",
            "Price": 44.99,
            "Stock": 110,
            "Thumbnail": "https://images.unsplash.com/photo-1549317661-bd32b8e9b8e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "High-octane racing through futuristic cities with customizable vehicles and intense multiplayer.",
            "Rating": 4.3,
            "Platforms": ["PC", "PS5", "Xbox Series X"],
            "Genre": ["Racing", "Sports", "Multiplayer"],
            "IsNew": true
          },
          {
            "ProductName": "Puzzle Dimensions",
            "ProductCode": "GAME-PUZZLE-2025-PD96321",
            "Price": 29.99,
            "Stock": 200,
            "Thumbnail": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "Description": "Mind-bending puzzles that transcend reality with physics-defying challenges across multiple dimensions.",
            "Rating": 4.6,
            "Platforms": ["PC", "Mac", "Switch"],
            "Genre": ["Puzzle", "Indie", "Casual"],
            "IsNew": false
          }
        ];

        setProducts(mockProducts);
        setFilteredProducts(mockProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...products];

    // Price filter
    result = result.filter(p => p.Price >= priceRange[0] && p.Price <= priceRange[1]);

    // Platform filter
    if (selectedPlatforms.length > 0) {
      result = result.filter(p => 
        selectedPlatforms.some(platform => p.Platforms.includes(platform))
      );
    }

    // Genre filter
    if (selectedGenres.length > 0) {
      result = result.filter(p => 
        selectedGenres.some(genre => p.Genre.includes(genre))
      );
    }

    // Sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.Price - b.Price);
        break;
      case 'price-high':
        result.sort((a, b) => b.Price - a.Price);
        break;
      case 'rating':
        result.sort((a, b) => b.Rating - a.Rating);
        break;
      case 'newest':
        result.sort((a, b) => b.IsNew - a.IsNew);
        break;
      default:
        // 'featured' - default sorting
        break;
    }

    setFilteredProducts(result);
  }, [products, priceRange, selectedPlatforms, selectedGenres, sortOption]);

  const toggleFavorite = (productCode) => {
    if (favorites.includes(productCode)) {
      setFavorites(favorites.filter(code => code !== productCode));
    } else {
      setFavorites([...favorites, productCode]);
    }
  };

  const togglePlatform = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // Extract all unique platforms and genres for filters
  const allPlatforms = [...new Set(products.flatMap(p => p.Platforms))];
  const allGenres = [...new Set(products.flatMap(p => p.Genre))];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header and Filter Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">All Games</h1>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FiFilter className="mr-2" />
            Filters
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Price Range Filter */}
              <div>
                <h3 className="text-lg font-medium mb-4">Price Range</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Platforms Filter */}
              <div>
                <h3 className="text-lg font-medium mb-4">Platforms</h3>
                <div className="space-y-2">
                  {allPlatforms.map(platform => (
                    <label key={platform} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedPlatforms.includes(platform)}
                        onChange={() => togglePlatform(platform)}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Genres Filter */}
              <div>
                <h3 className="text-lg font-medium mb-4">Genres</h3>
                <div className="space-y-2">
                  {allGenres.map(genre => (
                    <label key={genre} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedGenres.includes(genre)}
                        onChange={() => toggleGenre(genre)}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{genre}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Sort Options */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Sort By</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSortOption('featured')}
                  className={`px-3 py-1 rounded-md text-sm ${sortOption === 'featured' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Featured
                </button>
                <button
                  onClick={() => setSortOption('price-low')}
                  className={`px-3 py-1 rounded-md text-sm ${sortOption === 'price-low' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => setSortOption('price-high')}
                  className={`px-3 py-1 rounded-md text-sm ${sortOption === 'price-high' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Price: High to Low
                </button>
                <button
                  onClick={() => setSortOption('rating')}
                  className={`px-3 py-1 rounded-md text-sm ${sortOption === 'rating' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Highest Rated
                </button>
                <button
                  onClick={() => setSortOption('newest')}
                  className={`px-3 py-1 rounded-md text-sm ${sortOption === 'newest' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Newest
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.ProductCode} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
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
                {product.IsNew && (
                  <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </div>
                )}
                <button
                  onClick={() => toggleFavorite(product.ProductCode)}
                  className={`absolute top-2 right-2 p-2 rounded-full ${favorites.includes(product.ProductCode) ? 'text-red-500 bg-white' : 'text-gray-400 bg-white'}`}
                >
                  <FiHeart className={`w-5 h-5 ${favorites.includes(product.ProductCode) ? 'fill-current' : ''}`} />
                </button>
              </div>
              <div className="p-4">
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

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No games found</h3>
            <p className="mt-2 text-gray-600">Try adjusting your filters to find what you're looking for.</p>
            <button 
              onClick={() => {
                setPriceRange([0, 100]);
                setSelectedPlatforms([]);
                setSelectedGenres([]);
              }}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
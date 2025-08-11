import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiHeart, FiUser } from 'react-icons/fi';

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-purple-400">
              MyStore
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link 
                to="/" 
                className="px-3 py-2 text-sm font-medium hover:text-purple-300 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="px-3 py-2 text-sm font-medium hover:text-purple-300 transition-colors"
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className="px-3 py-2 text-sm font-medium hover:text-purple-300 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="bg-gray-800 text-white px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
                >
                  <FiSearch size={18} />
                </button>
              </div>
            </form>

            {/* Mobile Search Button */}
            <button className="md:hidden p-2 text-gray-400 hover:text-white">
              <FiSearch size={20} />
            </button>

            {/* Favorites */}
            <Link 
              to="/favorites" 
              className="p-2 text-gray-400 hover:text-white relative"
            >
              <FiHeart size={20} />
              <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Profile */}
            <Link 
              to="/profile" 
              className="p-2 text-gray-400 hover:text-white"
            >
              <FiUser size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu - simple version */}
      <div className="md:hidden bg-gray-800 px-4 py-2">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search games..."
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            type="submit" 
            className="ml-2 p-2 text-gray-400 hover:text-white"
          >
            <FiSearch size={20} />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
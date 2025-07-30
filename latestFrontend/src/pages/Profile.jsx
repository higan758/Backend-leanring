import React, { useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaSun, FaMoon, FaEdit } from 'react-icons/fa';

const UserProfile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    username: '@johndoe',
    bio: 'Passionate about coding, AI, and open-source projects.',
    email: 'john.doe@example.com',
    location: 'San Francisco, CA',
    followers: 1200,
    following: 350,
  });
  const [tempUser, setTempUser] = useState({ ...user });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!tempUser.name.trim()) newErrors.name = 'Name is required';
    if (!tempUser.username.trim()) newErrors.username = 'Username is required';
    if (!tempUser.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email format';
    if (!tempUser.location.trim()) newErrors.location = 'Location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setTempUser({ ...tempUser, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSave = () => {
    if (validateForm()) {
      setUser({ ...tempUser });
      setIsModalOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-500 flex justify-center items-center p-4`}>
      <div className={`w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        {/* Profile Card */}
        <div className={`md:col-span-2 p-6 rounded-2xl shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 hover:shadow-2xl`}>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Profile</h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun className="text-yellow-400" size={24} /> : <FaMoon className="text-gray-800" size={24} />}
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            <div className="relative group">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 group-hover:border-blue-600 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-blue-500 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>{user.username}</p>
              <p className={`text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-4`}>{user.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-200"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-gray-900'} transform hover:scale-110 transition-all duration-200`}
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transform hover:scale-110 transition-all duration-200"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
          >
            <FaEdit size={16} />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Stats Card */}
        <div className={`p-6 rounded-2xl shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 hover:shadow-2xl`}>
          <h2 className="text-xl font-bold mb-4">Stats</h2>
          <div className="space-y-4">
            <div className="text-center p-4 rounded-lg bg-blue-500 bg-opacity-20">
              <p className="text-lg font-semibold">{user.followers}</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Followers</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-500 bg-opacity-20">
              <p className="text-lg font-semibold">{user.following}</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Following</p>
            </div>
            <div className="text-center">
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Email</p>
              <p className="font-semibold">{user.email}</p>
            </div>
            <div className="text-center">
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Location</p>
              <p className="font-semibold">{user.location}</p>
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className={`w-full max-w-md p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-xl`}>
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={tempUser.name}
                    onChange={handleInputChange}
                    className={`w-full p-2 rounded-md border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={tempUser.username}
                    onChange={handleInputChange}
                    className={`w-full p-2 rounded-md border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Bio</label>
                  <textarea
                    name="bio"
                    value={tempUser.bio}
                    onChange={handleInputChange}
                    className={`w-full p-2 rounded-md border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    rows="3"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={tempUser.email}
                    onChange={handleInputChange}
                    className={`w-full p-2 rounded-md border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={tempUser.location}
                    onChange={handleInputChange}
                    className={`w-full p-2 rounded-md border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-full bg-gray-500 text-white hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
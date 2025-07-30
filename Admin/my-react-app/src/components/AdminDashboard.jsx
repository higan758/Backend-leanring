// AdminDashboard.jsx
import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'users', label: 'Users' },
    { id: 'products', label: 'Products' },
    { id: 'orders', label: 'Orders' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-indigo-600">Admin Panel</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${
                activeMenu === item.id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-indigo-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow flex justify-between items-center px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 capitalize">
            {activeMenu}
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Admin User</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="Admin avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Content Area */}
        <section className="flex-1 p-6 overflow-auto">
          {activeMenu === 'dashboard' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">Users</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">1,234</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">Products</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">567</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">Orders</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">890</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">$12,345</p>
              </div>
            </div>
          )}

          {activeMenu === 'users' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Users List</h3>
              <p className="text-gray-600">User management content goes here...</p>
            </div>
          )}

          {activeMenu === 'products' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Products List</h3>
              <p className="text-gray-600">Product management content goes here...</p>
            </div>
          )}

          {activeMenu === 'orders' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Orders List</h3>
              <p className="text-gray-600">Order management content goes here...</p>
            </div>
          )}

          {activeMenu === 'settings' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Settings</h3>
              <p className="text-gray-600">Settings content goes here...</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;

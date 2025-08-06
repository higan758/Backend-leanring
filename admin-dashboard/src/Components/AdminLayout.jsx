// src/components/AdminLayout.jsx
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    sessionStorage.removeItem('authToken');
    navigate('/login', { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 text-xl font-bold border-b">Admin Dashboard</div>
        <nav className="mt-6">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `block py-3 px-6 hover:bg-purple-100 ${
                isActive ? 'bg-purple-200 font-semibold' : ''
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `block py-3 px-6 hover:bg-purple-100 ${
                isActive ? 'bg-purple-200 font-semibold' : ''
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `block py-3 px-6 hover:bg-purple-100 ${
                isActive ? 'bg-purple-200 font-semibold' : ''
              }`
            }
          >
            Products
          </NavLink>

          <button
            onClick={logout}
            className="mt-10 w-full text-left py-3 px-6 text-red-600 hover:bg-red-100 font-semibold"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

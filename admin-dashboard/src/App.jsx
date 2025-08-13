import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdminProducts from "./pages/AdminProducts";
import Users from "./pages/Users";
import AdminLogin from './Components/AdminLogin';
import AdminRegister from "./Components/AdminRegister";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
          <div className="p-6 text-2xl font-bold border-b border-gray-700">Admin Panel</div>
          <nav className="flex-1 p-4 space-y-2">
            <Link to="/admin" className="block p-2 rounded hover:bg-gray-700">Dashboard</Link>
            <Link to="/admin/products" className="block p-2 rounded hover:bg-gray-700">Products</Link>
            <Link to="/admin/users" className="block p-2 rounded hover:bg-gray-700">Users</Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-gray-100 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<AdminProducts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/admin/login" element={<AdminLogin/>}/>
            <Route path="/admin/register" element={<AdminRegister/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

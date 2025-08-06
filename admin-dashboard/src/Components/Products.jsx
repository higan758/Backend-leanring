// src/pages/admin/Products.jsx
import React, { useEffect, useState } from 'react';
import API from '../../api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: '',
    code: '',
    description: '',
    price: '',
    stock: '',
  });
  const [editProductId, setEditProductId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await API.get('/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      name: '',
      code: '',
      description: '',
      price: '',
      stock: '',
    });
    setEditProductId(null);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (editProductId) {
        // Update
        await API.put(`/products/${editProductId}`, form);
      } else {
        // Create
        await API.post('/products', form);
      }
      fetchProducts();
      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || 'Error saving product');
    }
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      code: product.code,
      description: product.description,
      price: product.price,
      stock: product.stock,
    });
    setEditProductId(product._id);
    setError('');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await API.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <form onSubmit={handleSubmit} className="mb-6 bg-white p-6 rounded shadow space-y-4 max-w-md">
        {error && <p className="text-red-600">{error}</p>}

        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Code</label>
          <input
            type="text"
            name="code"
            value={form.code}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows="3"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Stock</label>
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            required
            min="0"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex space-x-3">
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            {editProductId ? 'Update Product' : 'Add Product'}
          </button>
          <button type="button" onClick={resetForm} className="px-4 py-2 border rounded hover:bg-gray-100">
            Cancel
          </button>
        </div>
      </form>

      <table className="min-w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 border-b text-left">Name</th>
            <th className="px-6 py-3 border-b text-left">Code</th>
            <th className="px-6 py-3 border-b text-left">Description</th>
            <th className="px-6 py-3 border-b text-left">Price</th>
            <th className="px-6 py-3 border-b text-left">Stock</th>
            <th className="px-6 py-3 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center py-6">No products found.</td>
            </tr>
          )}
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-100">
              <td className="px-6 py-3 border-b">{product.name}</td>
              <td className="px-6 py-3 border-b">{product.code}</td>
              <td className="px-6 py-3 border-b">{product.description}</td>
              <td className="px-6 py-3 border-b">${product.price}</td>
              <td className="px-6 py-3 border-b">{product.stock}</td>
              <td className="px-6 py-3 border-b text-center space-x-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;

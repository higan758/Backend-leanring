import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    ProductName: "",
    Price: "",
    ProductCode: "",
  });

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/product");
      console.log(res.data); // Debugging
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/product/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  // Start editing
  const startEdit = (product) => {
    setEditingProduct(product._id);
    setFormData({
      ProductName: product.ProductName,
      Price: product.Price,
      ProductCode: product.ProductCode,
    });
  };

  // Save edit
  const saveEdit = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/product/${id}`,
        formData
      );
      setProducts(
        products.map((p) => (p._id === id ? res.data.product : p))
      );
      setEditingProduct(null);
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100 text-black">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Code</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>
            editingProduct === product._id ? (
              <tr key={product._id} className="text-black">
                <td className="border p-2">
                  <input
                    type="text"
                    className="border p-1 w-full text-black"
                    value={formData.ProductName}
                    onChange={(e) =>
                      setFormData({ ...formData, ProductName: e.target.value })
                    }
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="border p-1 w-full text-black"
                    value={formData.Price}
                    onChange={(e) =>
                      setFormData({ ...formData, Price: e.target.value })
                    }
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    className="border p-1 w-full text-black"
                    value={formData.ProductCode}
                    onChange={(e) =>
                      setFormData({ ...formData, ProductCode: e.target.value })
                    }
                  />
                </td>
                <td className="border p-2 flex gap-2">
                  <button
                    onClick={() => saveEdit(product._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingProduct(null)}
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={product._id} className="text-black">
                <td className="border p-2">{product.ProductName}</td>
                <td className="border p-2">{product.Price}</td>
                <td className="border p-2">{product.ProductCode}</td>
                <td className="border p-2 flex gap-2">
                  <button
                    onClick={() => startEdit(product)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

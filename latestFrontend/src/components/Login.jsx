import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      const { token, user } = res.data;

      // Save token to localStorage
      localStorage.setItem('token', token);

      setSuccessMsg(`Welcome, ${user.username}!`);
    } catch (err) {
      setErrorMsg(err.response?.data?.msg || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      height: '100vh', background: '#f9f9f9'
    }}>
      <form onSubmit={handleSubmit} style={{
        padding: '2rem', background: '#fff', borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '320px'
      }}>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Login</h2>

        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: '100%', padding: '10px', marginBottom: '1rem',
            border: '1px solid #ccc', borderRadius: '5px'
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            width: '100%', padding: '10px', marginBottom: '1rem',
            border: '1px solid #ccc', borderRadius: '5px'
          }}
        />

        <button type="submit" disabled={loading} style={{
          width: '100%', padding: '10px', background: '#007bff', color: '#fff',
          border: 'none', borderRadius: '5px', cursor: 'pointer'
        }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;

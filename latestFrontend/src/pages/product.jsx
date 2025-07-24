import React from 'react';

const products = [
  {
    id: 'P001',
    name: 'Hatsune Miku Figure',
    price: 199.99,
    image: 'https://example.com/miku.jpg',
    description: 'High-quality collectible figure of Hatsune Miku. Limited edition with detailed design.',
    stock: 10,
  },
  {
    id: 'P002',
    name: 'Naruto Action Figure',
    price: 149.99,
    image: 'https://example.com/naruto.jpg',
    description: 'Detailed Naruto action figure with accessories and poseable joints.',
    stock: 5,
  },
  {
    id: 'P003',
    name: 'Sailor Moon Statue',
    price: 249.99,
    image: 'https://example.com/sailormoon.jpg',
    description: 'Elegant Sailor Moon statue with a shining base and intricate design.',
    stock: 3,
  },
];

const ProductList = () => {
  const handleAddToCart = (productName) => {
    alert(`Added "${productName}" to cart.`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            width: '600px',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '200px',
              height: 'auto',
              marginRight: '2rem',
              borderRadius: '8px',
            }}
          />
          <div style={{ flex: 1 }}>
            <h2>{product.name}</h2>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>In Stock:</strong> {product.stock}
            </p>
            <p>{product.description}</p>
            <button
              style={{
                marginTop: '1rem',
                padding: '0.6rem 1.2rem',
                backgroundColor: product.stock === 0 ? '#ccc' : '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
              }}
              onClick={() => handleAddToCart(product.name)}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
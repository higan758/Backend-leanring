import React from 'react';

const favourites = [
  {
    id: 'F001',
    name: 'Hatsune Miku Figure',
    price: 199.99,
    image: 'https://example.com/miku.jpg',
    description: 'High-quality collectible figure of Hatsune Miku. Limited edition with detailed design.',
    isFavourite: true,
  },
  {
    id: 'F002',
    name: 'Naruto Action Figure',
    price: 149.99,
    image: 'https://example.com/naruto.jpg',
    description: 'Detailed Naruto action figure with accessories and poseable joints.',
    isFavourite: true,
  },
  {
    id: 'F003',
    name: 'One Piece Luffy Plush',
    price: 39.99,
    image: 'https://example.com/luffy.jpg',
    description: 'Soft and cuddly Luffy plush from One Piece series.',
    isFavourite: true,
  },
];

const Favourites = () => {
  const handleRemoveFavourite = (productId, productName) => {
    // In a real app, you would update state or make an API call here
    alert(`Removed "${productName}" from favourites.`);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', color: '#333' }}>Your Favourite Items</h1>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
      }}>
        {favourites.map((product) => (
          <div
            key={product.id}
            style={{
              display: 'flex',
              width: '600px',
              padding: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              position: 'relative',
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
              <p>{product.description}</p>
              <button
                style={{
                  marginTop: '1rem',
                  padding: '0.6rem 1.2rem',
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
                onClick={() => handleRemoveFavourite(product.id, product.name)}
              >
                Remove from Favourites
              </button>
            </div>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              color: 'red',
              fontSize: '1.5rem',
            }}>
              ♥
            </div>
          </div>
        ))}
      </div>

      {favourites.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          border: '1px dashed #ddd',
          borderRadius: '8px',
        }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>You don't have any favourite items yet.</p>
          <button
            style={{
              marginTop: '1rem',
              padding: '0.6rem 1.2rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Browse Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Favourites;
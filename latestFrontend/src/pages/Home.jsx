import React, { useState } from 'react';
import { Search, Bell, User, Play, Star, Download, Gamepad2, Trophy, Clock, Heart } from 'lucide-react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredGames = [
    {
      id: 1,
      title: "Cyberpunk Nexus",
      genre: "RPG",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop",
      price: "$59.99",
      isInstalled: false,
      playtime: "0h"
    },
    {
      id: 2,
      title: "Starforge Chronicles",
      genre: "Strategy",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=225&fit=crop",
      price: "$49.99",
      isInstalled: true,
      playtime: "127h"
    },
    {
      id: 3,
      title: "Mystic Realms",
      genre: "Adventure",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop",
      price: "$39.99",
      isInstalled: true,
      playtime: "89h"
    }
  ];

  const recentGames = [
    { id: 4, title: "Neon Drift", genre: "Racing", playtime: "23h", lastPlayed: "2 hours ago" },
    { id: 5, title: "Shadow Hunter", genre: "Action", playtime: "45h", lastPlayed: "1 day ago" },
    { id: 6, title: "Pixel Quest", genre: "Platformer", playtime: "12h", lastPlayed: "3 days ago" },
    { id: 7, title: "Space Colony", genre: "Simulation", playtime: "78h", lastPlayed: "1 week ago" }
  ];

  const categories = ['All', 'Action', 'RPG', 'Strategy', 'Adventure', 'Racing', 'Simulation'];

  const achievements = [
    { title: "First Victory", description: "Win your first match", progress: 100 },
    { title: "Explorer", description: "Discover 50 locations", progress: 78 },
    { title: "Collector", description: "Collect 100 items", progress: 45 }
  ];

  const baseStyles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderBottom: '1px solid rgba(168, 85, 247, 0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    },
    headerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    logoText: {
      fontSize: '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #c084fc, #f472b6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    nav: {
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    },
    navLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      transition: 'color 0.3s',
      cursor: 'pointer'
    },
    navLinkActive: {
      color: '#c084fc'
    },
    searchContainer: {
      position: 'relative'
    },
    searchInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(168, 85, 247, 0.3)',
      borderRadius: '8px',
      paddingLeft: '40px',
      paddingRight: '16px',
      paddingTop: '8px',
      paddingBottom: '8px',
      color: 'white',
      outline: 'none',
      backdropFilter: 'blur(4px)',
      width: '250px'
    },
    searchIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      width: '16px',
      height: '16px'
    },
    iconButton: {
      color: '#9ca3af',
      cursor: 'pointer',
      transition: 'color 0.3s',
      width: '24px',
      height: '24px'
    },
    mainContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '32px 24px'
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    sectionSubtitle: {
      color: '#d1d5db',
      marginBottom: '32px'
    },
    featuredTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    gameGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '48px'
    },
    gameCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(4px)',
      borderRadius: '12px',
      border: '1px solid rgba(168, 85, 247, 0.2)',
      overflow: 'hidden',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    gameImage: {
      width: '100%',
      height: '192px',
      objectFit: 'cover',
      transition: 'transform 0.3s'
    },
    gameContent: {
      padding: '24px'
    },
    gameTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    gameGenre: {
      color: '#c084fc',
      fontSize: '14px',
      marginBottom: '16px'
    },
    gameFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    gamePrice: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#10b981'
    },
    playButton: {
      backgroundColor: '#059669',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    installButton: {
      backgroundColor: '#7c3aed',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    layoutGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '32px',
      marginBottom: '48px'
    },
    recentGamesSection: {
      gridColumn: '1 / 2'
    },
    sidebarSection: {
      gridColumn: '2 / 3',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    },
    recentGameItem: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(4px)',
      borderRadius: '8px',
      padding: '16px',
      border: '1px solid rgba(168, 85, 247, 0.2)',
      transition: 'all 0.3s',
      marginBottom: '16px'
    },
    recentGameContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    gameIcon: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    achievementCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(4px)',
      borderRadius: '8px',
      padding: '16px',
      border: '1px solid rgba(168, 85, 247, 0.2)',
      marginBottom: '16px'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#374151',
      borderRadius: '4px',
      marginTop: '12px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(to right, #7c3aed, #ec4899)',
      borderRadius: '4px',
      transition: 'width 0.5s'
    },
    statsCard: {
      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(236, 72, 153, 0.2))',
      backdropFilter: 'blur(4px)',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid rgba(168, 85, 247, 0.3)'
    },
    statItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '12px'
    },
    categoryButton: {
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: '500',
      transition: 'all 0.3s',
      cursor: 'pointer',
      border: '1px solid rgba(168, 85, 247, 0.2)',
      marginRight: '12px',
      marginBottom: '12px',
      display: 'inline-block'
    },
    categoryButtonActive: {
      backgroundColor: '#7c3aed',
      color: 'white',
      boxShadow: '0 8px 25px rgba(124, 58, 237, 0.25)'
    },
    categoryButtonInactive: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: '#d1d5db'
    }
  };

  return (
    <div style={baseStyles.container}>
      {/* Header */}
      <header style={baseStyles.header}>
        <div style={baseStyles.headerContent}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div style={baseStyles.logo}>
              <Gamepad2 style={{ width: '32px', height: '32px', color: '#c084fc' }} />
              <h1 style={baseStyles.logoText}>GameVault</h1>
            </div>
            <nav style={{ ...baseStyles.nav, display: window.innerWidth > 768 ? 'flex' : 'none' }}>
              <a href="#" style={{ ...baseStyles.navLink, ...baseStyles.navLinkActive }}>Library</a>
              <a href="#" style={baseStyles.navLink}>Store</a>
              <a href="#" style={baseStyles.navLink}>Community</a>
              <a href="#" style={baseStyles.navLink}>News</a>
            </nav>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={baseStyles.searchContainer}>
              <Search style={baseStyles.searchIcon} />
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={baseStyles.searchInput}
              />
            </div>
            <Bell style={baseStyles.iconButton} />
            <User style={baseStyles.iconButton} />
          </div>
        </div>
      </header>

      <div style={baseStyles.mainContent}>
        {/* Welcome Section */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={baseStyles.sectionTitle}>Welcome back, Gamer!</h2>
          <p style={baseStyles.sectionSubtitle}>Ready to continue your adventures?</p>
        </div>

        {/* Featured Games */}
        <section style={{ marginBottom: '48px' }}>
          <h3 style={baseStyles.featuredTitle}>
            <Star style={{ width: '24px', height: '24px', color: '#fbbf24' }} />
            Featured Games
          </h3>
          <div style={baseStyles.gameGrid}>
            {featuredGames.map((game) => (
              <div 
                key={game.id} 
                style={baseStyles.gameCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.2)';
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img 
                    src={game.image} 
                    alt={game.title}
                    style={baseStyles.gameImage}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
                  }} />
                  <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                    <Heart style={{ width: '24px', height: '24px', color: 'rgba(255,255,255,0.7)' }} />
                  </div>
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Star style={{ width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24' }} />
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>{game.rating}</span>
                  </div>
                </div>
                <div style={baseStyles.gameContent}>
                  <h4 style={baseStyles.gameTitle}>{game.title}</h4>
                  <p style={baseStyles.gameGenre}>{game.genre}</p>
                  <div style={baseStyles.gameFooter}>
                    <span style={baseStyles.gamePrice}>{game.price}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {game.isInstalled ? (
                        <>
                          <button style={baseStyles.playButton}>
                            <Play style={{ width: '16px', height: '16px' }} />
                            <span>Play</span>
                          </button>
                          <span style={{ color: '#9ca3af', fontSize: '14px' }}>{game.playtime}</span>
                        </>
                      ) : (
                        <button style={baseStyles.installButton}>
                          <Download style={{ width: '16px', height: '16px' }} />
                          <span>Install</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={baseStyles.layoutGrid}>
          {/* Recently Played */}
          <div style={baseStyles.recentGamesSection}>
            <h3 style={baseStyles.featuredTitle}>
              <Clock style={{ width: '24px', height: '24px', color: '#60a5fa' }} />
              Recently Played
            </h3>
            <div>
              {recentGames.map((game) => (
                <div key={game.id} style={baseStyles.recentGameItem}>
                  <div style={baseStyles.recentGameContent}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={baseStyles.gameIcon}>
                        <Gamepad2 style={{ width: '24px', height: '24px' }} />
                      </div>
                      <div>
                        <h4 style={{ fontWeight: '600' }}>{game.title}</h4>
                        <p style={{ color: '#9ca3af', fontSize: '14px' }}>{game.genre} • {game.playtime}</p>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ color: '#9ca3af', fontSize: '14px' }}>{game.lastPlayed}</p>
                      <button style={{
                        backgroundColor: '#7c3aed',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        border: 'none',
                        fontSize: '14px',
                        marginTop: '4px',
                        cursor: 'pointer'
                      }}>
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Stats */}
          <div style={baseStyles.sidebarSection}>
            <div>
              <h3 style={baseStyles.featuredTitle}>
                <Trophy style={{ width: '24px', height: '24px', color: '#fbbf24' }} />
                Recent Achievements
              </h3>
              <div>
                {achievements.map((achievement, index) => (
                  <div key={index} style={baseStyles.achievementCard}>
                    <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>{achievement.title}</h4>
                    <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '12px' }}>{achievement.description}</p>
                    <div style={baseStyles.progressBar}>
                      <div 
                        style={{
                          ...baseStyles.progressFill,
                          width: `${achievement.progress}%`
                        }}
                      />
                    </div>
                    <p style={{ textAlign: 'right', fontSize: '14px', color: '#9ca3af', marginTop: '4px' }}>{achievement.progress}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div style={baseStyles.statsCard}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Your Stats</h3>
              <div>
                <div style={baseStyles.statItem}>
                  <span style={{ color: '#d1d5db' }}>Games Owned</span>
                  <span style={{ fontWeight: 'bold' }}>247</span>
                </div>
                <div style={baseStyles.statItem}>
                  <span style={{ color: '#d1d5db' }}>Hours Played</span>
                  <span style={{ fontWeight: 'bold' }}>1,432h</span>
                </div>
                <div style={baseStyles.statItem}>
                  <span style={{ color: '#d1d5db' }}>Achievements</span>
                  <span style={{ fontWeight: 'bold' }}>89/120</span>
                </div>
                <div style={baseStyles.statItem}>
                  <span style={{ color: '#d1d5db' }}>Level</span>
                  <span style={{ fontWeight: 'bold', color: '#c084fc' }}>42</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <section style={{ marginTop: '48px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Browse by Category</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  ...baseStyles.categoryButton,
                  ...(selectedCategory === category ? baseStyles.categoryButtonActive : baseStyles.categoryButtonInactive)
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
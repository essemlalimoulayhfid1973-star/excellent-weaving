import React from 'react';

function Header({ cartCount, setView, user }) {
  return (
    <header className="header">
      <div className="logo" onClick={() => setView('home')}>
        <span style={{ fontSize: '28px' }}>🧵</span>
        <div>
          <h1>تعاونية <span style={{ color: '#D4AF37' }}>النسيج الممتاز</span></h1>
          <p style={{ fontSize: '10px', color: '#F5E6D3' }}>أمزميز - الحوز</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div className="cart-icon" onClick={() => setView('cart')}>
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
        {user && (
          <button onClick={() => setView('admin')} style={{ background: '#8B0000', color: 'white', padding: '8px 12px', borderRadius: '8px' }}>
            🔐 لوحة التحكم
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;

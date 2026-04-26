import React from 'react';

export default function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      background: 'white',
      padding: '60px 20px',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'center',
      }}>
        {/* النص */}
        <div style={{ textAlign: 'left' }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '48px',
            fontWeight: '600',
            color: '#1B263B',
            marginBottom: '20px',
          }}>
            Handwoven Moroccan Rugs
          </h1>
          <p style={{
  fontSize: '20px',
  fontStyle: 'italic',
  color: '#C18E3A',
  marginBottom: '20px',
  fontWeight: '500'
}}>
  Three Unique Designs, One Authentic Tradition.<br />
  Woven in the Atlas Mountains
</p>
          <p style={{
            fontSize: '18px',
            color: '#4A5568',
            marginBottom: '30px',
            lineHeight: '1.6',
          }}>
            Authentic Amazigh craftsmanship from the heart of the Atlas Mountains.
          </p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <button
              onClick={scrollToProducts}
              style={{
                background: '#1B263B',
                color: 'white',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '40px',
                cursor: 'pointer',
              }}
            >
              Browse Products
            </button>
            <button
              onClick={() => window.open('https://wa.me/212639674902?text=Hello%2C%20I%27m%20interested%20in%20your%20products', '_blank')}
              style={{
                background: '#25D366',
                color: 'white',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '40px',
                cursor: 'pointer',
              }}
            >
              Order via WhatsApp
            </button>
          </div>
        </div>

        {/* الصورة */}
        <div style={{
          background: '#F5E6D3',
          borderRadius: '24px',
          overflow: 'hidden',
        }}>
          <img 
            src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800" 
            alt="Moroccan artisan weaving"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* للهواتف: الصورة فوق النص */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          div[style*="gridTemplateColumns"] > div:first-child {
            order: 2;
          }
          div[style*="gridTemplateColumns"] > div:last-child {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
                                      }
<div style={{
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  marginTop: '30px',
  flexWrap: 'wrap'
}}>
  <div style={{ textAlign: 'center' }}>
    <span style={{ fontSize: '28px' }}>🧵</span>
    <p style={{ fontSize: '14px', marginTop: '5px' }}>100% Handmade</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <span style={{ fontSize: '28px' }}>🏔️</span>
    <p style={{ fontSize: '14px', marginTop: '5px' }}>Atlas Origin</p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <span style={{ fontSize: '28px' }}>⭐</span>
    <p style={{ fontSize: '14px', marginTop: '5px' }}>الخيارات الثالثة</p>
  </div>
</div>
<div style={{ textAlign: 'center' }}>
  <span style={{ fontSize: '28px' }}>🎨</span>
  <p style={{ fontSize: '14px', marginTop: '5px' }}>خيارات تصميم متعددة</p>
</div>


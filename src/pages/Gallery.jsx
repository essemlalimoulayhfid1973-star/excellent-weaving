import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'زربية أمازيغية', price: 700, icon: '🪢' },
  { id: 2, name: 'حقيبة يد جلدية', price: 700, icon: '👜' },
  { id: 3, name: 'طبق نباتات مجففة', price: 150, icon: '🍽️' },
];

export default function Gallery() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: '#8B0000' }}>🛍️ منتجاتنا</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px', marginTop: '40px' }}>
        {products.map(p => (
          <div key={p.id} style={{ background: 'white', borderRadius: '16px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '60px' }}>{p.icon}</div>
            <h3>{p.name}</h3>
            <p style={{ color: '#C18E3A', fontWeight: 'bold' }}>{p.price} د.م.</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link to="/" style={{ color: '#8B0000' }}>← العودة للرئيسية</Link>
      </div>
    </div>
  );
}

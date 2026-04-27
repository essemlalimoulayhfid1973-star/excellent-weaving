import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import productsData from '../data/productsData';

export default function Gallery() {
  return (
    <div dir="rtl" style={{ padding: '40px 20px', maxWidth: '1200px', margin: 'auto' }}>
      <Helmet><title>منتجاتنا - تعاونية النسيج الممتاز</title></Helmet>
      <h1 style={{ fontSize: '36px', textAlign: 'center', color: '#8B0000' }}>🛍️ منتجاتنا</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px', marginTop: '40px' }}>
        {productsData.map(product => (
          <div key={product.id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
            <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}>
              <h3>{product.name}</h3>
              <p style={{ color: '#C18E3A', fontWeight: 'bold' }}>{product.price} د.م.</p>
              <Link to={`/product/${product.slug}`} style={{ background: '#8B0000', color: 'white', padding: '8px 20px', borderRadius: '25px', textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}>تفاصيل</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

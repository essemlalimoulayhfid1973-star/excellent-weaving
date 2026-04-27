import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import productsData from '../data/productsData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'carpet', 'bag', 'plate'];
  const filtered = selectedCategory === 'all' ? productsData : productsData.filter(p => p.category === selectedCategory);

  return (
    <div dir="rtl" style={{ padding: '40px 20px', maxWidth: '1200px', margin: 'auto' }}>
      <Helmet><title>معرض المنتجات - تعاونية النسيج الممتاز</title></Helmet>
      <h1 style={{ fontSize: '36px', textAlign: 'center', color: '#8B0000', marginBottom: '20px' }}>📸 معرض المنتجات</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {categories.map(cat => (<button key={cat} onClick={() => setSelectedCategory(cat)} style={{ padding: '8px 20px', borderRadius: '30px', border: 'none', background: selectedCategory === cat ? '#8B0000' : '#F5E6D3', color: selectedCategory === cat ? 'white' : '#333', cursor: 'pointer', fontWeight: 'bold' }}>{cat === 'all' ? 'الكل' : cat === 'carpet' ? 'زرابي' : cat === 'bag' ? 'حقائب' : 'أطباق'}</button>))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
        {filtered.map(p => (<div key={p.id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <img src={p.thumb} alt={p.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
          <div style={{ padding: '15px' }}><h3>{p.name}</h3><p style={{ color: '#C18E3A', fontWeight: 'bold' }}>{p.price} د.م.</p><p style={{ fontSize: '13px', color: '#666' }}>{p.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}><Link to={`/product/${p.slug}`} style={{ background: '#8B0000', color: 'white', padding: '8px 15px', borderRadius: '25px', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold' }}>🛒 اشترِ الآن</Link><span style={{ fontSize: '11px', color: '#888' }}>🚚 توصيل للمغرب والعالم</span></div>
          </div>
        </div>))}
      </div>
    </div>
  );
        }

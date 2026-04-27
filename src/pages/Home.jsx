import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import productsData from '../data/productsData';

const featuredProducts = productsData.slice(0, 4);

export default function Home() {
  return (
    <>
      <Helmet><title>تعاونية النسيج الممتاز | منتجات يدوية من نساء الأطلس</title><meta name="description" content="منتجات يدوية أصلية من نساء الحوز. زربية، حقائب، أطباق تقليدية. ادعم إعادة بناء حياة نساء الأطلس بعد الزلزال." /></Helmet>
      <div style={{ background: 'linear-gradient(135deg, #1B263B, #2c3e5c)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', marginBottom: '15px', fontFamily: "'Playfair Display', serif" }}>منتجات يدوية من نساء الأطلس</h1>
        <p style={{ fontSize: '22px', marginBottom: '15px', color: '#C18E3A' }}>كل قطعة تحكي قصة صمود وأمل</p>
        <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>بدعمك، تساهم في إعادة بناء حياة نساء الحوز بعد الزلزال</p>
        <Link to="/gallery" style={{ background: '#C18E3A', color: '#1B263B', padding: '14px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'inline-block' }}>🛍️ تسوق الآن</Link>
      </div>
      <div style={{ background: '#F5E6D3', padding: '15px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}><span>✅ 100% Handmade</span><span>🏔️ Atlas Origin</span><span>🚚 توصيل 2-5 أيام</span><span>💰 الدفع عند الاستلام</span></div>
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>✨ منتجاتنا المميزة</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
          {featuredProducts.map(p => (
            <div key={p.id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <img src={p.thumb} alt={p.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}><h3>{p.name}</h3><p style={{ color: '#C18E3A', fontWeight: 'bold' }}>{p.price} د.م.</p><Link to={`/product/${p.slug}`} style={{ background: '#8B0000', color: 'white', padding: '8px 20px', borderRadius: '25px', textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}>🛒 اشترِ الآن</Link></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
              }

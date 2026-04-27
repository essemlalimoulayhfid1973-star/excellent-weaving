import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>تعاونية النسيج الممتاز | أمزميز الحوز</title>
      </Helmet>

      <div style={{ background: '#1B263B', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1>🧵 تعاونية النسيج الممتاز</h1>
        <p style={{ fontSize: '18px', marginTop: '10px' }}>منتجات يدوية من نساء الأطلس</p>
        <Link to="/gallery" style={{ display: 'inline-block', marginTop: '20px', background: '#C18E3A', color: '#1B263B', padding: '10px 25px', borderRadius: '30px', textDecoration: 'none' }}>تسوق الآن</Link>
      </div>

      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2>مرحباً بكم في تعاونية النسيج الممتاز</h2>
        <p style={{ marginTop: '20px', maxWidth: '600px', margin: 'auto' }}>
          نصنع منتجات تقليدية أمازيغية بأيدي نساء الحوز. كل قطعة تحكي قصة صمود وأمل.
        </p>
        <Link to="/gallery" style={{ display: 'inline-block', marginTop: '30px', background: '#8B0000', color: 'white', padding: '12px 30px', borderRadius: '30px', textDecoration: 'none' }}>🛍️ اكتشف المنتجات</Link>
      </div>
    </>
  );
}

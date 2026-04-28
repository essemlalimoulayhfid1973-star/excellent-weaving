import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// بيانات المنتجات (مؤقتة)
const productsData = [
  { id: 1, name: 'زربية أمازيغية', price: 700, slug: 'rug1', image: '🪢' },
  { id: 2, name: 'حقيبة يد جلدية', price: 700, slug: 'bag1', image: '👜' },
  { id: 3, name: 'طبق نباتات مجففة', price: 150, slug: 'plate1', image: '🍽️' },
];

// صفحة الرئيسية
function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🧵 تعاونية النسيج الممتاز</h1>
      <p>منتجات يدوية من نساء الأطلس</p>
      <Link to="/gallery" style={{ background: '#8B0000', color: 'white', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>🛍️ تسوق الآن</Link>
    </div>
  );
}

// صفحة المنتجات
function Gallery() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: '#8B0000' }}>🛍️ منتجاتنا</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px', marginTop: '40px' }}>
        {productsData.map(p => (
          <div key={p.id} style={{ background: 'white', borderRadius: '16px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '60px' }}>{p.image}</div>
            <h3>{p.name}</h3>
            <p style={{ color: '#C18E3A', fontWeight: 'bold' }}>{p.price} د.م.</p>
            <Link to={`/product/${p.slug}`} style={{ background: '#8B0000', color: 'white', padding: '8px 20px', borderRadius: '25px', textDecoration: 'none', display: 'inline-block' }}>تفاصيل</Link>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link to="/" style={{ color: '#8B0000' }}>← العودة للرئيسية</Link>
      </div>
    </div>
  );
}

// صفحة تفاصيل المنتج
function ProductPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>تفاصيل المنتج</h2>
      <p>سيتم إضافة التفاصيل قريباً</p>
      <Link to="/gallery">← العودة للمنتجات</Link>
    </div>
  );
}

// التطبيق الرئيسي
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product/:slug" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;

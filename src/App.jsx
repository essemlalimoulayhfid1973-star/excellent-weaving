import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// الصفحة الرئيسية
function Home() {
  const products = [
    { id: 1, name: 'تحفة الأطلس الكبير', price: 700, desc: 'شجرة الحياة - 1.50/60 سم' },
    { id: 2, name: 'زربية الأطلس الكبير', price: 5500, desc: 'زربية حمراء بقصة الزلزال' },
    { id: 3, name: 'حقيبة يد', price: 700, desc: 'جلد بقر ومنتوجات نباتية' },
    { id: 4, name: 'طاقم حقيبة يد', price: 1200, desc: 'حقيبتان (صغير + متوسط)' },
    { id: 5, name: 'طبق نباتات مجففة', price: 150, desc: 'حسب الطلب' },
    { id: 6, name: 'طبق نباتات جافة', price: 2000, desc: 'حسب الطلب' },
  ];

  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif' }}>
      <header style={{ background: '#1B263B', color: 'white', padding: '15px', textAlign: 'center' }}>
        <h1>🧵 تعاونية النسيج الممتاز - أمزميز</h1>
        <p>صناعة يدوية أمازيغية أصلية</p>
        <Link to="/admin" style={{ color: '#C18E3A', textDecoration: 'none' }}>🔐 لوحة التحكم</Link>
      </header>

      <main style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', color: '#8B0000' }}>منتجاتنا</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {products.map(p => (
            <div key={p.id} style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '15px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px' }}>🪢</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <p style={{ color: '#C18E3A', fontWeight: 'bold' }}>{p.price} د.م.</p>
              <button style={{ background: '#8B0000', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>🛒 أضف للسلة</button>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ background: '#1B263B', color: 'white', textAlign: 'center', padding: '20px', marginTop: '40px' }}>
        <p>© 2025 تعاونية النسيج الممتاز - أمزميز الحوز</p>
        <p>📞 واتساب: <a href="https://wa.me/212639674902" style={{ color: '#C18E3A' }}>+212 639 674902</a></p>
      </footer>
    </div>
  );
}

// لوحة التحكم
function Admin() {
  return (
    <div dir="rtl" style={{ padding: '20px', fontFamily: 'Cairo, sans-serif' }}>
      <h1>🔐 لوحة التحكم</h1>
      <p>كلمة السر: 123456</p>
      <Link to="/" style={{ color: '#8B0000' }}>← العودة للرئيسية</Link>
    </div>
  );
}

// التطبيق الرئيسي
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;

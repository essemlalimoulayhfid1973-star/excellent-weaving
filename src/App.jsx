import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gallery from './pages/Gallery';

// الصفحة الرئيسية
function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🧵 تعاونية النسيج الممتاز</h1>
      <p>منتجات يدوية من نساء الأطلس</p>
      <Link to="/gallery" style={{ background: '#8B0000', color: 'white', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>🛍️ تسوق الآن</Link>
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
      </Routes>
    </Router>
  );
}

export default App;

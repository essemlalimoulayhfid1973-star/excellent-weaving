import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🧵 تعاونية النسيج الممتاز</h1>
      <p>الموقع قيد التحديث...</p>
      <Link to="/gallery" style={{ color: '#8B0000' }}>عرض المنتجات</Link>
    </div>
  );
}

function Gallery() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>📸 المنتجات</h1>
      <p>سيتم عرض المنتجات قريباً</p>
      <Link to="/">العودة للرئيسية</Link>
    </div>
  );
}

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

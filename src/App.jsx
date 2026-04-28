import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gallery from './pages/Gallery';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🧵 تعاونية النسيج الممتاز</h1>
      <p>منتجات يدوية من نساء الأطلس</p>
      <Link to="/gallery">🛍️ تسوق الآن</Link>
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

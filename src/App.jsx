import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Cart from './components/Cart';
import AdminPanel from './pages/AdminPanel';
import { CartProvider } from './contexts/CartContext';
import { LanguageProvider } from './contexts/LanguageContext';

const Home = lazy(() => import('./pages/Home'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ fontSize: '48px' }}>🧵</div>
    <p style={{ marginRight: '10px' }}>جاري التحميل...</p>
  </div>
);

function App() {
  // نظام تسجيل الدخول للوحة التحكم
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === '123456') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      localStorage.setItem('tisaj_admin', 'true');
    } else {
      alert('كلمة السر غير صحيحة');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('tisaj_admin') === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const AdminRoute = ({ children }) => {
    if (!isAdmin) {
      return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>🔐 لوحة التحكم محمية</h2>
          <p>الرجاء إدخال كلمة السر للمتابعة</p>
          <form onSubmit={handleAdminLogin}>
            <input 
              type="password" 
              placeholder="أدخل كلمة السر" 
              value={adminPassword} 
              onChange={(e) => setAdminPassword(e.target.value)} 
              style={{ padding: '10px', marginBottom: '10px', width: '250px' }}
            />
            <br />
            <button type="submit" style={{ padding: '10px 30px', background: '#8B0000', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              دخول
            </button>
          </form>
          <p style={{ marginTop: '20px', fontSize: '12px', color: '#888' }}>كلمة السر التجريبية: 123456</p>
        </div>
      );
    }
    return children;
  };

  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <Helmet>
            <html lang="ar" dir="rtl" />
            <title>تعاونية النسيج الممتاز | أمزميز الحوز</title>
          </Helmet>
          <Header />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={
                <AdminRoute>
                  <AdminPanel />
                </AdminRoute>
              } />
            </Routes>
          </Suspense>
          <Cart />
          <WhatsAppButton />
          <Footer />
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;

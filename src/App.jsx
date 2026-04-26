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

export default function App() {
  // --- إضافة المسؤول الوحيد (Admin) ---
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // كلمة السر (123456) هي فقط للتجربة. يمكنك تغييرها لاحقاً.
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
          <h2>يجب تسجيل الدخول أولاً</h2>
          <form onSubmit={handleAdminLogin}>
            <input type="password" placeholder="كلمة السر" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} />
            <button type="submit">دخول</button>
          </form>
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

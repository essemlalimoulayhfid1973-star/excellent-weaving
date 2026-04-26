import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';
import { LanguageProvider } from './contexts/LanguageContext';

const Home = lazy(() => import('./pages/Home'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#FFFDD0' }}>
    <div style={{ fontSize: '48px' }}>🧵</div>
    <p style={{ marginRight: '10px' }}>جاري التحميل...</p>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <CartProvider>
          <Router>
            <Helmet>
              <html lang="ar" dir="rtl" />
              <title>تعاونية النسيج الممتاز | أمزميز الحوز</title>
              <meta name="description" content="تعاونية النسيج الممتاز - أكثر من 500 امرأة حرفية من 20 قرية في جبال الأطلس" />
            </Helmet>
            <Header />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Suspense>
            <Cart />
            <WhatsAppButton />
            <Footer />
          </Router>
        </CartProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;

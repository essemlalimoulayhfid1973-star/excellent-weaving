import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';
import { LanguageProvider } from './contexts/LanguageContext';

const Home = lazy(() => import('./pages/Home'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--cream-light)' }}>
    <div style={{ fontSize: '60px', animation: 'spin 1s linear infinite' }}>🧵</div>
    <p style={{ marginRight: '15px', fontSize: '18px' }}>جاري تحميل التراث الأمازيغي...</p>
    <style>{`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <Helmet>
            <html lang="ar" dir="rtl" />
            <title>تعاونية النسيج الممتاز | أمزميز الحوز</title>
            <meta name="description" content="تعاونية النسيج الممتاز بأمزميز الحوز - أكثر من 500 امرأة من 20 قرية في جبال الأطلس الكبير" />
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
  );
}

export default App;

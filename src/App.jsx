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
const Gallery = lazy(() => import('./pages/Gallery'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));

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
              <title>تعاونية النسيج الممتاز | منتجات يدوية من نساء الأطلس</title>
              <meta name="description" content="منتجات يدوية أصلية من نساء الحوز. زربية، حقائب، أطباق تقليدية." />
            </Helmet>
            <Header />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="/admin" element={<AdminPanel />} />
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

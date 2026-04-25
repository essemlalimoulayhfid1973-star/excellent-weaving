import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="app-container">
          <Navbar />
          <Hero />
          <main>
            <ProductList />
          </main>
          <Cart />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;

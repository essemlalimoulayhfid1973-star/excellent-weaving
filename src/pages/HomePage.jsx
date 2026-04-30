import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function HomePage({ user, products, cart, setCart, setView }) {
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div>
      <Header cartCount={cart.reduce((s, i) => s + i.qty, 0)} setView={setView} user={user} />
      <div className="container">
        <div className="hero-section">
          <h1>منتجات يدوية من نساء الأطلس</h1>
          <p>كل قطعة تحكي قصة صمود وأمل</p>
          <button className="btn-gold" onClick={() => window.location.href = '#products'}>تسوق الآن</button>
        </div>
        <div className="products-grid" id="products">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image || 'https://placehold.co/400x300'} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price} د.م.</p>
                <button onClick={() => addToCart(product)}>➕ أضف للسلة</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default HomePage;

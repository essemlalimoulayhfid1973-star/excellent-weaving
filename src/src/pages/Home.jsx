import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { products } from '../data/products';

const Home = () => {
  const { language } = useContext(ThemeContext);
  const phone = '212612345678'; // ⚠️ استبدلي برقم التعاونية

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          {language === 'ar' ? 'تعاونية النسيج الممتاز' : 'Tissage Premium'}
        </h1>
        <p className="hero-subtitle">
          {language === 'ar' 
            ? 'منتجات طبيعية فاخرة من أمزميز الحوز' 
            : 'Produits naturels de luxe d\'Amizmiz'}
        </p>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <h2 className="section-title">
          {language === 'ar' ? 'منتجاتنا' : 'Nos produits'}
        </h2>
        <div className="products-grid">
          {products.map(product => {
            const whatsappLink = `https://wa.me/${phone}?text=مرحباً، أريد طلب المنتج: ${product.nameAr} - SKU: ${product.sku} (السعر: ${product.price} درهم)`;
            return (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`}>
                  <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={product.nameAr}
                      onError={(e) => e.target.src = '/images/placeholder.jpg'}
                    />
                  </div>
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.id}`} className="product-title">
                    <h3>{language === 'ar' ? product.nameAr : product.nameFr}</h3>
                  </Link>
                  <p className="product-price">{product.price} {language === 'ar' ? 'درهم' : 'DH'}</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                    📱 {language === 'ar' ? 'طلب عبر واتساب' : 'Commander'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;

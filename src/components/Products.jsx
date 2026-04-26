import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

export default function Products() {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('tisaj_products');
    if (stored && JSON.parse(stored).length > 0) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts([
        { id: 1, name: 'تحفة الأطلس الكبير', price: 700, description: 'شجرة الحياة - 1.50/60 سم', image: '🪢' },
        { id: 2, name: 'زربية الأطلس الكبير أمزميز', price: 5500, description: 'زربية حمراء بقصة الزلزال', image: '🔴' },
        { id: 3, name: 'حقيبة يد', price: 700, description: 'جلد بقر ومنتوجات نباتية', image: '👜' },
        { id: 4, name: 'طاقم حقيبة يد', price: 1200, description: 'حقيبتان (صغير + متوسط)', image: '👜' },
        { id: 5, name: 'طبق نباتات مجففة', price: 150, description: 'حسب الطلب', image: '🍽️' },
        { id: 6, name: 'طبق نباتات جافة للمطبخ', price: 2000, description: 'حسب الطلب', image: '🏺' }
      ]);
    }
  }, []);

  return (
    <section id="products" style={{ padding: '60px 0', background: '#FFFDD0' }}>
      <div className="container">
        <h2 className="section-title">{t('products.title')}</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '30px',
          marginTop: '40px'
        }}>
          {products.map(product => (
            <div key={product.id} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '60px' }}>{product.image}</div>
              <h3>{product.name}</h3>
              <p style={{ fontSize: '13px', color: '#666' }}>{product.description}</p>
              <p style={{ color: '#D2691E', fontWeight: 'bold' }}>{product.price} {t('products.price')}</p>
              <button onClick={() => addToCart(product)} style={{
                background: '#8B0000', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', marginTop: '10px'
              }}>{t('products.add')}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
                                                                 }

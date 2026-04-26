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
      // منتجات افتراضية كبداية
      setProducts([
        { id: 1, name: 'زربية بوشرويط', price: 4500, description: 'زربية تقليدية', image: '🪢' },
        { id: 2, name: 'حقيبة يد', price: 700, description: 'جلد بقر', image: '👜' },
      ]);
    }
  }, []);

  const getName = (product) => {
    if (language === 'fr') return product.nameFr || product.name;
    if (language === 'en') return product.nameEn || product.name;
    return product.name;
  };

  const getDescription = (product) => {
    if (language === 'fr') return product.descriptionFr || product.description;
    if (language === 'en') return product.descriptionEn || product.description;
    return product.description;
  };

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
              {product.image && product.image.startsWith('data:image') ? (
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px' }} />
              ) : (
                <div style={{ fontSize: '60px' }}>{product.image || '🧵'}</div>
              )}
              <h3>{getName(product)}</h3>
              <p style={{ fontSize: '13px', color: '#666' }}>{getDescription(product)}</p>
              <p style={{ color: '#D2691E', fontWeight: 'bold' }}>{product.price} {t('products.price')}</p>
              <button onClick={() => addToCart({ ...product, name: getName(product) })} style={{
                background: '#8B0000', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', marginTop: '10px'
              }}>{t('products.add')}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
              }

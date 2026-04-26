import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

export default function Products() {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  // تحميل المنتجات من LocalStorage (نفس المنتجات اللي فلوحة التحكم)
  useEffect(() => {
    const storedProducts = localStorage.getItem('tisaj_products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      // منتجات افتراضية إذا كانت فارغة
      setProducts([
        { id: 1, name: 'زربية بوشرويط', price: 4500, description: 'زربية تقليدية بألوان زاهية', image: '🪢' },
        { id: 2, name: 'زربية الأطلس', price: 6800, description: 'صوف طبيعي فاخر', image: '🏔️' },
        { id: 3, name: 'زربية المرموشة', price: 5200, description: 'نقوش هندسية دقيقة', image: '✨' },
        { id: 4, name: 'منسوجات يدوية', price: 1200, description: 'أغطية ووسائد متنوعة', image: '🧣' },
        { id: 5, name: 'حقيبة جلدية تقليدية', price: 850, description: 'جلد طبيعي بتطريز أمازيغي', image: '👜' }
      ]);
    }
  }, []);

  return (
    <section id="products" style={{ padding: '60px 0', background: '#FFFDD0' }}>
      <div className="container">
        <h2 className="section-title">{t('products.title')}</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '40px'
        }}>
          {products.map(product => (
            <div
              key={product.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                transition: 'all 0.3s',
                border: '1px solid rgba(139,0,0,0.1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #8B0000, #D2691E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '70px',
                color: 'white'
              }}>
                {product.image || '🧵'}
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '22px', marginBottom: '10px', color: '#8B0000' }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px', lineHeight: '1.6' }}>
                  {product.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '15px'
                }}>
                  <span style={{
                    color: '#D2691E',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    {product.price.toLocaleString()} {t('products.price')}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      background: 'linear-gradient(135deg, #8B0000, #D2691E)',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      fontWeight: 'bold'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    {t('products.add')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
                }

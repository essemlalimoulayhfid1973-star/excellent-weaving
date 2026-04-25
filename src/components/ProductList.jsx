import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

const productsData = [
  { id: 1, name: 'زربية بوشرويط', nameFr: 'Tapis Boucharouite', price: 3800, image: '/images/products/boucharouite.webp', description: 'زربية عصرية من قصاصات القماش، صناعة يدوية فريدة' },
  { id: 2, name: 'زربية الأطلس', nameFr: 'Tapis Atlas', price: 5500, image: '/images/products/atlas.webp', description: 'صوف طبيعي 100%، نقوش أمازيغية أصيلة من جبال الأطلس' },
  { id: 3, name: 'زربية المرموشة', nameFr: 'Tapis Marmoucha', price: 4200, image: '/images/products/marmoucha.webp', description: 'تصميم هندسي بنقاط مميزة، رمز التراث الأمازيغي' },
  { id: 4, name: 'منسوجات يدوية', nameFr: 'Textiles faits main', price: 650, image: '/images/products/textile.webp', description: 'أغطية، وسائد، وشاحات بتطريز يدوي' },
  { id: 5, name: 'حقائب جلدية', nameFr: 'Sacs en cuir', price: 850, image: '/images/products/bag.webp', description: 'جلد طبيعي، صناعة تقليدية، تصاميم عصرية' },
  { id: 6, name: 'زربية فاخرة', nameFr: 'Tapis Prestige', price: 7800, image: '/images/products/prestige.webp', description: 'حرير وصوف طبيعي، نقشات ملكية' }
];

export default function Products() {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" style={{ padding: '60px 0', background: 'var(--cream-light)' }}>
      <div className="container">
        <h2 className="section-title">{t('products.title')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
          {productsData.map(product => (
            <div key={product.id} style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ height: '250px', background: '#E8D5B7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px' }}>🧵</div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '22px', color: 'var(--red-deep)', marginBottom: '10px' }}>{product.name}</h3>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '15px' }}>{product.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--orange-amber)', fontSize: '24px', fontWeight: 'bold' }}>{product.price.toLocaleString()} {t('products.price')}</span>
                  <button onClick={() => addToCart(product)} style={{ background: 'linear-gradient(135deg, #8B0000, #D32F2F)', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '30px', cursor: 'pointer' }}>{t('products.add')}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
                            }

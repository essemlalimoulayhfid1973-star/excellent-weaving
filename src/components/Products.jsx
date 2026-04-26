import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

const products = [
  {
    id: 1,
    name: 'زربية أمازيغية أصلية',
    nameFr: 'Tapis Amazigh Authentique',
    nameEn: 'Authentic Amazigh Rug',
    price: 5500,
    description: 'زربية من صوف الأغنام الطبيعي، صناعة يدوية 100%',
    image: '🪢',
  },
  {
    id: 2,
    name: 'حقيبة يد جلدية - طراز أمازيغي',
    nameFr: 'Sac en cuir - Style Amazigh',
    nameEn: 'Leather Bag - Amazigh Style',
    price: 850,
    description: 'حقيبة يد من الجلد الطبيعي، مزينة بتطريز أمازيغي',
    image: '👜',
  },
  {
    id: 3,
    name: 'حقيبة يد جلدية - صحراوية',
    nameFr: 'Sac en cuir - Désert',
    nameEn: 'Leather Bag - Desert Style',
    price: 750,
    description: 'حقيبة يد بتصميم صحراوي، عملية وأنيقة',
    image: '👜',
  },
  {
    id: 4,
    name: 'طبق نجيلي - نقش أمازيغي',
    nameFr: 'Plat en joncs - Motif Amazigh',
    nameEn: 'Wicker Plate - Amazigh Pattern',
    price: 350,
    description: 'طبق يدوي من ألياف النجيل',
    image: '🍽️',
  },
  {
    id: 5,
    name: 'طبق نجيلي - مجموعة السلة',
    nameFr: 'Plat en joncs - Ensemble',
    nameEn: 'Wicker Plate - Set',
    price: 450,
    description: 'طبق نجيلي بتصميم السلة التقليدية',
    image: '🧺',
  },
  {
    id: 6,
    name: 'طبق نجيلي - فاخر',
    nameFr: 'Plat en joncs - Luxe',
    nameEn: 'Wicker Plate - Luxury',
    price: 550,
    description: 'طبق نجيلي فاخر بنقوش دقيقة',
    image: '🏺',
  },
];

export default function Products() {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();

  const getName = (product) => {
    if (language === 'fr') return product.nameFr;
    if (language === 'en') return product.nameEn;
    return product.name;
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
              <div style={{ fontSize: '60px' }}>{product.image}</div>
              <h3>{getName(product)}</h3>
              <p style={{ color: '#D2691E', fontWeight: 'bold' }}>{product.price} {t('products.price')}</p>
              <button 
                onClick={() => addToCart({ ...product, name: getName(product) })} 
                style={{
                  background: '#8B0000',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                {t('products.add')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

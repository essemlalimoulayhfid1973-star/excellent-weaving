import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

const productsData = [
  {
    id: 1,
    name: 'زربية أمازيغية أصلية',
    nameEn: 'Authentic Amazigh Rug',
    price: 5500,
    image: '/images/products/rug1.webp',
    description: 'صوف طبيعي 100%، نسج يدوي، تصميم تقليدي أصيل',
    category: 'carpet'
  },
  {
    id: 2,
    name: 'وسادة بربرية فاخرة',
    nameEn: 'Luxury Berber Cushion',
    price: 350,
    image: '/images/products/cushion1.webp',
    description: 'تطريز يدوي بألوان طبيعية، حرير وصوف فاخر',
    category: 'cushion'
  },
  {
    id: 3,
    name: 'غطاء صوف أطلس',
    nameEn: 'Atlas Wool Blanket',
    price: 1800,
    image: '/images/products/blanket1.webp',
    description: 'دافئ، فاخر، ناعم - صناعة يدوية',
    category: 'blanket'
  },
  {
    id: 4,
    name: 'شال أمازيغي فاخر',
    nameEn: 'Luxury Amazigh Shawl',
    price: 450,
    image: '/images/products/shawl1.webp',
    description: 'حرير وصوف - لمسة أنيقة للمناسبات',
    category: 'shawl'
  },
  {
    id: 5,
    name: 'سجادة ممر أمزميز',
    nameEn: 'Amizmiz Runner Carpet',
    price: 1200,
    image: '/images/products/runner1.webp',
    description: 'مثالية للممرات والمداخل، نقشة تقليدية',
    category: 'carpet'
  },
  {
    id: 6,
    name: 'معلقة حائط تراثية',
    nameEn: 'Traditional Wall Tapestry',
    price: 850,
    image: '/images/products/tapestry1.webp',
    description: 'زينة جدارية فريدة تعكس التراث الأمازيغي',
    category: 'tapestry'
  }
];

export default function Products() {
  const { t } = useLanguage();
  const { addToCart } = useCart();

  return (
    <section id="products" style={{ padding: '60px 0', background: 'var(--atlas-sand)' }}>
      <div className="container">
        <h2 className="section-title">{t('products.title')}</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '40px'
        }}>
          {productsData.map(product => (
            <div
              key={product.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                height: '250px',
                background: 'var(--atlas-sand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px'
              }}>
                🧵
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--deep-indigo)' }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '13px', color: '#888', marginBottom: '15px' }}>
                  {product.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: 'var(--royal-saffron)',
                    fontSize: '22px',
                    fontWeight: 'bold'
                  }}>
                    {product.price.toLocaleString()} {t('products.price')}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      background: 'var(--deep-indigo)',
                      color: 'white',
                      border: 'none',
                      padding: '8px 20px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--royal-saffron)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'var(--deep-indigo)'}
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

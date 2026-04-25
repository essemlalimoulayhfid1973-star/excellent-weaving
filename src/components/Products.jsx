import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

const productsData = [
  {
    id: 1,
    name: 'زربية بوشرويط',
    nameFr: 'Boucherouite Rug',
    nameEn: 'Boucherouite Rug',
    price: 4500,
    description: 'زربية تقليدية مصنوعة من ألياف القطن والملابس المعاد تدويرها، ألوان زاهية ونقوش فنية فريدة',
    category: 'carpet',
    icon: '🪢'
  },
  {
    id: 2,
    name: 'زربية الأطلس',
    nameFr: 'Atlas Rug',
    nameEn: 'Atlas Rug',
    price: 6800,
    description: 'زربية من صوف الأغنام الطبيعي، نقوش أمازيغية أصيلة تعكس تراث جبال الأطلس الكبير',
    category: 'carpet',
    icon: '🏔️'
  },
  {
    id: 3,
    name: 'زربية المرموشة',
    nameFr: 'Marmoucha Rug',
    nameEn: 'Marmoucha Rug',
    price: 5200,
    description: 'زربية فاخرة بنقوش هندسية دقيقة، صناعة يدوية 100% من صوف فاخر',
    category: 'carpet',
    icon: '✨'
  },
  {
    id: 4,
    name: 'منسوجات يدوية',
    nameFr: 'Tissus faits main',
    nameEn: 'Handmade Textiles',
    price: 1200,
    description: 'أغطية ووسائد متنوعة بنقوش أمازيغية، صناعة يدوية بأيدي نساء أمزميز',
    category: 'textile',
    icon: '🧣'
  },
  {
    id: 5,
    name: 'حقيبة جلدية تقليدية',
    nameFr: 'Sac en cuir traditionnel',
    nameEn: 'Traditional Leather Bag',
    price: 850,
    description: 'حقيبة جلدية طبيعية مزينة بتطريز أمازيغي، عملية وأنيقة',
    category: 'leather',
    icon: '👜'
  },
  {
    id: 6,
    name: 'حقيبة سفر جلدية',
    nameFr: 'Sac de voyage en cuir',
    nameEn: 'Leather Travel Bag',
    price: 1500,
    description: 'حقيبة سفر فاخرة من الجلد الطبيعي، حرفية عالية وجودة استثنائية',
    category: 'leather',
    icon: '🧳'
  }
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
    <section id="products" style={{ padding: '60px 0', background: 'var(--cream)' }}>
      <div className="container">
        <h2 className="section-title">{t('products.title')}</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
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
                cursor: 'pointer',
                border: '1px solid rgba(139,0,0,0.1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                height: '220px',
                background: `linear-gradient(135deg, var(--red-deep), var(--orange-terracotta))`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px',
                color: 'white'
              }}>
                {product.icon}
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '22px', marginBottom: '10px', color: 'var(--red-deep)' }}>
                  {getName(product)}
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
                    color: 'var(--orange-terracotta)',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    {product.price.toLocaleString()} {t('products.price')}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      background: 'linear-gradient(135deg, var(--red-deep), var(--orange-terracotta))',
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

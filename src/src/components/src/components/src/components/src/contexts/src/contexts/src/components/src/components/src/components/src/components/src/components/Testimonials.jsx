import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: 'سارة أحمد',
    location: 'لندن، المملكة المتحدة',
    text: 'قطعة فنية رائعة! الجودة والتفاصيل لا توصف. الزربية تجاوزت توقعاتي بكثير. شكراً لتعاونية النسيج الممتاز.',
    rating: 5,
    image: '⭐'
  },
  {
    id: 2,
    name: 'محمد رشيد',
    location: 'دبي، الإمارات',
    text: 'تجربة شراء فريدة من نوعها. المنتج وصل في الوقت المحدد وبجودة ممتازة. أنصح الجميع بهذه التعاونية الرائعة.',
    rating: 5,
    image: '⭐'
  },
  {
    id: 3,
    name: 'فاطمة الزهراء',
    location: 'مراكش، المغرب',
    text: 'فخر للمنتج المغربي. أتمنى لكم المزيد من النجاح والتألق. الزرابي التي اشتريتها أصبحت زينة منزلي.',
    rating: 5,
    image: '⭐'
  },
  {
    id: 4,
    name: 'James Wilson',
    location: 'نيويورك، الولايات المتحدة',
    text: 'Absolutely beautiful craftsmanship! The rug arrived in perfect condition and looks stunning. Will definitely order again.',
    rating: 5,
    image: '⭐'
  }
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '60px 0', background: 'white' }}>
      <div className="container">
        <h2 className="section-title">💬 {t('testimonials.title') || 'شهادات زبائننا'}</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '40px'
        }}>
          {testimonials.map(item => (
            <div
              key={item.id}
              style={{
                background: 'var(--atlas-sand)',
                borderRadius: '20px',
                padding: '25px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* نجمة */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '20px',
                fontSize: '40px',
                opacity: 0.3
              }}>
                {item.image}
              </div>
              
              {/* التقييم */}
              <div style={{ marginBottom: '15px' }}>
                {'⭐'.repeat(item.rating)}
              </div>
              
              {/* النص */}
              <p style={{
                fontSize: '15px',
                lineHeight: '1.7',
                marginBottom: '20px',
                fontStyle: 'italic',
                color: '#444'
              }}>
                "{item.text}"
              </p>
              
              {/* الاسم والموقع */}
              <div>
                <h4 style={{
                  color: 'var(--royal-saffron)',
                  marginBottom: '5px',
                  fontSize: '16px'
                }}>
                  {item.name}
                </h4>
                <p style={{
                  fontSize: '12px',
                  color: '#888'
                }}>
                  📍 {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
              }

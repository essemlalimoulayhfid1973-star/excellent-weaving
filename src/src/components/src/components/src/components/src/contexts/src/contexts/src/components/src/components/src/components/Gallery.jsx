import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const galleryImages = [
  { id: 1, title: 'ورشة النسيج', icon: '🧵', desc: 'نساء أمزميز ينسجن التراث' },
  { id: 2, title: 'الصوف الطبيعي', icon: '🐑', desc: 'أجود أنواع الصوف من جبال الأطلس' },
  { id: 3, title: 'الأصباغ الطبيعية', icon: '🎨', desc: 'ألوان مستخلصة من الطبيعة' },
  { id: 4, title: 'التطريز اليدوي', icon: '🪡', desc: 'لمسات فنية فريدة' },
  { id: 5, title: 'معرض المنتجات', icon: '🏺', desc: 'تشكيلة فاخرة من الزرابي' },
  { id: 6, title: 'فرحة الإنجاز', icon: '😊', desc: 'حرفيات فخورات بمنتجاتهن' }
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" style={{ padding: '60px 0', background: 'white' }}>
      <div className="container">
        <h2 className="section-title">{t('gallery.title')}</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '25px',
          marginTop: '40px'
        }}>
          {galleryImages.map(item => (
            <div
              key={item.id}
              style={{
                background: 'linear-gradient(135deg, var(--deep-indigo), #2c3e5c)',
                borderRadius: '20px',
                overflow: 'hidden',
                padding: '30px',
                textAlign: 'center',
                color: 'white',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--royal-saffron)' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', opacity: 0.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '30px',
          background: 'var(--atlas-sand)',
          borderRadius: '20px'
        }}>
          <p style={{ fontSize: '18px', color: 'var(--deep-indigo)' }}>
            📸 {t('gallery.view')}
          </p>
          <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            ورشات عمل حية - زيارات ميدانية - توثيق يومي للحرفيات
          </p>
        </div>
      </div>
    </section>
  );
}

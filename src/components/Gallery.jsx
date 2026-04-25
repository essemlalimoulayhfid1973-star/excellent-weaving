import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const galleryEvents = [
  { id: 1, title: 'معرض مراكش الدولي', icon: '🏆', desc: 'المشاركة في المعرض الدولي للصناعة التقليدية' },
  { id: 2, title: 'تكريم نساء الحوز', icon: '🎗️', desc: 'احتفاء بصمود النساء بعد الزلزال' },
  { id: 3, title: 'ورشة تكوينية', icon: '📚', desc: 'تأطير الحرفيات في تقنيات جديدة' },
  { id: 4, title: 'جائزة التميز', icon: '🏅', desc: 'جائزة أفضل تعاونية منتجة' },
  { id: 5, title: 'معرض إكسبو الدار البيضاء', icon: '🌍', desc: 'تمثيل المغرب في المعرض الدولي' },
  { id: 6, title: 'ضيوف شرف', icon: '👑', desc: 'استقبال شخصيات مرموقة داعمة للتراث' }
];

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <section id="gallery" style={{ padding: '60px 0', background: 'white' }}>
      <div className="container">
        <h2 className="section-title">{t('gallery.title')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
          {galleryEvents.map(item => (
            <div key={item.id} style={{ background: 'linear-gradient(135deg, #8B0000, #D32F2F)', borderRadius: '20px', padding: '30px', textAlign: 'center', color: 'white', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--gold-saffron)' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', opacity: 0.9 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
                                                                                   }

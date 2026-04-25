import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const testimonials = [
  { id: 1, name: 'جائزة الحرف التقليدية', location: 'وزارة السياحة والصناعة التقليدية', text: 'جائزة أفضل تعاونية منتجة لسنة 2024', icon: '🏆' },
  { id: 2, name: 'شهادة الجودة الدولية', location: 'ISO 9001:2024', text: 'شهادة مطابقة للمعايير الدولية للجودة', icon: '📜' },
  { id: 3, name: 'جائزة صمود', location: 'المجلس الوطني لحقوق الإنسان', text: 'تكريم خاص لصمود نساء الحوز بعد الزلزال', icon: '🕊️' }
];

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section style={{ padding: '60px 0', background: 'var(--cream-light)' }}>
      <div className="container">
        <h2 className="section-title">{t('testimonials.title')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
          {testimonials.map(item => (
            <div key={item.id} style={{ background: 'linear-gradient(135deg, #1A1A1A, #2C2C2C)', borderRadius: '20px', padding: '30px', textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>{item.icon}</div>
              <h3 style={{ color: 'var(--gold-saffron)', marginBottom: '10px' }}>{item.name}</h3>
              <p style={{ fontSize: '13px', opacity: 0.7 }}>{item.location}</p>
              <p style={{ marginTop: '15px', fontStyle: 'italic' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
                }

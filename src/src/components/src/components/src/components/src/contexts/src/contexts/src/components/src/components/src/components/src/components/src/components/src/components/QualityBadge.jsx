import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function QualityBadge() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, var(--deep-indigo), #2c3e5c)' }}>
      <div className="container">
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '30px',
          padding: '40px',
          textAlign: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>⭐</div>
          <h2 style={{
            color: 'var(--royal-saffron)',
            fontSize: '32px',
            marginBottom: '20px',
            fontFamily: "'Playfair Display', serif"
          }}>
            {t('quality.title') || 'وعد الجودة'}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '30px'
          }}>
            <div>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>🔍</div>
              <h4 style={{ color: 'var(--royal-saffron)', marginBottom: '10px' }}>فحص الصوف</h4>
              <p style={{ fontSize: '14px', opacity: 0.8 }}>اختيار أجود أنواع الصوف الطبيعي</p>
            </div>
            <div>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>🧵</div>
              <h4 style={{ color: 'var(--royal-saffron)', marginBottom: '10px' }}>دقة النسيج</h4>
              <p style={{ fontSize: '14px', opacity: 0.8 }}>مراقبة الجودة أثناء عملية النسج</p>
            </div>
            <div>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>✨</div>
              <h4 style={{ color: 'var(--royal-saffron)', marginBottom: '10px' }}>اللمسات النهائية</h4>
              <p style={{ fontSize: '14px', opacity: 0.8 }}>فحص نهائي قبل المغادرة</p>
            </div>
          </div>

          <p style={{
            marginTop: '30px',
            fontSize: '14px',
            opacity: 0.7,
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {t('quality.stages') || '3 مراحل فحص دقيقة'} - نضمن لك قطعة خالية من العيوب
          </p>
        </div>
      </div>
    </section>
  );
}

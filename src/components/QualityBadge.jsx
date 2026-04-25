import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const qualityStages = [
  { step: 1, title: 'اختيار الصوف', desc: 'نختار أجود أنواع الصوف الطبيعي من أغنام جبال الأطلس', icon: '🐑' },
  { step: 2, title: 'الصباغة الطبيعية', desc: 'نستخدم أصباغ 100% طبيعية مستخلصة من النباتات', icon: '🎨' },
  { step: 3, title: 'النسج اليدوي', desc: 'نسج يدوي 100% على النول التقليدي', icon: '🪢' },
  { step: 4, title: 'مراقبة الجودة', desc: 'فحص دقيق لكل قطعة قبل المغادرة', icon: '🔍' },
  { step: 5, title: 'التغليف والشحن', desc: 'تغليف آمن وشحن دولي سريع', icon: '📦' }
];

export default function QualityBadge() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #1B263B, #2c3e5c)' }}>
      <div className="container">
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '30px',
          padding: '50px 40px',
          textAlign: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '56px', marginBottom: '20px' }}>⭐</div>
          <h2 style={{
            color: 'var(--gold)',
            fontSize: '36px',
            marginBottom: '15px',
            fontFamily: "'Amiri', serif"
          }}>
            {t('quality.title')} - الجودة التي نعدكم بها
          </h2>
          <p style={{ color: 'white', fontSize: '16px', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            {t('quality.stages')} - من صوف الأطلس إلى منزلك
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '25px'
          }}>
            {qualityStages.map(stage => (
              <div key={stage.step} style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '20px',
                transition: 'transform 0.3s'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>{stage.icon}</div>
                <div style={{
                  color: 'var(--gold)',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '5px'
                }}>{stage.step}</div>
                <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '8px' }}>{stage.title}</h4>
                <p style={{ fontSize: '12px', opacity: 0.8 }}>{stage.desc}</p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '40px',
            padding: '20px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '12px'
          }}>
            <p style={{ color: 'white', fontSize: '14px' }}>
              🔒 نضمن لكم قطعة فريدة، خالية من العيوب، تعكس أصالة التراث الأمازيغي
            </p>
          </div>
        </div>
      </div>
    </section>
  );
                     }

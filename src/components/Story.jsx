import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Story() {
  const { t } = useLanguage();
  return (
    <section id="story" style={{ padding: '80px 0', background: 'var(--cream-light)' }}>
      <div className="container">
        <h2 className="section-title">{t('story.title')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <div style={{ background: 'white', padding: '30px', textAlign: 'center', borderRadius: '20px' }}><div style={{ fontSize: '48px' }}>👩‍🦱</div><h3 style={{ color: 'var(--red-deep)' }}>500+</h3><p>{t('story.women')}</p></div>
            <div style={{ background: 'white', padding: '30px', textAlign: 'center', borderRadius: '20px' }}><div style={{ fontSize: '48px' }}>🏘️</div><h3 style={{ color: 'var(--red-deep)' }}>20+</h3><p>{t('story.villages')}</p></div>
            <div style={{ background: 'white', padding: '30px', textAlign: 'center', borderRadius: '20px' }}><div style={{ fontSize: '48px' }}>🧵</div><h3 style={{ color: 'var(--red-deep)' }}>30+</h3><p>{t('story.years')}</p></div>
            <div style={{ background: 'white', padding: '30px', textAlign: 'center', borderRadius: '20px' }}><div style={{ fontSize: '48px' }}>🌍</div><h3 style={{ color: 'var(--red-deep)' }}>15+</h3><p>دولة حول العالم</p></div>
          </div>
          <div style={{ background: 'var(--white-pure)', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--red-deep)', marginBottom: '20px', fontSize: '28px' }}>🇲🇦 {t('story.subtitle') || 'من تحت الأنقاض إلى العالمية'}</h3>
            <p style={{ lineHeight: '1.9', marginBottom: '20px' }}>{t('story.text')}</p>
            <p style={{ fontStyle: 'italic', color: 'var(--orange-amber)', marginTop: '20px', borderRight: '3px solid var(--red-deep)', paddingRight: '15px' }}>"من صنع بأيدي نساء أمزميز، يصل إلى قلب كل بيت في العالم"</p>
          </div>
        </div>
      </div>
    </section>
  );
                         }

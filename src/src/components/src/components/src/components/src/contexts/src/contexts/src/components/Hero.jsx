import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--deep-indigo), #2c3e5c)',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath fill=\'white\' d=\'M20,30 L80,30 L80,40 L20,40 Z M20,50 L80,50 L80,60 L20,60 Z M20,70 L80,70 L80,80 L20,80 Z\'/%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat',
        backgroundSize: '40px'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '48px',
          marginBottom: '20px',
          animation: 'fadeInUp 0.8s ease'
        }}>
          {t('hero.title')}
        </h1>
        <p style={{
          fontSize: '20px',
          marginBottom: '30px',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 30px'
        }}>
          {t('hero.subtitle')}
        </p>
        <a
          href="#products"
          style={{
            background: 'var(--royal-saffron)',
            color: 'var(--deep-indigo)',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '40px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {t('hero.cta')}
        </a>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
      }

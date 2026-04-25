import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

export default function Header() {
  const { language, changeLanguage, t } = useLanguage();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'ar', name: '🇸🇦 العربية' },
    { code: 'fr', name: '🇫🇷 Français' },
    { code: 'en', name: '🇬🇧 English' },
    { code: 'ber', name: 'ⵜⴰⵎⴰⵣⵉⵖⵜ' }
  ];

  return (
    <header style={{
      background: 'linear-gradient(135deg, #1B263B, #2c3e5c)',
      color: 'white',
      padding: '15px 20px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px' }}>🧵</span>
          <div>
            <h1 style={{ fontSize: '18px', margin: 0, fontFamily: "'Amiri', serif" }}>
              تعاونية <span style={{ color: '#C18E3A' }}>النسيج الممتاز</span>
            </h1>
            <p style={{ fontSize: '10px', opacity: 0.7, margin: 0 }}>أمزميز - الحوز</p>
          </div>
        </div>

        {/* Navigation Desktop */}
        <nav style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>{t('nav.home')}</a>
          <a href="#products" style={{ color: 'white', textDecoration: 'none' }}>{t('nav.products')}</a>
          <a href="#gallery" style={{ color: 'white', textDecoration: 'none' }}>{t('nav.gallery')}</a>
          <a href="#story" style={{ color: 'white', textDecoration: 'none' }}>{t('nav.story')}</a>
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {/* Language Switcher */}
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            style={{
              background: 'transparent',
              color: 'white',
              border: '1px solid #C18E3A',
              borderRadius: '8px',
              padding: '6px 10px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code} style={{ background: '#1B263B' }}>
                {lang.name}
              </option>
            ))}
          </select>
          
          {/* Cart Icon */}
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <span style={{ fontSize: '24px' }}>🛒</span>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-12px',
                background: '#DC143C',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 8px',
                fontSize: '11px',
                fontWeight: 'bold'
              }}>{totalItems}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
                                      }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const linkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

  return (
    <header style={{ background: 'var(--deep-indigo)', color: 'white', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
          <span style={{ fontSize: '28px' }}>🧵</span>
          <div><h1 style={{ fontSize: '18px', margin: 0 }}>تعاونية <span style={{ color: 'var(--saffron)' }}>النسيج الممتاز</span></h1><p style={{ fontSize: '10px', opacity: 0.7, margin: 0 }}>أمزميز - الحوز</p></div>
        </Link>

        <nav style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/" style={linkStyle}>{t('nav.home')}</Link>
          <Link to="/gallery" style={linkStyle}>{t('nav.products')}</Link>
          <Link to="/awards" style={linkStyle}>🏆 الشواهد</Link>
          <Link to="/events" style={linkStyle}>🎪 الفعاليات</Link>
        </nav>

        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <select value={language} onChange={(e) => changeLanguage(e.target.value)} style={{ background: 'transparent', color: 'white', border: `1px solid var(--saffron)`, borderRadius: '8px', padding: '6px 10px', cursor: 'pointer' }}>
            {languages.map(lang => <option key={lang.code} value={lang.code} style={{ background: 'var(--deep-indigo)' }}>{lang.name}</option>)}
          </select>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <span style={{ fontSize: '24px' }}>🛒</span>
            {totalItems > 0 && <span style={{ position: 'absolute', top: '-8px', right: '-12px', background: 'var(--red-deep)', color: 'white', borderRadius: '50%', padding: '2px 8px', fontSize: '11px', fontWeight: 'bold' }}>{totalItems}</span>}
          </div>
        </div>
      </div>
    </header>
  );
        }

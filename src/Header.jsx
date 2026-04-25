import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

export default function Header() {
  const { language, changeLanguage, t } = useLanguage();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'ar', name: '🇸🇦 العربية' },
    { code: 'ber', name: 'ⵜⴰⵎⴰⵣⵉⵖⵜ' },
    { code: 'fr', name: '🇫🇷 Français' }
  ];

  return (
    <header style={{
      background: 'var(--deep-indigo)',
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
        flexWrap: 'wrap'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px' }}>🧵</span>
          <h1 style={{ fontSize: '20px', margin: 0 }}>
            تعاونية <span style={{ color: 'var(--royal-saffron)' }}>النسيج الممتاز</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', gap: '30px' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>الرئيسية</a>
          <a href="#products" style={{ color: 'white', textDecoration: 'none' }}>المنتجات</a>
          <a href="#gallery" style={{ color: 'white', textDecoration: 'none' }}>المعرض</a>
          <a href="#story" style={{ color: 'white', textDecoration: 'none' }}>قصتنا</a>
        </nav>

        {/* Language Switcher & Cart */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            style={{
              background: 'transparent',
              color: 'white',
              border: '1px solid var(--royal-saffron)',
              borderRadius: '8px',
              padding: '5px 10px',
              cursor: 'pointer'
            }}
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code} style={{ background: 'var(--deep-indigo)' }}>
                {lang.name}
              </option>
            ))}
          </select>
          
          <div id="cart-icon" style={{ position: 'relative', cursor: 'pointer' }}>
            <span style={{ fontSize: '24px' }}>🛒</span>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-12px',
                background: 'var(--royal-saffron)',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>{totalItems}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
          }

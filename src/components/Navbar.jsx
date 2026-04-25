import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">تعاونية النسيج الممتاز</div>
        
        <ul className="nav-links">
          <li>{t('nav.home')}</li>
          <li>{t('nav.products')}</li>
          <li>{t('nav.story')}</li>
        </ul>

        <div className="nav-actions">
          <button onClick={() => setLanguage(language === 'ar' ? 'fr' : 'ar')}>
            {language === 'ar' ? 'Français' : 'العربية'}
          </button>
          <div className="cart-icon">
            🛒 <span>{cart.length}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

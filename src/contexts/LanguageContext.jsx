import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  ar: {
    nav: { home: 'الرئيسية', products: 'المنتجات', gallery: 'المعرض', story: 'حكايتنا' },
    hero: { title: 'روح الأطلس في كل خيط', cta: 'تسوق الآن' },
    products: { title: 'منتجاتنا', add: 'أضف للسلة', price: 'د.م.' },
    cart: { title: 'سلة التسوق', empty: 'السلة فارغة', total: 'الإجمالي', checkout: 'تأكيد الطلب' }
  },
  fr: {
    nav: { home: 'Accueil', products: 'Produits', gallery: 'Galerie', story: 'Notre Histoire' },
    hero: { title: "L'âme de l'Atlas", cta: 'Acheter' },
    products: { title: 'Nos produits', add: 'Ajouter', price: 'DH' },
    cart: { title: 'Panier', empty: 'Panier vide', total: 'Total', checkout: 'Valider' }
  },
  en: {
    nav: { home: 'Home', products: 'Products', gallery: 'Gallery', story: 'Our Story' },
    hero: { title: 'Soul of the Atlas', cta: 'Shop Now' },
    products: { title: 'Our Products', add: 'Add to Cart', price: 'MAD' },
    cart: { title: 'Cart', empty: 'Cart is empty', total: 'Total', checkout: 'Checkout' }
  },
  ber: {
    nav: { home: 'ⵜⴰⵙⵏⴰ', products: 'ⵉⵎⵓⵔⴰⵔ', gallery: 'ⵜⴰⵡⵍⴰⴼⵜ', story: 'ⴰⵎⵣⵔⵓⵢ' },
    hero: { title: 'ⵜⴰⵎⵙⵎⵓⵏⵜ', cta: 'ⴰⵖⵓⵍ' },
    products: { title: 'ⵉⵎⵓⵔⴰⵔ', add: 'ⵔⵏⵓ', price: 'ⴰⵖⵔⵓⴷ' },
    cart: { title: 'ⵜⴰⵙⵏⴰⵢⵜ', empty: 'ⵜⴰⵙⵏⴰⵢⵜ ⵜⴰⴳⴷⵓⴷⴰⵏⵜ', total: 'ⴰⵖⵔⵓⴷ', checkout: 'ⴰⵔⴰⵔ' }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved) setLanguage(saved);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' || lang === 'ber' ? 'rtl' : 'ltr';
  };

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[language];
    for (const k of keys) {
      if (result && result[k] !== undefined) result = result[k];
      else return key;
    }
    return result || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

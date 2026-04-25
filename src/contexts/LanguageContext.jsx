import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  ar: {
    nav: { home: 'الرئيسية', products: 'المنتجات', gallery: 'المعرض', story: 'حكايتنا' },
    hero: { title: 'تعاونية النسيج الممتاز', subtitle: 'أصالة الزربية الأمازيغية من قلب أمزميز' },
    cart: { title: 'سلة المشتريات', empty: 'السلة فارغة', checkout: 'إتمام الطلب عبر واتساب' }
  },
  fr: {
    nav: { home: 'Accueil', products: 'Produits', gallery: 'Galerie', story: 'Notre Histoire' },
    hero: { title: 'Coopérative Excellence', subtitle: 'L\'authenticité du tapis amazigh d\'Amizmiz' },
    cart: { title: 'Panier', empty: 'Le panier est vide', checkout: 'Commander via WhatsApp' }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');
  const t = (path) => {
    return path.split('.').reduce((obj, key) => obj?.[key], translations[language]) || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
    

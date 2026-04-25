import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  ar: {
    nav: { home: 'الرئيسية', products: 'المنتجات', gallery: 'المعرض', story: 'قصتنا' },
    hero: { title: 'روح الأطلس في كل خيط', subtitle: 'صناعة يدوية أمازيغية أصلية من قلب أمزميز', cta: 'تسوق الآن' },
    products: { title: 'منتجاتنا الفاخرة', add: 'أضف للسلة', price: 'د.م.' },
    gallery: { title: '📸 بانوراما الأنشطة', view: 'استكشف ورشات العمل' },
    story: { title: '🏔️ نبض أمزميز', women: 'حرفية', villages: 'قرية', years: 'سنة من التراث' },
    testimonials: { title: '💬 شهادات زبائننا' },
    quality: { title: '⭐ وعد الجودة', stages: '3 مراحل فحص دقيقة' },
    footer: { rights: 'جميع الحقوق محفوظة' }
  },
  ber: {
    nav: { home: 'ⵜⴰⵙⵏⴰ ⵜⴰⵎⵣⵡⴰⵔⵓⵜ', products: 'ⵉⵎⵓⵔⴰⵔ', gallery: 'ⵜⴰⵡⵍⴰⴼⵜ', story: 'ⴰⵎⵣⵔⵓⵢ' },
    hero: { title: 'ⵜⴰⵎⵙⵎⵓⵏⵜ ⵏ ⵓⵙⵏⴰⴳ ⴰⵎⵇⵔⴰⵏ', subtitle: 'ⴰⵙⵏⴰⴳ ⴰⵎⴰⵣⵉⵖ', cta: 'ⴰⵖⵓⵍ ⴷⵉⵍⴰ' },
    products: { title: 'ⵉⵎⵓⵔⴰⵔ ⵏⵏⵖ', add: 'ⵔⵏⵓ ⵖⵔ ⵜⴰⵙⵏⴰⵢⵜ', price: 'ⴰⵖⵔⵓⴷ' }
  },
  fr: {
    nav: { home: 'Accueil', products: 'Produits', gallery: 'Galerie', story: 'Notre Histoire' },
    hero: { title: "L'âme de l'Atlas dans chaque fil", subtitle: 'Artisanat Amazigh authentique', cta: 'Acheter' },
    products: { title: 'Nos produits de luxe', add: 'Ajouter au panier', price: 'DH' }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
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
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return key;
      }
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
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  ar: {
    nav: { home: 'الرئيسية', products: 'المنتجات', gallery: 'المعرض والفعاليات', story: 'حكايتنا' },
    hero: { title: 'تعاونية النسيج الممتاز', subtitle: 'أمزميز - الحوز - جبال الأطلس الكبير', cta: 'اكتشف مجموعتنا' },
    products: { title: 'منتجاتنا التراثية', add: 'أضف للسلة', price: 'درهم' },
    gallery: { title: 'معرض الصور والفعاليات', view: 'استكشف مشاركاتنا' },
    story: { title: 'حكايتنا - من قلب الحوز', women: 'امرأة حرفية', villages: 'قرية', years: 'سنة من التراث', subtitle: 'قصة نضال وصمود', text: 'تعاونية النسيج الممتاز بأمزميز الحوز هي قصة إرادة نساء جبال الأطلس الكبير. بعد زلزال 2023 المدمر، لم تستسلم 500 امرأة من 20 قرية. اخترن الحياة، واخترن إحياء النول من تحت الأنقاض. اليوم، ننسج ليس فقط الزرابي، بل ننسج أملاً جديداً لمنطقتنا. كل زربية تحكي قصة بيت أعيد بناؤه، وكل خيط يروي حكاية كرامة. ندعوكم لتكونوا جزءاً من هذه النهضة.' },
    testimonials: { title: 'شواهد الجودة والتقدير' },
    quality: { title: 'شهادات الجودة والمعارض', stages: 'جوائز ومشاركات دولية' },
    footer: { rights: 'جميع الحقوق محفوظة', email: 'البريد الإلكتروني' }
  },
  ber: {
    nav: { home: 'ⵜⴰⵙⵏⴰ ⵜⴰⵎⵣⵡⴰⵔⵓⵜ', products: 'ⵉⵎⵓⵔⴰⵔ', gallery: 'ⵜⴰⵡⵍⴰⴼⵜ', story: 'ⴰⵎⵣⵔⵓⵢ ⵏⵏⵖ' },
    hero: { title: 'ⵜⴰⵎⵙⵎⵓⵏⵜ ⵏ ⵓⵙⵏⴰⴳ ⴰⵎⵇⵔⴰⵏ', subtitle: 'ⴰⵎⵣⵎⵉⵣ - ⴰⵍⵃⴰⵡⵣ', cta: 'ⴰⵖⵓⵍ ⴷⵉⵍⴰ' },
    products: { title: 'ⵉⵎⵓⵔⴰⵔ ⵏⵏⵖ', add: 'ⵔⵏⵓ ⵖⵔ ⵜⴰⵙⵏⴰⵢⵜ', price: 'ⴰⵖⵔⵓⴷ' },
    story: { title: 'ⴰⵎⵣⵔⵓⵢ ⵏⵏⵖ', women: 'ⵜⴰⵡⵙⵏⴰ', villages: 'ⵜⵉⵖⵔⵎⵉⵏ', years: 'ⵓⵙⴳⴳⵯⴰⵙ', text: 'ⵜⴰⵎⵙⵎⵓⵏⵜ ⵏ ⵓⵙⵏⴰⴳ ⴰⵎⵇⵔⴰⵏ ⴳ ⴰⵎⵣⵎⵉⵣ ⵜⴰⵔⴰⴱⴱⵓⵜ ⵏ ⵜⵉⵡⵉⵙⵉ ⵏ ⵜⵎⵖⴰⵔⵉⵏ' }
  },
  fr: {
    nav: { home: 'Accueil', products: 'Produits', gallery: 'Galerie', story: 'Notre Histoire' },
    hero: { title: 'Coopérative du Tissage d\'Excellence', subtitle: 'Amizmiz - Al Haouz - Haut Atlas', cta: 'Découvrir' },
    products: { title: 'Nos Produits Artisanaux', add: 'Ajouter', price: 'DH' },
    story: { title: 'Notre Histoire', women: 'Artisanes', villages: 'Villages', years: 'Années', text: 'Après le séisme de 2023, 500 femmes de 20 villages ont choisi de se relever...' }
  },
  en: {
    nav: { home: 'Home', products: 'Products', gallery: 'Gallery', story: 'Our Story' },
    hero: { title: 'Excellent Weaving Cooperative', subtitle: 'Amizmiz - Al Haouz - High Atlas', cta: 'Discover' },
    products: { title: 'Our Heritage Products', add: 'Add to Cart', price: 'MAD' },
    story: { title: 'Our Story', women: 'Artisans', villages: 'Villages', years: 'Years', text: 'After the 2023 earthquake, 500 women from 20 villages chose to rise again...' }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) setLanguage(saved);
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

export const useLanguage = () => useContext(LanguageContext);

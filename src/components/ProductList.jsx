import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

const products = [
  { id: 1, nameAr: 'زربية أطلسية قديمة', nameFr: 'Tapis Atlas Ancien', price: 2500, image: 'https://via.placeholder.com/300' },
  { id: 2, nameAr: 'بوشرويط عصري', nameFr: 'Boucherouite Moderne', price: 1200, image: 'https://via.placeholder.com/300' },
  { id: 3, nameAr: 'زربية مرموشة', nameFr: 'Tapis Marmoucha', price: 3800, image: 'https://via.placeholder.com/300' },
];

const ProductList = () => {
  const { addToCart } = useCart();
  const { language } = useLanguage();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.nameAr} />
          <h3>{language === 'ar' ? product.nameAr : product.nameFr}</h3>
          <p>{product.price} MAD</p>
          <button onClick={() => addToCart(product)}>
            {language === 'ar' ? 'أضف إلى السلة' : 'Ajouter au panier'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

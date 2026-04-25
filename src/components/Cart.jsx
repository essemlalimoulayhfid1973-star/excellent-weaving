import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const { language, t } = useLanguage();

  const sendWhatsApp = () => {
    const phoneNumber = "212600000000"; // هنا غانديرو الرقم ديالك من بعد
    const message = language === 'ar' 
      ? `السلام عليكم، أريد طلب هذه المنتجات: %0A` 
      : `Bonjour, je souhaite commander ces produits : %0A`;
    
    const items = cart.map(item => `- ${language === 'ar' ? item.nameAr : item.nameFr}`).join('%0A');
    window.open(`https://wa.me/${phoneNumber}?text=${message}${items}`, '_blank');
  };

  if (cart.length === 0) return null;

  return (
    <div className="cart-sidebar">
      <h2>{t('cart.title')}</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{language === 'ar' ? item.nameAr : item.nameFr}</span>
          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}
      <button className="whatsapp-btn" onClick={sendWhatsApp}>
        {t('cart.checkout')} 📱
      </button>
    </div>
  );
};

export default Cart;

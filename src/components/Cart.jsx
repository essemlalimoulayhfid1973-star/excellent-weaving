import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert('السلة فارغة');
      return;
    }

    let message = `🧵 طلب جديد من تعاونية النسيج الممتاز - أمزميز\n━━━━━━━━━━━━━━━━━━━━━\n`;
    cart.forEach(item => {
      message += `\n• ${item.name} (${item.quantity}) × ${item.price} = ${(item.quantity * item.price).toLocaleString()} د.م.`;
    });
    message += `\n━━━━━━━━━━━━━━━━━━━━━\n💰 الإجمالي: ${totalPrice.toLocaleString()} د.م.`;
    message += `\n💳 طريقة الدفع: ${paymentMethod === 'cod' ? 'الدفع عند الاستلام' : 'PayPal'}`;
    message += `\n━━━━━━━━━━━━━━━━━━━━━\n📞 بيانات التواصل:`;
    
    const name = prompt('👤 أدخلي اسمك الكريم:', '');
    const phone = prompt('📱 أدخلي رقم هاتفك:', '06xxxxxxxx');
    const address = prompt('📍 أدخلي عنوانك الكامل:', '');
    
    if (name) message += `\n👤 الاسم: ${name}`;
    if (phone) message += `\n📞 الهاتف: ${phone}`;
    if (address) message += `\n📍 العنوان: ${address}`;
    message += `\n✨ نشكرك على ثقتك في تعاونية النسيج الممتاز!`;
    
    window.open(`https://wa.me/212639674902?text=${encodeURIComponent(message)}`, '_blank');
    clearCart();
    setIsOpen(false);
    alert('✅ تم إرسال طلبك بنجاح!');
  };

  const handlePayPal = () => {
    alert('سيتم تحويلك إلى PayPal لإتمام الدفع');
    sendWhatsAppOrder();
  };

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} style={{
        position: 'fixed', bottom: '25px', right: '25px', background: '#8B0000', color: 'white',
        padding: '14px 24px', borderRadius: '50px', cursor: 'pointer', zIndex: 1000,
        display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold'
      }}>
        🛒 سلة الشراء {totalItems > 0 && <span style={{
          background: '#C18E3A', borderRadius: '50%', padding: '2px 10px', fontSize: '14px'
        }}>{totalItems}</span>}
      </div>

      {isOpen && (
        <>
          <div onClick={() => setIsOpen(false)} style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1999
          }} />
          <div style={{
            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', maxWidth: '500px', background: 'white', borderRadius: '20px', zIndex: 2000, overflow: 'hidden'
          }}>
            <div style={{ background: '#8B0000', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between' }}>
              <h3>🛒 سلة التسوق</h3>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '20px' }}>
              {cart.length === 0 ? <p style={{ textAlign: 'center' }}>السلة فارغة</p> : cart.map(item => (
                <div key={item.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div><h4>{item.name}</h4><p style={{ color: '#C18E3A' }}>{item.price} د.م.</p></div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} style={{ background: '#ddd', border: 'none', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer' }}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ background: '#ddd', border: 'none', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer' }}>+</button>
                    <button onClick={() => removeFromCart(item.id)} style={{ background: '#8B0000', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>حذف</button>
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div style={{ padding: '20px', borderTop: '1px solid #eee' }}>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>💳 طريقة الدفع:</label>
                  <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <option value="cod">الدفع عند الاستلام</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <strong>الإجمالي:</strong> <strong>{totalPrice.toLocaleString()} د.م.</strong>
                </div>
                <button onClick={paymentMethod === 'cod' ? sendWhatsAppOrder : handlePayPal} style={{
                  width: '100%', background: '#25D366', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold'
                }}>📱 تأكيد الطلب عبر واتساب</button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
                         }

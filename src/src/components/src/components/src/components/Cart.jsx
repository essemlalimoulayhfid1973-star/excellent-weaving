import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert('🛒 سلة التسوق فارغة');
      return;
    }

    let message = '🧵 طلب جديد من تعاونية النسيج الممتاز - أمزميز:\n━━━━━━━━━━━━━━━━━━━━━\n';
    cart.forEach(item => {
      message += `\n• ${item.name} (${item.quantity}) × ${item.price} = ${(item.quantity * item.price).toLocaleString()} د.م.`;
    });
    message += `\n━━━━━━━━━━━━━━━━━━━━━\n💰 الإجمالي: ${totalPrice.toLocaleString()} د.م.`;
    message += `\n━━━━━━━━━━━━━━━━━━━━━\n📞 بيانات التواصل:`;
    
    const name = prompt('👤 أدخلي اسمك الكريم:', '');
    const phone = prompt('📱 أدخلي رقم هاتفك:', '06xxxxxxxx');
    
    if (name) message += `\n👤 الاسم: ${name}`;
    if (phone) message += `\n📞 الهاتف: ${phone}`;
    message += `\n✨ نشكرك على ثقتك في تعاونية النسيج الممتاز!`;
    
    window.open(`https://wa.me/212639674902?text=${encodeURIComponent(message)}`, '_blank');
    clearCart();
    setIsOpen(false);
    alert('✅ تم إرسال طلبك بنجاح! سيتم التواصل معك خلال 24 ساعة.');
  };

  return (
    <>
      {/* زر فتح السلة */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          background: 'var(--deep-indigo)',
          color: 'white',
          padding: '14px 24px',
          borderRadius: '50px',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: 'bold'
        }}
      >
        🛒 سلة الشراء
        {totalItems > 0 && (
          <span style={{
            background: 'var(--royal-saffron)',
            borderRadius: '50%',
            padding: '2px 10px',
            fontSize: '14px'
          }}>{totalItems}</span>
        )}
      </div>

      {/* نافذة السلة */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '500px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          zIndex: 2000,
          overflow: 'hidden'
        }}>
          <div style={{
            background: 'var(--deep-indigo)',
            color: 'white',
            padding: '15px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{ margin: 0 }}>🛒 سلة التسوق</h3>
            <button onClick={() => setIsOpen(false)} style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer'
            }}>✕</button>
          </div>

          <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '20px' }}>
            {cart.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#888' }}>السلة فارغة</p>
            ) : (
              cart.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid #eee',
                  padding: '10px 0'
                }}>
                  <div>
                    <h4 style={{ margin: 0 }}>{item.name}</h4>
                    <p style={{ color: 'var(--royal-saffron)', margin: '5px 0 0' }}>{item.price} د.م.</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} style={{
                      background: '#ddd',
                      border: 'none',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      cursor: 'pointer'
                    }}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{
                      background: '#ddd',
                      border: 'none',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      cursor: 'pointer'
                    }}>+</button>
                    <button onClick={() => removeFromCart(item.id)} style={{
                      background: '#991b1b',
                      border: 'none',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}>حذف</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div style={{ padding: '20px', borderTop: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <strong>الإجمالي:</strong>
                <strong style={{ color: 'var(--royal-saffron)' }}>{totalPrice.toLocaleString()} د.م.</strong>
              </div>
              <button
                onClick={sendWhatsAppOrder}
                style={{
                  width: '100%',
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                📱 تأكيد الطلب عبر واتساب
              </button>
              <button
                onClick={clearCart}
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: '#999',
                  border: 'none',
                  padding: '10px',
                  marginTop: '10px',
                  cursor: 'pointer'
                }}
              >
                تفريغ السلة
              </button>
            </div>
          )}
        </div>
      )}

      {/* الخلفية الداكنة */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1999
          }}
        />
      )}
    </>
  );
          }

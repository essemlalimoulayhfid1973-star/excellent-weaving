import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [shipping, setShipping] = useState('local');
  const [shippingCost, setShippingCost] = useState(50);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', address: '', city: '' });

  const shippingOptions = { local: { name: 'المغرب', cost: 50 }, france: { name: 'فرنسا', cost: 250 }, spain: { name: 'إسبانيا', cost: 250 }, usa: { name: 'أمريكا', cost: 350 }, gulf: { name: 'الخليج', cost: 300 } };

  useEffect(() => { const saved = localStorage.getItem('customerInfo'); if (saved) setCustomerInfo(JSON.parse(saved)); }, []);

  const finalTotal = totalPrice + shippingCost;
  const generateOrderNumber = () => `TISAJ-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const saveOrder = (orderData) => { const existing = JSON.parse(localStorage.getItem('tisaj_orders') || '[]'); existing.push(orderData); localStorage.setItem('tisaj_orders', JSON.stringify(existing)); };

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) { alert('السلة فارغة'); return; }
    if (!customerInfo.name || !customerInfo.phone) { alert('الرجاء إدخال الاسم ورقم الهاتف'); return; }
    localStorage.setItem('customerInfo', JSON.stringify(customerInfo));

    const orderNumber = generateOrderNumber();
    let message = `🧵 طلب جديد من تعاونية النسيج الممتاز\n━━━━━━━━━━━━━━━━━━━━━\n🆔 رقم الطلب: ${orderNumber}\n👤 الاسم: ${customerInfo.name}\n📞 الهاتف: ${customerInfo.phone}\n📍 العنوان: ${customerInfo.address || 'غير مدخل'}\n━━━━━━━━━━━━━━━━━━━━━\n🛒 المنتجات:\n`;
    cart.forEach(item => { message += `\n• ${item.name} (${item.quantity}) × ${item.price} = ${(item.quantity * item.price).toLocaleString()} د.م.`; });
    message += `\n━━━━━━━━━━━━━━━━━━━━━\n📦 الشحن: ${shippingCost} د.م.\n💰 الإجمالي: ${finalTotal.toLocaleString()} د.م.\n💳 الدفع: عند الاستلام\n━━━━━━━━━━━━━━━━━━━━━\n✨ نشكرك على ثقتك!`;

    saveOrder({ orderNumber, date: new Date().toISOString(), customer: customerInfo, items: cart, total: finalTotal });
    window.open(`https://wa.me/212639674902?text=${encodeURIComponent(message)}`, '_blank');
    clearCart(); setIsOpen(false);
    alert('✅ تم إرسال طلبك بنجاح!');
  };

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', bottom: '25px', right: '25px', background: 'var(--red-deep)', color: 'white', padding: '14px 24px', borderRadius: '50px', cursor: 'pointer', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold' }}>
        🛒 سلة الشراء {totalItems > 0 && <span style={{ background: 'var(--saffron)', borderRadius: '50%', padding: '2px 10px', fontSize: '14px' }}>{totalItems}</span>}
      </div>
      {isOpen && (
        <>
          <div onClick={() => setIsOpen(false)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1999 }} />
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto', background: 'white', borderRadius: '20px', zIndex: 2000 }}>
            <div style={{ background: 'var(--red-deep)', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', position: 'sticky', top: 0 }}>
              <h3>🛒 سلة التسوق</h3>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>✕</button>
            </div>
            <div style={{ padding: '20px' }}>
              {cart.length === 0 ? <p style={{ textAlign: 'center' }}>السلة فارغة</p> : (
                <>
                  {cart.map(item => (
                    <div key={item.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div><h4>{item.name}</h4><p style={{ color: 'var(--orange-terracotta)' }}>{item.price} د.م.</p></div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} style={{ background: '#ddd', border: 'none', width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer' }}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ background: '#ddd', border: 'none', width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer' }}>+</button>
                        <button onClick={() => removeFromCart(item.id)} style={{ background: 'var(--red-deep)', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>حذف</button>
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: '15px' }}>
                    <label style={{ fontWeight: 'bold' }}>📍 منطقة الشحن:</label>
                    <select value={shipping} onChange={(e) => { setShipping(e.target.value); setShippingCost(shippingOptions[e.target.value].cost); }} style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
                      <option value="local">🇲🇦 المغرب - 50 د.م.</option><option value="france">🇫🇷 فرنسا - 250 د.م.</option><option value="spain">🇪🇸 إسبانيا - 250 د.م.</option><option value="usa">🇺🇸 أمريكا - 350 د.م.</option><option value="gulf">🇦🇪 الخليج - 300 د.م.</option>
                    </select>
                    <h4>📋 بياناتك</h4>
                    <input type="text" placeholder="الاسم الكامل" value={customerInfo.name} onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})} style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '8px', border: '1px solid #ddd' }} />
                    <input type="tel" placeholder="رقم الهاتف" value={customerInfo.phone} onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})} style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '8px', border: '1px solid #ddd' }} />
                    <input type="text" placeholder="العنوان (اختياري)" value={customerInfo.address} onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})} style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '8px', border: '1px solid #ddd' }} />
                    <div style={{ background: '#F5E6D3', padding: '15px', borderRadius: '12px', margin: '15px 0' }}>
                      <div>💰 المجموع: {totalPrice.toLocaleString()} د.م.</div><div>📦 الشحن: {shippingCost} د.م.</div>
                      <div style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '10px' }}>💵 الإجمالي: {finalTotal.toLocaleString()} د.م.</div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '15px' }}>✓ 🔥 منتج محدود - اصلي ويدوي 100%<br />✓ 🚚 توصيل لجميع المدن المغربية والعالم<br />✓ 💰 الدفع عند الاستلام</div>
                    <button onClick={sendWhatsAppOrder} style={{ width: '100%', background: '#25D366', color: 'white', padding: '14px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>📱 تأكيد الطلب عبر واتساب</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
    }

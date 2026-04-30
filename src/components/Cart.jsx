import React from 'react';

function Cart({ cart, setCart, setView }) {
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const updateQty = (id, newQty) => {
    if (newQty < 1) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, qty: newQty } : item));
    }
  };

  const sendOrder = () => {
    if (cart.length === 0) return alert('السلة فارغة');
    const name = prompt('👤 اسمك:');
    const phone = prompt('📞 هاتفك:');
    if (!name || !phone) return;
    
    let message = `🧵 طلب جديد\n👤 ${name}\n📞 ${phone}\n🛒 المنتجات:\n`;
    cart.forEach(item => {
      message += `${item.name} x${item.qty} = ${item.price * item.qty} د.م.\n`;
    });
    message += `💰 الإجمالي: ${totalPrice} د.م.`;
    
    window.open(`https://wa.me/212639674902?text=${encodeURIComponent(message)}`, '_blank');
    setCart([]);
    setView('home');
  };

  return (
    <div className="container" style={{ padding: '30px 20px', maxWidth: '600px', margin: '40px auto', backgroundColor: 'white', borderRadius: '16px' }}>
      <h2>🛒 سلة التسوق</h2>
      {cart.length === 0 && <p>السلة فارغة</p>}
      {cart.map(item => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '10px 0' }}>
          <div><strong>{item.name}</strong><br />{item.price} د.م.</div>
          <div>
            <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
            <span style={{ margin: '0 10px' }}>{item.qty}</span>
            <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            <button onClick={() => updateQty(item.id, 0)} style={{ marginLeft: '10px', background: 'red', color: 'white' }}>🗑️</button>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>💰 الإجمالي: {totalPrice} د.م.</div>
          <button onClick={sendOrder} style={{ backgroundColor: '#25D366', color: 'white', padding: '10px 20px', marginTop: '20px', width: '100%' }}>📱 تأكيد الطلب</button>
          <button onClick={() => setView('home')} style={{ marginTop: '10px', width: '100%' }}>← العودة للتسوق</button>
        </>
      )}
    </div>
  );
}

export default Cart;

import React from 'react';

export default function WhatsAppButton() {
  const sendMessage = () => {
    const message = `🌿 السلام عليكم ورحمة الله وبركاتة 🌿

📋 مرحباً، أود الاستفسار عن منتجات تعاونية النسيج الممتاز - أمزميز الحوز.

أرجو التواصل معي لتزويدي بالمزيد من المعلومات عن الزرابي والمنتجات اليدوية.

✨ شكراً لكم.`;
    window.open(`https://wa.me/212639674902?text=${encodeURIComponent(message)}`, '_blank');
  };
  return (
    <button onClick={sendMessage} style={{ position: 'fixed', bottom: '25px', left: '25px', background: '#25D366', color: 'white', border: 'none', width: '60px', height: '60px', borderRadius: '50%', fontSize: '32px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', zIndex: 1000, transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>💬</button>
  );
}

import React from 'react';

export default function Home() {
  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', minHeight: '100vh', background: 'linear-gradient(135deg, #fef3c7, #fed7aa)', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: 'auto', background: 'white', borderRadius: '20px', padding: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#991b1b' }}>🧵 تعاونية النسيج الممتاز بأمزميز</h1>
        <p>موقعنا قيد الإعداد. سيتم إطلاق المتجر قريباً!</p>
        <p style={{ marginTop: '20px' }}>📞 للتواصل: <a href="https://wa.me/212639674902" style={{ color: '#25D366' }}>+212 639 674902</a></p>
      </div>
    </div>
  );
}

import React from 'react';

export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/212639674902?text=السلام%20عليكم%20أريد%20الاستفسار%20عن%20منتجات%20تعاونية%20النسيج%20الممتاز" target="_blank" rel="noopener noreferrer" style={{
      position: 'fixed', bottom: '25px', left: '25px', background: '#25D366', color: 'white',
      width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontSize: '32px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', zIndex: 1000
    }}>💬</a>
  );
}

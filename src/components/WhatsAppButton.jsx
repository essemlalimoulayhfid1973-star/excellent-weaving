import React from 'react';

function WhatsAppButton() {
  const phone = "212639674902";
  const message = "مرحباً، أريد الاستفسار عن منتجاتكم";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: 1000,
        fontSize: '30px',
        textDecoration: 'none'
      }}
    >
      💬
    </a>
  );
}

export default WhatsAppButton;

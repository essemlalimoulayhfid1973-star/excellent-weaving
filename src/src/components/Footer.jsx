import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--deep-indigo)',
      color: 'var(--atlas-sand)',
      padding: '40px 20px',
      textAlign: 'center',
      marginTop: '60px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginBottom: '30px'
        }}>
          <div>
            <h4 style={{ color: 'var(--royal-saffron)', marginBottom: '15px' }}>📍 تعاونية النسيج الممتاز</h4>
            <p>أمزميز، جبال الأطلس، المغرب</p>
            <p>منطقة الحوز</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--royal-saffron)', marginBottom: '15px' }}>📞 تواصل معنا</h4>
            <p>واتساب: <a href="https://wa.me/212639674902" style={{ color: 'var(--royal-saffron)', textDecoration: 'none' }}>+212 639 674902</a></p>
            <p>البريد الإلكتروني قريباً</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--royal-saffron)', marginBottom: '15px' }}>✈️ خدماتنا</h4>
            <p>شحن دولي لجميع المدن</p>
            <p>توصيل آمن وسريع</p>
            <p>الدفع عند الاستلام</p>
          </div>
        </div>
        <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '20px 0' }} />
        <p style={{ fontSize: '14px', opacity: 0.7 }}>
          © 2025 تعاونية النسيج الممتاز - Excellent Textile Cooperative Amizmiz
        </p>
        <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '10px' }}>
          صناعة يدوية أمازيغية أصلية - دعم الحرفيات من منطقة الحوز
        </p>
      </div>
    </footer>
  );
}

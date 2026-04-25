import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: '#1B263B',
      color: '#F5E6D3',
      padding: '50px 20px 30px',
      marginTop: '60px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Column 1 */}
          <div>
            <h4 style={{ color: '#C18E3A', marginBottom: '20px', fontSize: '20px' }}>🧵 تعاونية النسيج الممتاز</h4>
            <p style={{ marginBottom: '10px' }}>أمزميز، إقليم الحوز</p>
            <p style={{ marginBottom: '10px' }}>جهة مراكش-آسفي، المغرب</p>
            <p>📧 <a href="mailto:Fatihanasij000@gmail.com" style={{ color: '#C18E3A', textDecoration: 'none' }}>Fatihanasij000@gmail.com</a></p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 style={{ color: '#C18E3A', marginBottom: '20px' }}>📞 تواصل معنا</h4>
            <p style={{ marginBottom: '10px' }}>واتساب: <a href="https://wa.me/212639674902" style={{ color: '#C18E3A', textDecoration: 'none' }}>+212 639 674902</a></p>
            <p style={{ marginBottom: '10px' }}>البريد الإلكتروني: <a href="mailto:contact@excellentweaving.ma" style={{ color: '#C18E3A', textDecoration: 'none' }}>contact@excellentweaving.ma</a></p>
          </div>

          {/* Column 3 */}
          <div>
            <h4 style={{ color: '#C18E3A', marginBottom: '20px' }}>✈️ خدماتنا</h4>
            <p>✓ شحن دولي لجميع المدن</p>
            <p>✓ توصيل آمن وسريع</p>
            <p>✓ الدفع عند الاستلام</p>
            <p>✓ منتج أصلي 100%</p>
          </div>

          {/* Column 4 */}
          <div>
            <h4 style={{ color: '#C18E3A', marginBottom: '20px' }}>🌟 تابعونا</h4>
            <div style={{ display: 'flex', gap: '15px', fontSize: '24px' }}>
              <span style={{ cursor: 'pointer' }}>📘</span>
              <span style={{ cursor: 'pointer' }}>📸</span>
              <span style={{ cursor: 'pointer' }}>🎥</span>
              <span style={{ cursor: 'pointer' }}>🐦</span>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <p style={{ fontSize: '13px', opacity: 0.7 }}>
            © 2025 تعاونية النسيج الممتاز بأمزميز الحوز - جميع الحقوق محفوظة
          </p>
          <p style={{ fontSize: '11px', opacity: 0.5, marginTop: '10px' }}>
            أكثر من 500 امرأة حرفية من 20 قرية - صناعة يدوية أمازيغية أصلية
          </p>
        </div>
      </div>
    </footer>
  );
          }

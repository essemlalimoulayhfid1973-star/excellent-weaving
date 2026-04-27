import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Events() {
  return (
    <div dir="rtl" style={{ padding: '40px 20px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <Helmet><title>النشاطات والمشاركات - تعاونية النسيج الممتاز</title></Helmet>
      <h1 style={{ fontSize: '36px', color: '#8B0000', marginBottom: '30px' }}>🎪 النشاطات والمشاركات</h1>
      <div style={{ background: '#F5E6D3', padding: '30px', borderRadius: '20px' }}>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>📸 سيتم إضافة الصور والفيديوهات الحقيقية قريباً</p>
        <p style={{ color: '#666' }}>نعمل على توثيق جميع مشاركات التعاونية في المعارض والمهرجانات المحلية والدولية.</p>
        <div style={{ marginTop: '30px', color: '#888', fontSize: '14px' }}>🗓️ المعرض الدولي للصناعة التقليدية - مراكش 2024<br />🗓️ مهرجان الثقافات الأمازيغية - أمزميز<br />🗓️ زيارة وفود رسمية لدعم التعاونية</div>
      </div>
    </div>
  );
}

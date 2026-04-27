import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Awards() {
  return (
    <div dir="rtl" style={{ padding: '40px 20px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <Helmet><title>الشواهد والمكرمات - تعاونية النسيج الممتاز</title></Helmet>
      <h1 style={{ fontSize: '36px', color: '#8B0000', marginBottom: '30px' }}>🏆 الشواهد والمكرمات</h1>
      <div style={{ background: '#F5E6D3', padding: '30px', borderRadius: '20px' }}>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>📸 سيتم إضافة الشواهد والجوائز الحقيقية قريباً</p>
        <p style={{ color: '#666' }}>نعمل على توثيق جميع الشهادات والتكريمات الرسمية التي حصلت عليها تعاونية النسيج الممتاز.</p>
        <div style={{ marginTop: '30px', padding: '20px', background: 'white', borderRadius: '12px' }}>
          <h3>⭐ نبذة عنا</h3>
          <p style={{ lineHeight: '1.8' }}>تعاونية النسيج الممتاز بأمزميز هي تجسيد لصمود وإبداع نساء الحوز. منذ عام 2010، نعمل على الحفاظ على التراث الأمازيغي الأصيل وتطويره، وتمكين المرأة القروية اقتصادياً. بعد زلزال 2023، ازداد تصميمنا على إعادة البناء والاستمرار. شهاداتنا تقدير لجهد 500 امرأة حرفية من 20 قرية.</p>
        </div>
      </div>
    </div>
  );
}

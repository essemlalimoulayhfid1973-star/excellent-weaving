import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Story() {
  const { t } = useLanguage();

  return (
    <section id="story" style={{ padding: '60px 0', background: 'var(--atlas-sand)' }}>
      <div className="container">
        <h2 className="section-title">🏔️ {t('story.title')}</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* الجانب الأيسر - الإحصائيات */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '25px'
          }}>
            <div style={{
              background: 'white',
              padding: '30px',
              textAlign: 'center',
              borderRadius: '20px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>👩‍🦱</div>
              <h3 style={{ fontSize: '32px', color: 'var(--royal-saffron)' }}>500+</h3>
              <p>{t('story.women') || 'حرفية'}</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              textAlign: 'center',
              borderRadius: '20px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>🏘️</div>
              <h3 style={{ fontSize: '32px', color: 'var(--royal-saffron)' }}>20+</h3>
              <p>{t('story.villages') || 'قرية'}</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              textAlign: 'center',
              borderRadius: '20px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>🧵</div>
              <h3 style={{ fontSize: '32px', color: 'var(--royal-saffron)' }}>25+</h3>
              <p>{t('story.years') || 'سنة من التراث'}</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              textAlign: 'center',
              borderRadius: '20px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>🌍</div>
              <h3 style={{ fontSize: '32px', color: 'var(--royal-saffron)' }}>15+</h3>
              <p>دولة حول العالم</p>
            </div>
          </div>

          {/* الجانب الأيمن - النص */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '20px', lineHeight: '1.9' }}>
            <p style={{ fontSize: '18px', marginBottom: '20px', color: 'var(--deep-indigo)' }}>
              من أعماق جبال الأطلس، وتحديداً من منطقة الحوز ومدينة أمزميز، انطلقت قصتنا.
            </p>
            <p style={{ marginBottom: '15px' }}>
              نساء أمزميز هن حارسات التراث الأمازيغي الأصيل. كل زربية وكل قطعة نسيج تحمل في طياتها 
              قصة وحكاية وأحلام نساء قضين ساعات طويلة أمام النول لنسج أجمل المنتجات اليدوية.
            </p>
            <p style={{ marginBottom: '15px' }}>
              بعد زلزال الحوز، ازداد تصميم هؤلاء النساء على مواصلة المشوار. تعاونيتنا ليست مجرد مشروع تجاري، 
              بل هي رسالة حب وتراث وصمود. عندما تشتري منا، فأنت لا تشتري منتجاً فحسب، بل شريك في استمرارية حرفة عمرها قرون.
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--royal-saffron)', marginTop: '20px' }}>
              "من صنع بأيدي نساء أمزميز يصل إلى قلب كل بيت"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
                          }

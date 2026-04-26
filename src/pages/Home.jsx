import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import Story from '../components/Story';
import Testimonials from '../components/Testimonials';
import QualityBadge from '../components/QualityBadge';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>تعاونية النسيج الممتاز | أمزميز الحوز</title>
        <meta name="description" content="تعاونية النسيج الممتاز - أكثر من 500 امرأة حرفية من 20 قرية في جبال الأطلس" />
      </Helmet>
      
      <Hero />
      
      {/* Trust Bar - شريط الثقة */}
      <div style={{
        background: 'white',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        padding: '16px 0',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: '500',
          color: '#1B263B',
        }}>
          <div>✔️ 100% Handmade</div>
          <div>✔️ Natural Materials</div>
          <div>✔️ Women Artisans</div>
          <div>✔️ Authentic Origin</div>
        </div>
      </div>
      
      <Products />
      <Gallery />
      <Story />
      <Testimonials />
      <QualityBadge />
    </>
  );
      }

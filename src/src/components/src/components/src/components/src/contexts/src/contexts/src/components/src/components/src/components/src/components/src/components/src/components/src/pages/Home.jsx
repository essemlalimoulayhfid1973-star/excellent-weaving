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
        <title>تعاونية النسيج الممتاز | Excellent Weaving Cooperative Amizmiz</title>
        <meta name="description" content="أجود الزرابي والمنسوجات اليدوية من تعاونية النسيج الممتاز بأمزميز - أكثر من 500 حرفية و20 قرية في منطقة الحوز" />
        <meta name="keywords" content="زربية أمازيغية, نسيج يدوي, أمزميز, تعاونية, منتجات تقليدية مغربية" />
        <meta property="og:title" content="تعاونية النسيج الممتاز | أمزميز" />
        <meta property="og:description" content="روح الأطلس في كل خيط - صناعة يدوية أمازيغية أصلية" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://excellent-weaving.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Hero />
      <Products />
      <Gallery />
      <Story />
      <Testimonials />
      <QualityBadge />
    </>
  );
}

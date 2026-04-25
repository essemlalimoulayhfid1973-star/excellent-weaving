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
        <title>تعاونية النسيج الممتاز | أمزميز الحوز - زربية أمازيغية أصلية</title>
        <meta name="description" content="تعاونية النسيج الممتاز - أكثر من 500 امرأة حرفية من 20 قرية في جبال الأطلس. زربية بوشرويط، زربية الأطلس، منتجات جلدية، تمكين اقتصادي." />
        <meta name="keywords" content="زربية أمازيغية, تعاونية النسيج, أمزميز, الحوز, زربية بوشرويط, منتجات جلدية" />
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

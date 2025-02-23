'use client';

import BlogBanner from '@/components/BlogBanner';
import BlogContainer from '@/components/BlogContainer';
import BlogHero from '@/components/BlogHero';
import React from 'react';

const page = () => {
  return (
    <>
      <BlogHero />
      <BlogContainer />
      <BlogBanner />
    </>
  );
};

export default page;

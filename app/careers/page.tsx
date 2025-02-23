'use client';

import CareerHero from '@/components/CareerHero';
import HowToApply from '@/components/HowToApply';
import JobListings from '@/components/JobListings';
import React from 'react';

const page = () => {
  return (
    <>
      <CareerHero />
      <JobListings />
      <HowToApply />
    </>
  );
};

export default page;

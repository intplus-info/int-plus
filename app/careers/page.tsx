import CareerHero from '@/components/CareerHero';
import HowToApply from '@/components/HowToApply';
import JobListings from '@/components/JobListings';
import { JobListing } from '@/sanity.types';
import { sanityFetch } from '@/sanity/lib/client';
import { JOB_LISTING_QUERY } from '@/sanity/lib/query';
import React from 'react';


const page = async () => {
  const jobs = await sanityFetch({ query: JOB_LISTING_QUERY })
  const jobListings = jobs?.data as JobListing[];

  return (
    <>
      <CareerHero />
      <JobListings jobListing={jobListings} />
      <HowToApply />
    </>
  );
};

export default page;

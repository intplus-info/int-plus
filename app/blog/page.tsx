
import BlogBanner from '@/components/BlogBanner';
import BlogContainer, { Post } from '@/components/BlogContainer';
import BlogHero from '@/components/BlogHero';
// import { Post } from '@/sanity.types';
import { sanityFetch } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/lib/query';
import React from 'react';

const page = async () => {

  const blog = await sanityFetch({ query: POST_QUERY })
  const posts = blog?.data as Post[];

  return (
    <>
      <BlogHero />
      <BlogContainer posts={posts} />
      <BlogBanner />
    </>
  );
};

export default page;

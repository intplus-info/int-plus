import CTABanner from '@/components/cta-banner';
import ProjectShowcase from '@/components/project-showcase';
import { ProjectsHero } from '@/components/projects-hero';
import UpcomingProjects from '@/components/upcoming-projects';
import { Project } from '@/lib/projectData';
import { sanityFetch } from '@/sanity/lib/client';
import { PROJECT_SHOWCASE_QUERY } from '@/sanity/lib/query';
import React from 'react';



const Page = async () => {
  const projectsData = await sanityFetch({ query: PROJECT_SHOWCASE_QUERY });
  const projects = projectsData.data as Project[];

  return (
    <>
      <ProjectsHero />
      <ProjectShowcase projects={projects} />
      <UpcomingProjects />
      <CTABanner />
    </>
  );
};

export default Page;


import CTABanner from '@/components/cta-banner';
import ProjectShowcase from '@/components/project-showcase';
import { ProjectsHero } from '@/components/projects-hero';
import UpcomingProjects from '@/components/upcoming-projects';
import { Project } from '@/lib/projectData';
import { sanityFetch } from '@/sanity/lib/client';
import { PROJECT_SHOWCASE_QUERY, UPCOMING_PROJECTS_QUERY } from '@/sanity/lib/query';
import React from 'react';



const Page = async () => {
  const projectsData = await sanityFetch({ query: PROJECT_SHOWCASE_QUERY });
  const projects = projectsData.data as Project[];

  const upcomingProjectsData = await sanityFetch({ query: UPCOMING_PROJECTS_QUERY });
  const upcomingProjects = upcomingProjectsData.data as UpcomingProjects[];


  return (
    <>
      <ProjectsHero />
      <ProjectShowcase projects={projects} />
      <UpcomingProjects upcomingProjects={upcomingProjects} />
      <CTABanner />
    </>
  );
};

export default Page;


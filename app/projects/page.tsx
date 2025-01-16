'use client'

import CTABanner from '@/components/cta-banner'
import ProjectShowcase from '@/components/project-showcase'
import { ProjectsHero } from '@/components/projects-hero'
import UpcomingProjects from '@/components/upcoming-projects'
import React from 'react'

const page = () => {
  return (
    <>
      <ProjectsHero />
      <ProjectShowcase />
      <UpcomingProjects />
      <CTABanner />
    </>
  )
}

export default page
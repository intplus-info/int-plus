'use client'

import React from 'react'
import { motion } from "framer-motion"
import ProjectShowcaseCard from './ProjectShowcaseCard'
import { projects } from '@/lib/projectData'

const ProjectShowcase = () => {
  return (
    <section className="bg-background py-20 px-4">
      <motion.div
        className="mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="title mb-4">
          <span className="text-muted-foreground">Projects</span>{" "}
          <span className="text-white">Showcase</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we&apos;ve had with diverse clients across various industries. Let our work speak for itself.
        </p>
      </motion.div>

      <div className='flex flex-col gap-10'>
        {projects.map((project, index) => (
          <ProjectShowcaseCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectShowcase


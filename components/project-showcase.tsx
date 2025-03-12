'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FolderX } from 'lucide-react';
import ProjectShowcaseCard from './ProjectShowcaseCard';
import { ProjectsProp } from '@/lib/projectData';

const ProjectShowcase: React.FC<ProjectsProp> = ({ projects }) => {
  return (
    <section id="showcase" className="bg-background py-20 px-4 scroll-mt-10">
      <motion.div
        className="mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <h2 className="title mb-4">
          <span className="text-muted-foreground">Projects</span>{' '}
          <span className="text-white">Showcase</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Witness the brilliance of our previous projects. Our portfolio showcases the successful
          collaborations we&apos;ve had with diverse clients across various industries. Let our work
          speak for itself.
        </p>
      </motion.div>

      {projects.length > 0 ? (
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              id={`project-${index + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            >
              <ProjectShowcaseCard {...project} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-16 text-muted-foreground">
          <FolderX className="w-16 h-16 mb-4" />
          <p className="text-lg font-semibold">No projects available</p>
          <p className="text-sm">Check back later for our latest work.</p>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;

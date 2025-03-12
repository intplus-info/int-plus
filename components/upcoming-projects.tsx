'use client'

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react'; // Import all Lucide icons

interface UpcomingProjects {
  icon: string; // Now icon is a string name (e.g., "Code", "Rocket")
  title: string;
  category: string;
  completion: string;
  description: string;
}

interface UpcomingProjectsProp {
  upcomingProjects: UpcomingProjects[];
}

const UpcomingProjects: React.FC<UpcomingProjectsProp> = ({ upcomingProjects }) => {
  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-12 md:pb-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="title">
            Ongoing <span className="text-muted-foreground">Projects</span>
          </h2>
          <p className="mx-auto text-muted-foreground md:text-lg max-w-2xl xl:max-w-4xl">
            At our core, we are continuously working on exciting new ventures to push the boundaries
            of digital innovation and deliver exceptional solutions to our clients. While we are
            thrilled to share our upcoming projects with you, we understand the importance of
            confidentiality and safeguarding sensitive information. Therefore, we will provide a
            brief overview of the upcoming projects while keeping crucial details confidential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-[1000px] mx-auto">
          {upcomingProjects.map((project, index) => {
            // Get the correct Lucide icon
            const IconComponent = (LucideIcons as any)[project.icon] || LucideIcons.HelpCircle;

            return (
              <div
                key={index}
                className={`rounded-2xl p-6 transition-colors border 
                  ${index % 2 === 0
                    ? 'bg-gradient-to-br from-gray-800/20 via-background to-background'
                    : 'bg-gradient-to-bl from-gray-800/20 via-background to-background'
                  }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  {/* Dynamically render the Lucide icon */}
                  <div className="flex items-center justify-center bg-zinc-800 p-3 rounded-full w-12 h-12">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium">{project.title}</h3>
                </div>

                <div className="grid grid-cols-2 text-sm text-muted-foreground border border-muted-foreground/20 rounded-2xl mb-4 p-2">
                  <div className="p-4 border-muted-foreground/20">
                    <div className="mb-1 font-semibold">Category</div>
                    <div className="text-white">{project.category}</div>
                  </div>
                  {/* <div className="p-4 border-muted-foreground/20">
                    <div className="mb-1 font-semibold">Completion</div>
                    <div className="text-white">{project.completion}</div>
                  </div> */}
                </div>

                {/* <p className="text-sm text-muted-foreground">{project.description}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UpcomingProjects;

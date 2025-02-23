'use client';

import { ChevronDown, ChevronUp, ArrowRight, Box } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface JobListing {
  id: number;
  title: string;
  location: string;
  salary: string;
  experience: string;
  skills: string;
  description: string;
  responsibilities: string[];
  applicationDeadline: string;
}

const jobListings: JobListing[] = [
  {
    id: 1,
    title: 'Web Designer',
    location: 'Mumbai, India',
    salary: '$45,000 - $60,000 per year (based on experience)',
    experience: 'Minimum 1 year of professional web design experience',
    skills:
      'Proficiency in Adobe Creative Suite (Photoshop, Illustrator etc.), strong understanding of UI/UX design principles, responsive design expertise',
    description:
      'As a Web Designer at Int+, you will be responsible for creating visually stunning and user-friendly website designs. Working closely with our development and marketing teams, you will turn creative concepts into functional web interfaces that deliver exceptional user experiences. This role offers an opportunity to showcase your design expertise and contribute to a wide range of exciting projects for diverse clients.',
    responsibilities: [
      'Design and create visually appealing website layouts, graphics, and icons.',
      'Collaborate with UI/UX designers and front-end developers to ensure seamless integration of design elements.',
      'Conduct user research to understand user behaviors and preferences for optimized design decisions.',
      'Stay updated with industry trends and emerging design tools and techniques.',
      'Present design concepts and prototypes to internal teams and clients for feedback and approval.',
    ],
    applicationDeadline: '30th September 2023',
  },
  {
    id: 2,
    title: 'Mobile App Developer',
    location: 'On-Site - Mumbai, India',
    salary: '$55,000 - $75,000 per year (based on experience)',
    experience: 'Minimum 2 years of mobile app development experience',
    skills:
      'Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.',
    description:
      "Join our mobile development team to create innovative and user-friendly mobile applications. You'll work on cutting-edge projects and collaborate with talented developers.",
    responsibilities: [
      'Develop and maintain mobile applications for iOS or Android platforms',
      'Write clean, maintainable, and efficient code',
      'Collaborate with the design team to implement user-friendly interfaces',
      'Troubleshoot and debug applications',
      'Stay current with new mobile development technologies and trends',
    ],
    applicationDeadline: '15th October 2023',
  },
];

export default function JobListings() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJob = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-background py-16 md:py-24 container">
      <div className="mx-auto">
        <div className="mb-12 text-center">
          <h1 className="title mb-4">
            Job Listings <span className="text-muted-foreground title">at Int+</span>
          </h1>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            Explore our current job listings to discover exciting career opportunities that match
            your skills and interests. We offer positions in various digital disciplines including
            web design, mobile app development, digital marketing, project management, and more.
            Each role comes with competitive compensation packages including comprehensive health
            coverage and benefits. Whether you are an experienced professional or a fresh graduate,
            we welcome talent from all backgrounds to join our team.
          </p>
        </div>

        <div className="space-y-6">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-background border p-12 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-8">
                  <div className="relative  bg-gradient-to-r from-zinc-900 to-black rounded-full">
                    <div className="absolute inset-0" />
                    <div className="relative z-10 rounded-full border border-zinc-800 p-2">
                      <Box className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute inset-0 border border-zinc-800 rounded-full animate-ping opacity-20" />
                    <div className="absolute inset-[-12px] border border-zinc-800 rounded-full" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-muted-foreground">{job.location}</p>
                  </div>
                </div>
                <Button variant="outline" onClick={() => window.open('#', '_blank')}>
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4">💰</span>
                  <span>Salary - {job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4">⏱️</span>
                  <span>Experience - {job.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4">🛠️</span>
                  <span>Skills - {job.skills}</span>
                </div>
              </div>

              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-12 space-y-4">
                      <div className="border rounded-xl p-8">
                        <h3 className="text-lg font-semibold mb-4">Job Description</h3>
                        <p className="text-muted-foreground">{job.description}</p>
                        <div className="flex items-center gap-4 mt-4 border px-6 py-2 rounded-full w-fit">
                          <Image src="/chart.svg" width={18} height={18} alt="icon" />
                          <span className="text-muted-foreground">
                            Application Deadline: {job.applicationDeadline}
                          </span>
                        </div>
                      </div>

                      <div className="border rounded-xl p-8">
                        <h3 className="text-lg font-semibold mb-4">Responsibilities</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                          {job.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex w-full justify-end">
                <div className="flex gap-2 items-center mt-8 ml-auto">
                  <span className="hidden md:block">show {expandedJob ? 'less' : 'more'}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-gradient-to-br from-white/20 via-background/80 to-background rounded-full border"
                    onClick={() => toggleJob(job.id)}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-all ease-in-out duration-300 ${expandedJob ? 'rotate-180' : ''} `}
                    />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

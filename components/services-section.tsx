'use client';

import { Button } from '@/components/ui/button';
import {
  Code2,
  Smartphone,
  Globe,
  Building2,
  Users2,
  Workflow,
  LayoutGrid,
  GitBranch,
  Palette,
  Database,
  MonitorSmartphone,
  Binary,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: Code2,
    title: 'MVP Development',
    description:
      'We help startups validate their ideas and enter the market quickly with robust and user-friendly MVPs.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      "We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development.",
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'From simple websites to complex web applications, we create responsive and scalable solutions that provide exceptional user experiences.',
  },
  {
    icon: Building2,
    title: 'Enterprise Solutions',
    description:
      'Custom enterprise software that streamlines your operations, improves efficiency, and drives business growth.',
  },
  {
    icon: Users2,
    title: 'Dedicated Teams',
    description:
      'Access our pool of talented developers, designers, and project managers to augment your existing team or build one from scratch.',
  },
  {
    icon: Workflow,
    title: 'IT Consulting',
    description:
      'Strategic technology consulting to help you make informed decisions about your digital transformation journey.',
  },
  {
    icon: LayoutGrid,
    title: 'UI/UX Design',
    description:
      'User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.',
  },
  {
    icon: GitBranch,
    title: 'QA & Testing',
    description:
      'Comprehensive quality assurance and testing services to ensure your software performs flawlessly.',
  },
  {
    icon: Palette,
    title: 'AI Development',
    description:
      'Leverage the power of artificial intelligence to create smart solutions that give your business a competitive edge.',
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description:
      'Design and implementation of robust database solutions that ensure data integrity and optimal performance.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Custom Software Development',
    description:
      'Tailored software solutions designed to address your unique business challenges and requirements.',
  },
  {
    icon: Binary,
    title: 'DevOps & Cloud Development',
    description:
      'Streamline your development and deployment processes with our DevOps and cloud expertise.',
  },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="title">
            <span className="text-muted-foreground">Our</span>{' '}
            <span className="text-white">Services</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            We build scalable, robust solutions designed to evolve with your business. Let&apos;s
            craft software your customers will love and drive your company forward.
          </p>
        </motion.div>
        <div className="mx-auto max-w-6xl grid gap-8 mt-16 md:grid-cols-2 items-start">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="relative h-fit sm:h-[400px] flex items-center justify-center overflow-hidden group border border-b-0 bg-gradient-to-b from-background to-background dark:from-background dark:to-background rounded-[calc(1.5rem-1px)] p-px"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-background rounded-[calc(1.5rem-1px)] bg-[url('/bg-small.svg')]">
                <div className=" bg-gradient-to-b from-background/10 via-background/70 to-background h-full w-full absolute top-0 left-0 z-0" />
                <div className="flex flex-col items-center justify-center space-y-4 py-10 px-14 text-center h-full relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-black rounded-full animate-pulse group-hover:animate-none" />
                    <div className="relative z-10 rounded-full border border-zinc-800 p-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute inset-0 border border-zinc-800 rounded-full animate-ping opacity-20" />
                    <div className="absolute inset-[-10px] border border-zinc-800 rounded-full" />
                    <div className="absolute inset-[-18px] border border-zinc-800 rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-zinc-400">{service.description}</p>
                  <Button
                    variant="outline"
                    asChild
                    className="text-zinc-400 hover:text-white hover:bg-zinc-900"
                  >
                    <Link href="/services">
                      Learn More
                      <span className="ml-2">
                        <ArrowRight />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

const services = [
  {
    icon: Code2,
    title: 'Web Design',
    description:
      "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression on your audience. We blend creativity with functionality to deliver websites that showcase your brand's identity while ensuring seamless navigation and optimal user experience.",
  },
  {
    icon: Smartphone,
    title: 'Enterprise Solution',
    description:
      "We build scalable, robust enterprise software solutions designed to evolve with your business. Let's craft a tailored solution from scratch or modernize existing systems that your customers will love and that will drive your company forward.",
  },
  {
    icon: Globe,
    title: 'Mobile App Development',
    description:
      'With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.',
  },
  {
    icon: Building2,
    title: 'Digital Transformation Services',
    description:
      'Int+ is your reliable digital transformation partner. Leverage our expertise in using digital technologies to create new or modify existing business processes to meet changing market requirements.',
  },
];

const ServicesHero = () => {
  return (
    <div>
      <section className="w-full bg-background py-16">
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
          <div className="mx-auto grid gap-x-4 xl:gap-x-8 gap-y-4 xl:gap-y-16 mt-16 xl:grid-cols-2 items-start">
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="relative h-fit xl:h-[500px] flex items-center justify-center overflow-hidden group border border-b-0 bg-gradient-to-b from-background/10  to-background dark:from-background dark:to-background rounded-[calc(1.5rem-1px)] p-px"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="h-full  rounded-[calc(1.5rem-1px)] bg-[url('/bg-small.svg')]">
                  <div className=" bg-gradient-to-b from-background/10 via-background/40   to-background h-full w-full absolute top-0 left-0 z-10" />
                  <div className="flex flex-col items-center justify-between space-y-4 py-10 px-8 sm:px-14 text-center h-full relative z-10">
                    <div className="relative mt-10">
                      {/* <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-black rounded-full animate-pulse group-hover:animate-none" /> */}
                      <div className="relative z-10 rounded-full border border-zinc-800 p-4">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute inset-0 border border-zinc-800 rounded-full animate-ping opacity-20" />
                      <div className="absolute inset-[-10px] border border-zinc-800 rounded-full" />
                      <div className="absolute inset-[-18px] border border-zinc-800 rounded-full" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-zinc-400">{service.description}</p>
                    <div className="w-full flex items-center justify-center xl:justify-start mt-auto">
                      <Button variant="outline" className="h-[56px] w-[171px] group">
                        Learn More
                        <span className="ml-2 flex items-center justify-center p-4 w-[54px] h-[38px] rounded-full bg-[#1A1A1A] group-hover:translate-x-[8px] transition-all duration-300 ease-in-out">
                          <ArrowRight size={12} strokeWidth={2} />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesHero;

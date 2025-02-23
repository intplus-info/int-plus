'use client';

import { MonitorSmartphone, Laptop, Phone, BarChart, LucidePhone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as React from 'react';

const services = [
  {
    id: 'web-design',
    icon: <MonitorSmartphone className="h-5 w-5" />,
    title: 'Web Design',
    description:
      'Web Design is the art and science of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At Int+, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website that not only looks great but also drives results.',
    keyFeatures: [
      {
        title: 'Customized Design',
        description:
          'We craft bespoke solutions tailored to match your brand personality and industry.',
      },
      {
        title: 'Responsive Design',
        description:
          'Ensuring your website adapts seamlessly to different devices and screen sizes.',
      },
      {
        title: 'User-Centric Approach',
        description: 'Prioritizing ease of navigation and intuitive user experience.',
      },
      {
        title: 'Visual Elements',
        description:
          'Incorporating engaging visuals, graphics, and animations to enhance the user of interest.',
      },
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description:
          'We start by understanding your business, target audience, and project goals. This stage involves market research and developing a comprehensive strategy.',
      },
      {
        title: 'Wireframing & Prototyping',
        description:
          "Creating wireframes and interactive prototypes to visualize the website's layout and user flow.",
      },
      {
        title: 'Design & Development',
        description:
          'Once the wireframes are approved, our designers start working on the visual elements while our developers bring the design to life.',
      },
      {
        title: 'Testing & Review',
        description:
          'We conduct thorough testing to ensure the website functions flawlessly across different browsers and devices. Client feedback is incorporated at this stage.',
      },
    ],
  },
  {
    id: 'web-development',
    icon: <Laptop className="h-5 w-5" />,
    title: 'Web Development',
    description:
      'End-to-end web development services using cutting-edge technologies and best practices. We create robust and scalable websites and web applications that deliver seamless user experiences across devices.',
    keyFeatures: [
      {
        title: 'Full-Stack Development',
        description:
          'Expert development of both front-end and back-end solutions to ensure a comprehensive web application.',
      },
      {
        title: 'Scalable Solutions',
        description:
          'Building web solutions that grow with your business and can handle increased traffic and demands.',
      },
      {
        title: 'SEO Optimized',
        description:
          'Ensuring your website is optimized for search engines to drive organic traffic and improve rankings.',
      },
      {
        title: 'Cross-Browser Compatibility',
        description:
          'Ensuring your web applications work seamlessly across different browsers and platforms.',
      },
    ],
    process: [
      {
        title: 'Requirements Gathering',
        description:
          'Understanding your project needs and objectives to design a customized solution.',
      },
      {
        title: 'Development & Testing',
        description:
          'Our developers work on building the application while ensuring rigorous testing for functionality.',
      },
      {
        title: 'Deployment & Launch',
        description:
          'Once developed, we deploy your application on production servers with careful monitoring.',
      },
      {
        title: 'Ongoing Support',
        description:
          'We provide continuous maintenance and updates to ensure your site’s performance and security.',
      },
    ],
  },
  {
    id: 'mobile-app',
    icon: <LucidePhone className="h-5 w-5" />,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile application development for iOS and Android. We build innovative and user-friendly mobile apps that engage users and provide exceptional experiences.',
    keyFeatures: [
      {
        title: 'Native & Cross-Platform',
        description:
          'We create both native and cross-platform apps to meet the needs of different mobile ecosystems.',
      },
      {
        title: 'App Optimization',
        description: 'Ensuring apps are optimized for performance, speed, and battery efficiency.',
      },
      {
        title: 'Push Notifications',
        description: 'Engage users with targeted push notifications and in-app messaging.',
      },
      {
        title: 'App Security',
        description:
          'Implementing advanced security features to protect user data and maintain privacy.',
      },
    ],
    process: [
      {
        title: 'Concept & Ideation',
        description: 'We begin by understanding the app concept and market needs.',
      },
      {
        title: 'Design & Prototyping',
        description: 'Creating user-friendly design and interactive prototypes.',
      },
      {
        title: 'Development & Testing',
        description: 'Building the app with the latest technology, followed by rigorous testing.',
      },
      {
        title: 'Launch & Support',
        description:
          'Launching the app on the App Store and Google Play, followed by continuous updates and support.',
      },
    ],
  },
  {
    id: 'digital-transformation',
    icon: <BarChart className="h-5 w-5" />,
    title: 'Digital Transformation Services',
    description:
      'Comprehensive digital transformation solutions to modernize your business operations. We help organizations leverage technology to streamline workflows, improve customer experiences, and drive innovation.',
    keyFeatures: [
      {
        title: 'Business Process Automation',
        description:
          'We automate manual business processes to increase efficiency and reduce human error.',
      },
      {
        title: 'Cloud Solutions',
        description:
          'Helping businesses migrate to the cloud for enhanced scalability and collaboration.',
      },
      {
        title: 'Data Analytics',
        description: 'Turning raw data into actionable insights to improve decision-making.',
      },
      {
        title: 'Change Management',
        description:
          'Ensuring smooth adoption of digital transformation through proper planning and training.',
      },
    ],
    process: [
      {
        title: 'Assessment & Strategy',
        description:
          'We assess your current operations and develop a tailored digital transformation strategy.',
      },
      {
        title: 'Implementation & Integration',
        description:
          'Implementing the necessary systems and tools and integrating them with existing business operations.',
      },
      {
        title: 'Training & Support',
        description:
          'Providing training to employees and ongoing support to ensure the transition is smooth.',
      },
      {
        title: 'Optimization & Growth',
        description:
          'Continuously optimizing systems for better performance and scalability as your business grows.',
      },
    ],
  },
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = React.useState('web-design');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="w-full py-12 md:py-24 container mx-auto text-muted-foreground">
      <motion.div
        className="flex flex-col items-center justify-center space-y-4 text-center mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <h2 className="title">
          <span className="text-muted-foreground">Categories Of</span>{' '}
          <span className="text-white">Services</span>
        </h2>
      </motion.div>
      <Tabs
        defaultValue="web-design"
        className="w-full flex flex-col md:flex-row gap-x-10"
        onValueChange={handleTabChange}
      >
        <div className="md:w-full max-w-[300px] md:sticky md:top-28 md:self-start">
          <TabsList className="grid grid-cols-1 gap-2 bg-transparent p-0 w-full h-fit">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-secondary/50 data-[state=active]:text-secondary-foreground flex items-center justify-start gap-2 w-full p-4 h-auto border text-left"
              >
                {service.icon}
                <span className="text-sm font-medium">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="flex-grow" ref={contentRef}>
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="p-0 mt-0">
              <Card className="bg-background border-none shadow-none p-0">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                {service.keyFeatures && (
                  <CardContent className="space-y-6 p-0 mt-8 pb-10">
                    <div className="border p-4 lg:p-8 rounded-md">
                      <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                      <div className="grid md:grid-cols-2 gap-x-10 gap-y-20 relative">
                        <div className="absolute border-t w-full top-1/2" />
                        {service.keyFeatures.map((feature, index) => (
                          <div
                            key={index}
                            className={`relative space-y-2 border-r pr-8 ${index === 1 || index === 3 ? 'border-r-0 pr-0' : ''}`}
                          >
                            <h4 className="font-medium text-[#CCCCCC]">{feature.title}</h4>
                            <p className="text-sm">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border p-4 lg:p-8 rounded-md">
                      <h3 className="text-lg font-semibold mb-4">Design Process</h3>
                      <div className="grid md:grid-cols-2 gap-x-10 gap-y-20 relative">
                        <div className="absolute border-t w-full top-1/2" />
                        {service.process.map((step, index) => (
                          <div
                            key={index}
                            className={`relative space-y-2 border-r pr-8 ${index === 1 || index === 3 ? 'border-r-0 pr-0' : ''}`}
                          >
                            <h4 className="font-medium text-[#CCCCCC]">{step.title}</h4>
                            <p className="text-sm text-secondary-foreground/70">
                              {step.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

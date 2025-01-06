"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Sparkles, LayoutGrid, Lightbulb, Users2, Target, ArrowRight, icons } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: '/icons/team.svg',
    title: "Dedicated Project Teams",
    description:
      "We provide dedicated teams of expert developers who work exclusively on your project, ensuring efficient and timely delivery.",
  },
  {
    icon: '/icons/agile.svg',
    title: "Agile Methodology",
    description:
      "We use Agile methodologies to ensure flexibility, transparency, and continuous improvement throughout the development process.",
  },
  {
    icon: '/icons/solutions.svg',
    title: "Tailored Business Solutions",
    description:
      "We have a proven track record of delivering successful software solutions across various industries.",
  },
  {
    icon: '/icons/innovation.svg',
    title: "Innovations",
    description:
      "We leverage the latest technologies and methodologies to create cutting-edge applications that meet your specific needs.",
  },
  {
    icon: '/icons/collaboration.svg',
    title: "Collaborations",
    description:
      "We believe working closely with you helps to understand your vision and goals, ensuring that our solution perfectly aligns with your business objectives.",
  },
  {
    icon: '/icons/quality.svg',
    title: "Quality",
    description:
      "We are committed to delivering high-quality software that is reliable, scalable, and secure.",
  },
];

export function ReasonsSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Title Section */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="title text-white">Reasons to Choose Int+ for</h2>
          <p className="title text-muted-foreground">Your Technological Journey</p>
          <p className="mx-auto text-muted-foreground md:text-lg max-w-2xl xl:max-w-full">
            At Int+, we combine technical expertise with a deep understanding of your business needs to deliver <br className="hidden xl:block" />
            software solutions that make a real difference. Here&apos;s why you should choose us:
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="mx-auto grid mt-16 md:grid-cols-2 lg:gap-y-10 lg:grid-cols-3 items-start relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <div className="hidden lg:block border-t w-full pb-8 absolute top-[50%]" />
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="h-[390px] border-b last:border-b-0 md:border-b-0 md:border-r md:[&:nth-child(3)]:border-r-0 md:[&:nth-child(5)]:border-r-0 lg:[&:nth-child(3)]:border-r lg:[&:nth-child(4)]:border-r-0 lg:[&:nth-child(5)]:border-r lg:[&:nth-child(7)]:border-0"
            >
              <div className="flex flex-col items-center space-y-4 justify-between p-6 text-center h-full">
                <div className="rounded-full border-8 relative size-20 flex items-center justify-center bg-[url('/bg-tiny.svg')]">
                  <Image src={reason.icon} width={32} height={32} alt={reason.title} />
                </div>
                <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
                <Button variant="outline" className="h-[68px] w-[203px] group">
                  Learn More
                  <span className="ml-2 flex items-center justify-center p-4 w-[54px] h-[38px] rounded-full bg-[#1A1A1A] group-hover:translate-x-[8px] transition-all duration-300 ease-in-out">
                    <ArrowRight size={12} strokeWidth={2} />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

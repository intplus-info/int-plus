"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: '/icons/team.svg',
    title: "Strategic Planning",
    description:
      "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.",
  },
  {
    icon: '/icons/agile.svg',
    title: "Customized Solutions",
    description:
      "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions that perfectly align with our clients' brand identities.",
  },
  {
    icon: '/icons/solutions.svg',
    title: "Tailored Business Solutions",
    description:
      "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.",
  },
];


const reasons2 = [
  {
    icon: '/icons/team.svg',
    title: "Cutting-Edge Technologies",
    description:
      "We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.",
  },
  {
    icon: '/icons/agile.svg',
    title: "Timely Delivery",
    description:
      "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.",
  },
];


export function ProjectsHero() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container xl:px-0">
        {/* Title Section */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="title text-white">Key Features {" "}
            <span className="title text-muted-foreground">of Our Projects </span>
          </h2>
          <p className="mx-auto text-muted-foreground md:text-lg max-w-2xl xl:max-w-full">
            Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, <br className="hidden xl:block" /> and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="mx-auto grid mt-16 md:grid-cols-1 gap-y-10 lg:grid-cols-3 items-start relative"
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
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="h-fit md:border-r last:border-r-0"
            >
              <div className="flex flex-col items-center space-y-4 justify-between px-10 text-center h-full">
                <div className="rounded-full border-8 relative size-20 flex items-center justify-center bg-[url('/bg-tiny.svg')]">
                  <Image src={reason.icon} width={32} height={32} alt={reason.title} />
                </div>
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="hidden xl:block border-t w-full my-8" />

        <motion.div
          className="mx-auto grid mt-10 md:grid-cols-1 gap-y-10 lg:grid-cols-2 items-start relative"
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
          {reasons2.map((reason) => (
            <motion.div
              key={reason.title}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="h-fit md:border-r last:border-r-0"
            >
              <div className="flex flex-col items-center space-y-4 justify-between px-10 text-center h-full">
                <div className="rounded-full border-8 relative size-20 flex items-center justify-center bg-[url('/bg-tiny.svg')]">
                  <Image src={reason.icon} width={32} height={32} alt={reason.title} />
                </div>
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    image: "/project-1.svg",
    title: "Innovative Digital Retail Platform",
    category: "SaaS Web Development",
    date: "January 2022",
    description:
      "We built a groundbreaking e-commerce platform for our client, that seamlessly changes the digital selling narrative worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
  },
  {
    image: "/project-2.svg",
    title: "Enhanced Logistics Solutions for Small and Medium DIspatch Businesses",
    category: "SaaS Web Development",
    date: "March 2022",
    description:
      "Our client came to us with an idea to disrupt dispatch/courier services with technology in Nigeria. With a map and secure payment gateway, building 4 intuitive user interface apps.",
  },
]

export function WorksSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="title">
            <span className="text-muted-foreground">Our</span>{" "}
            <span className="text-white">Works</span>
          </h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground">
            Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we&apos;ve had with
            diverse clients across various industries. Let our work speak for itself.
          </p>
        </motion.div>

        <div className="mx-auto grid gap-8 mt-16 lg:grid-cols-2 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/60 to-background rounded-3xl border-none  shadow-none group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-4 md:p-8 relative">
                <div className="relative  bg-[#1A1A1A] rounded-[17px]  bg-[url('/bg-small.svg')] w-full h-[400px] flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={220}
                    height={220}
                    className="opacity-15 rounded-[17px]"
                  />
                  <div className="absolute -bottom-5 w-full flex items-center justify-center">
                    <Button
                      variant="outline"
                      size={"lg"}
                      asChild
                      className="mx-auto"
                    >
                      <Link href={index === 0 ? "projects/#project-1" : "projects/#project-2"}>
                        View Projects Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="mt-10 space-y-4">
                  <span className="h-[300px] w-full bg-red-400">
                    <h3 className="text-lg md:text-xl font-bold text-white min-h-[70px]">{project.title}</h3>
                  </span>
                  <div className="flex flex-col md:flex-row text-white md:items-center md:justify-between text-sm">
                    <p className="text-white">Category: {project.category}</p>
                    <p>{project.date}</p>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <Link href='/projects/#showcase'>
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


"use client"

import { ChevronDown, ArrowRight, Box } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { JobListing } from "@/sanity.types"
import Link from "next/link"

interface JobListingProps {
  jobListing: JobListing[]
}

export default function JobListings({ jobListing }: JobListingProps) {
  const [expandedJob, setExpandedJob] = useState<string | null>(null)

  const toggleJob = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId)
  }

  return (
    <div className="min-h-screen bg-background py-16 md:py-24 container">
      {!jobListing?.length ? (
        <div className="flex flex-col items-center justify-center space-y-4 py-32 px-4">
          <div className="relative bg-gradient-to-r from-zinc-900 to-black rounded-full p-8">
            <div className="relative z-10 rounded-full border-2 border-zinc-800">
              <Box className="h-12 w-12 text-zinc-400" />
            </div>
            <div className="absolute inset-0 border border-zinc-800 rounded-full animate-ping opacity-20" />
            <div className="absolute inset-[-12px] border border-zinc-800 rounded-full" />
          </div>
          <h2 className="text-2xl font-semibold text-center">No Job Listings Available</h2>
          <p className="text-muted-foreground text-center max-w-md">
            There are currently no open positions. Please check back later or subscribe to our newsletter for updates.
          </p>
          <Button variant="outline" className="mt-4">
            Subscribe to Updates
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="mx-auto">
          <div className="mb-12 text-center">
            <h1 className="title mb-4">
              Job Listings <span className="text-muted-foreground title">at Int+</span>
            </h1>
            <p className="text-muted-foreground max-w-4xl mx-auto">
              Explore our current job listings to discover exciting career opportunities that match your skills and
              interests. We offer positions in various digital disciplines including web design, mobile app development,
              digital marketing, project management, and more. Each role comes with competitive compensation packages
              including comprehensive health coverage and benefits. Whether you are an experienced professional or a
              fresh graduate, we welcome talent from all backgrounds to join our team.
            </p>
          </div>

          <div className="space-y-6">
            {jobListing.map((job) => (
              <div key={job._id} className="bg-background border p-12 rounded-lg">
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
                  <Button variant="outline" asChild>
                    <Link href={job.applicationLink || "#"} target="_blank" rel="noopener noreferrer">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
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
                  {expandedJob === job._id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
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
                            {job.responsibilities?.map((responsibility, index) => (
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
                    <span className="hidden md:block">show {expandedJob ? "less" : "more"}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-gradient-to-br from-white/20 via-background/80 to-background rounded-full border"
                      onClick={() => toggleJob(job._id)}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-all ease-in-out duration-300 ${expandedJob ? "rotate-180" : ""} `}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


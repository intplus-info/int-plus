"use client"

import { Button } from "@/components/ui/button"
import { Users, Sparkles, LayoutGrid, Lightbulb, Users2, Target, ArrowRight } from 'lucide-react'
import Image from "next/image"

const reasons = [
  {
    icon: Users,
    title: "Dedicated Project Teams",
    description:
      "We provide dedicated teams of expert developers who work exclusively on your project, ensuring efficient and timely delivery.",
  },
  {
    icon: Sparkles,
    title: "Agile Methodology",
    description:
      "We use Agile methodologies to ensure flexibility, transparency, and continuous improvement throughout the development process.",
  },
  {
    icon: LayoutGrid,
    title: "Tailored Business Solutions",
    description:
      "We have a proven track record of delivering successful software solutions across various industries.",
  },
  {
    icon: Lightbulb,
    title: "Innovations",
    description:
      "We leverage the latest technologies and methodologies to create cutting-edge applications that meet your specific needs.",
  },
  {
    icon: Users2,
    title: "Collaborations",
    description:
      "We believe working closely with you helps to understand your vision and goals, ensuring that our solution perfectly aligns with your business objectives.",
  },
  {
    icon: Target,
    title: "Quality",
    description:
      "We are committed to delivering high-quality software that is reliable, scalable, and secure.",
  },
]

export function ReasonsSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="title text-white">
            Reasons to Choose Int+ for
          </h2>
          <p className="title text-zinc-500">
            Your Technological Journey
          </p>
          <p className="mx-auto text-muted-foreground  md:text-lg max-w-2xl xl:max-w-full">
            At Int+, we combine technical expertise with a deep understanding of your business needs to deliver <br className="hidden xl:block" />
            software solutions that make a real difference. Here's why you should choose us:
          </p>
        </div>
        <div className="mx-auto grid mt-16 md:grid-cols-2 lg:gap-y-10 lg:grid-cols-3 items-start relative">
          <div className="hidden lg:block border-t w-full pb-8 absolute top-[50%]" />
          {reasons.map((reason) => (
            <div key={reason.title} className="h-[390px] border-b last:border-b-0 md:border-b-0 md:border-r md:[&:nth-child(3)]:border-r-0 md:[&:nth-child(5)]:border-r-0 lg:[&:nth-child(3)]:border-r lg:[&:nth-child(4)]:border-r-0 lg:[&:nth-child(5)]:border-r lg:[&:nth-child(7)]:border-0">
              <div className="flex flex-col items-center space-y-4 justify-between p-6 text-center h-full">
                <div className="rounded-full border-8 p-4">
                  <Image
                    src='/icons/team.svg'
                    width={36}
                    height={36}
                    alt={reason.title}
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
                <Button
                  variant="outline"
                  className="h-[68px] w-[203px] group"
                >
                  Learn More
                  <span className="ml-2 flex items-center justify-center p-4 w-[54px] h-[38px] rounded-full bg-[#1A1A1A] group-hover:translate-x-[8px] transition-all duration-300 ease-in-out">
                    <ArrowRight size={12} strokeWidth={2} />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


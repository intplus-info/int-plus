'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from 'embla-carousel-react'

export function HeroSection() {
  const industries = [
    { image: "/cards/card-1.svg", name: "Fintech" },
    { image: "/cards/card-2.svg", name: "Construction" },
    { image: "/cards/card-3.svg", name: "Logistics & Transportation" },
    { image: "/cards/card-4.svg", name: "Travel & Hospitality" },
    { image: "/cards/card-5.svg", name: "Edtech" },
    { image: "/cards/card-6.svg", name: "Real Estate" },
    { image: "/cards/card-7.svg", name: "Digital Retail" },
    { image: "/cards/card-8.svg", name: "Oil and Gas" },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  return (
    <section className="lg:min-h-[70vh] xl:min-h-screen flex items-center justify-center py-10 bg-background md:py-20 bg-[url('/bg-newer.svg')]">
      <motion.div
        className="bg-gradient-to-br from-background/50 via-background/30 to-background h-full w-full absolute top-0 left-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="flex flex-col items-center text-center space-y-8 w-full pt-20 z-20">
        <motion.div
          className="space-y-4 w-full container px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-[34px] md:text-5xl xl:text-6xl font-semibold leading-[44px] xl:tracking-tighter">
            Software Solutions{" "}
            <br className="xl:hidden" />
            <span className="text-muted-foreground">For Your Business Growth</span>
          </h1>
          <p className="mx-auto text-muted-foreground pt-8 leading-[21px] max-w-[800px] xl:max-w-full xl:text-lg">
            Your trusted partner for cutting-edge software solutions. Whether you&apos;re a startup looking to launch your MVP or an enterprise <br className="hidden xl:block" /> seeking to optimize your operations, our team of expert developers, designers, and consultants guides you every step of the way.
          </p>
        </motion.div>

        <motion.div
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Carousel for mobile and tablet */}
          <div className="xl:hidden relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {industries.map((industry) => (
                  <motion.div key={industry.name} variants={fadeIn}>
                    <Card className="m-2 overflow-hidden w-fit rounded-[5px] border-none text-muted-foreground bg-[#616161]">
                      <CardContent className="p-0 h-[171px] w-[117px] md:w-[120px] flex flex-col items-center justify-center relative text-center">
                        <div className="relative size-[55px] mb-10">
                          <Image
                            src={industry.image}
                            alt={industry.name}
                            fill
                            className="object-cover opacity-40"
                          />
                        </div>
                        <span className="flex items-center absolute bottom-7 h-10 w-full">
                          <p className="text-sm mt-4 text-white/40 w-full bottom-10">{industry.name}</p>
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Original layout for desktop */}
          <div className="hidden xl:flex items-center gap-8 w-fit mx-auto">
            {industries.map((industry) => (
              <motion.div key={industry.name} variants={fadeIn}>
                <Card className="overflow-hidden w-fit rounded-[5px] border-none text-muted-foreground bg-[#616161]">
                  <CardContent className="p-0 w-[120px] h-[171px] flex flex-col items-center justify-center relative text-center">
                    <div className="relative size-[55px] mb-10">
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        fill
                        className="object-cover opacity-40"
                      />
                    </div>
                    <span className="flex items-center absolute bottom-7 h-10 w-full">
                      <p className="text-sm mt-4 text-white/40 w-full bottom-10">{industry.name}</p>
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <Button size="lg" className="min-w-[200px]">
              Book Free Consultation
            </Button>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

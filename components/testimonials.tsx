'use client'

import { InfiniteMovingCards } from "./ui/nfinite-moving-cards"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "We were incredibly impressed with's ability to deliver our project on time and within budget. They were meticulous in their planning and execution, and they kept us informed every step of the way. The final product exceeded our expectations, and we're already seeing a positive impact on our business.",
    name: "CEO",
    title: "Cashbridge MFB",
    social: "twitter",
    image: '/images/user.jpg'
  },
  {
    quote:
      " has a deep understanding of. Their team was able to translate our complex requirements into a user-friendly and efficient software solution. Their expertise was invaluable in helping us achieve our goals.",
    name: "Business Manager",
    title: "Storefront",
    social: "twitter",
    image: '/images/user.jpg'
  },
  {
    quote:
      "Working with was a true partnership. They were always available to answer our questions, provide updates, and incorporate our feedback. Their communication and collaboration skills were exceptional, and we felt like we were part of the team.",
    name: "Project Manager",
    title: "KoddFarms",
    social: "twitter",
    image: '/images/user.jpg'
  },
  {
    quote:
      "We faced several unexpected challenges during our project but were able to find creative solutions to every obstacle. Their problem-solving abilities and dedication to our success were truly impressive.",
    name: "CEO",
    title: "Paystride",
    social: "twitter",
    image: '/images/user.jpg'
  },
];

export default function Testimonials() {

  return (
    <section className="bg-background py-20 px-4">
      <motion.div
        className=" mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="title mb-4">
          <span className="text-muted-foreground">Our</span>{" "}
          <span className="text-white">Testimonials</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Don&apos;t just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results.
        </p>
      </motion.div>

      <div className="flex items-center justify-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  )
}
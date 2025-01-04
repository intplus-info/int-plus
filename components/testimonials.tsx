'use client'

import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { InfiniteMovingCards } from "./ui/nfinite-moving-cards"
import { motion } from "framer-motion"


const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    social: "twitter",
    image: '/images/user.jpg'
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    social: "twitter",
    image: '/images/user.jpg'
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    social: "twitter",
    image: '/images/user.jpg'
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    social: "twitter",
    image: '/images/user.jpg'
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
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


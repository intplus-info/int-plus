'use client'

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Twitter } from 'lucide-react'
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { InfiniteMovingCards } from "./ui/nfinite-moving-cards"

interface Testimonial {
  content: string
  author: {
    name: string
    position: string
    company: string
    image: string
  }
}

// const testimonials: Testimonial[] = [
//   {
//     content: "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
//     author: {
//       name: "Bidemi Olaiya",
//       position: "Managing Partner",
//       company: "KoddFarms",
//       image: "/placeholder.svg?height=48&width=48"
//     }
//   },
//   {
//     content: "The mobile app Int+ developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
//     author: {
//       name: "Ogaga Kane",
//       position: "CEO",
//       company: "Airpocket",
//       image: "/placeholder.svg?height=48&width=48"
//     }
//   },
//   {
//     content: "Int+ transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our needs made the entire process smooth and hassle-free.",
//     author: {
//       name: "Kayode Alayi",
//       position: "CEO",
//       company: "Xperience Solutions",
//       image: "/placeholder.svg?height=48&width=48"
//     }
//   },
//   {
//     content: "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
//     author: {
//       name: "Bidemi Olaiya",
//       position: "Managing Partner",
//       company: "KoddFarms",
//       image: "/placeholder.svg?height=48&width=48"
//     }
//   },
//   {
//     content: "The mobile app Int+ developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
//     author: {
//       name: "Ogaga Kane",
//       position: "CEO",
//       company: "Airpocket",
//       image: "/placeholder.svg?height=48&width=48"
//     }
//   },
//   {
//     content: "Int+ transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our needs made the entire process smooth and hassle-free.",
//     author: {
//       name: "Kayode Alayi",
//       position: "CEO",
//       company: "Xperience Solutions",
//       image: "/placeholder.svg?height=48&width=48"
//     }
//   },
//   {
//     content: "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
//     author: {
//       name: "Bidemi Olaiya",
//       position: "Managing Partner",
//       company: "KoddFarms",
//       image: "/placeholder.svg?height=48&width=48"
//     }
//   },
//   {
//     content: "The mobile app Int+ developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
//     author: {
//       name: "Ogaga Kane",
//       position: "CEO",
//       company: "Airpocket",
//       image: "/placeholder.svg?height=48&width=48"
//     }
//   },
//   {
//     content: "Int+ transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our needs made the entire process smooth and hassle-free.",
//     author: {
//       name: "Kayode Alayi",
//       position: "CEO",
//       company: "Xperience Solutions",
//       image: "/placeholder.svg?height=48&width=48"
//     }
//   }

// ]

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
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  return (
    <section className="bg-background py-20 px-4">
      <div className=" mx-auto text-center mb-16">
        <h2 className="title mb-4">
          <span className="text-muted-foreground">Our</span>{" "}
          <span className="text-white">Testimonials</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Don&apos;t just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results.
        </p>
      </div>

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


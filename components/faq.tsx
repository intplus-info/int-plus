'use client'

import { Search } from 'lucide-react'
import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take to complete a web development project?",
    answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
  },
  {
    question: "Can you create a responsive website design that looks great on all devices?",
    answer: "Yes, we specialize in creating responsive websites that provide optimal viewing experiences across all devices, from desktop computers to mobile phones."
  },
  {
    question: "What digital marketing strategies do you employ to drive website traffic?",
    answer: "We employ a comprehensive approach including SEO, content marketing, social media optimization, and targeted advertising to drive quality traffic to your website."
  },
  {
    question: "Can you handle large-scale mobile app development projects?",
    answer: "Yes, our experienced team has successfully delivered numerous large-scale mobile applications across various industries and platforms."
  },
  {
    question: "Do you offer maintenance services for websites and apps developed by other companies?",
    answer: "Yes, we provide comprehensive maintenance services for existing websites and applications, regardless of who originally developed them."
  },
  {
    question: "How do you ensure the security of user data in your web applications?",
    answer: "We implement industry-standard security measures, including encryption, secure authentication, and regular security audits to protect user data."
  },
  {
    question: "Can you integrate third-party APIs into our mobile app?",
    answer: "Yes, we have extensive experience integrating various third-party APIs to enhance app functionality and user experience."
  },
  {
    question: "How do you ensure cross-platform compatibility for mobile apps?",
    answer: "We use modern cross-platform development frameworks and conduct thorough testing across different devices and operating systems."
  }
]

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full min-h-screen bg-background text-white px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h2 className="title">
            <span className="text-muted-foreground">Frequently</span> Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Got questions? We&apos;ve got answers. Check out our frequently asked questions section to find valuable insights into our
            processes, pricing, and more. Transparency is at the core of our client interactions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="relative max-w-md mx-auto"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2  h-4 w-4" />
          <Input
            type="text"
            placeholder="Search questions..."
            className="w-full pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredFAQs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible className='last:border-0'>
              <AccordionItem value={`item-${index}`} className="">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  )
}


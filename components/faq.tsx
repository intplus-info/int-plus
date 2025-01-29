"use client"

import { Search } from "lucide-react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqItems = [
    {
      question: "How long does it take to complete a web development project?",
      answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },
    {
      question: "What is your technology stack?",
      answer: (
        <>
          Our team is proficient in a wide range of technologies, including:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Programming Languages: Java, Python, JavaScript, C#, C++, PHP, Ruby on Rails</li>
            <li>Frameworks: React, Angular, Node.js, .NET, Spring Boot</li>
            <li>Databases: MySQL, PostgreSQL, MongoDB, Oracle, SQL Server</li>
            <li>Cloud Platforms: AWS, Azure, Google Cloud</li>
            <li>Mobile Development: Swift, Kotlin, React Native, Flutter</li>
          </ul>
        </>
      ),
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
      question: "Do you have experience with specific technologies or tools?",
      answer:
        "Please inquire about specific technologies or tools you require. We are constantly expanding our expertise and may have experience with technologies not listed above. Our team is always eager to learn new technologies and adapt to the evolving needs of our clients.",
    },
    {
      question: "Do you have experience with Agile development methodologies?",
      answer:
        "Yes, we primarily use Agile methodologies, such as Scrum, to ensure flexibility, collaboration, and iterative development. This allows us to adapt to changing requirements and deliver high-quality software efficiently. Our Agile approach involves close collaboration with our clients, frequent communication, and continuous feedback loops.",
    },
    {
      question: "Can you provide an overview of your software development lifecycle?",
      answer: (
        <>
          Our software development lifecycle (SDLC) typically includes the following stages:
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Requirements Gathering: We gather and analyze your requirements to define the scope of the project.</li>
            <li>
              Design: We create a detailed design of the software, including architecture, user interface, and database
              design.
            </li>
            <li>Development: We develop the software using the chosen technology stack and coding standards.</li>
            <li>Testing: We conduct rigorous testing to ensure the quality and functionality of the software.</li>
            <li>Deployment: We deploy the software to your environment and provide training and support.</li>
            <li>
              Maintenance: We provide ongoing maintenance and support to ensure the smooth operation of the software.
            </li>
          </ol>
        </>
      ),
    },
    {
      question: "What is your deployment process like?",
      answer:
        "Our deployment process involves using continuous integration and continuous delivery (CI/CD) pipelines to automate the build, testing, and deployment of your software. We use tools like Jenkins and Docker to ensure a smooth and efficient deployment process.",
    },
    {
      question: "How do you handle intellectual property rights?",
      answer:
        "We ensure that all intellectual property rights related to the software we develop for you belong to your company. We sign non-disclosure agreements to protect your confidential information. We are committed to ethical and legal practices and ensure that your intellectual property is protected throughout the development process.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing model depends on the specific project requirements. We offer flexible options, including fixed-price contracts, time and materials billing, and dedicated development teams. We work with you to determine the best pricing model for your needs and budget.",
    },
    {
      question: "What is your client onboarding process like?",
      answer: (
        <>
          Our client onboarding process typically involves the following steps:
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Initial Consultation: We meet with you to understand your business needs and project requirements.</li>
            <li>
              Project Proposal: We provide you with a detailed proposal outlining the scope of work, timelines, and
              costs.
            </li>
            <li>
              Project Kickoff: We hold a kickoff meeting to introduce the project team and discuss the project plan.
            </li>
            <li>
              Development and Testing: We follow an Agile development process with regular sprints and feedback loops.
            </li>
            <li>
              Deployment and Support: We deploy the software to your environment and provide ongoing maintenance and
              support.
            </li>
          </ol>
        </>
      ),
    },
    {
      question: "How do you ensure the security of my software?",
      answer: (
        <>
          We prioritize security at every stage of the development process. This includes:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Following secure coding practices to prevent vulnerabilities.</li>
            <li>Implementing robust authentication and authorization mechanisms.</li>
            <li>Conducting regular security audits and penetration testing.</li>
            <li>Using encryption to protect sensitive data.</li>
            <li>Staying up-to-date with the latest security standards and best practices.</li>
          </ul>
        </>
      ),
    },
    {
      question: "How do you ensure the security of user data in your web applications?",
      answer: "We implement industry-standard security measures, including encryption, secure authentication, and regular security audits to protect user data."
    },
    {
      question: 'How do you ensure cross-platform compatibility for mobile apps?',
      answer: 'We use modern cross-platform development frameworks and conduct thorough testing across different devices and operating systems.'
    }
  ]

  const filteredFAQs = faqItems.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()))

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
            Got questions? We&apos;ve got answers. Check out our frequently asked questions section to find valuable insights
            into our processes, pricing, and more. Transparency is at the core of our client interactions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="relative max-w-md mx-auto"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
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
            <Accordion key={index} type="single" collapsible className="last:border-0">
              <AccordionItem value={`item-${index}`} className="">
                <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  )
}


'use client'

import ContactBanner from '@/components/ContactBanner'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import InquiryForm from '@/components/inquiry-form'
import ContactConfirmation from '@/components/contact-confirmation'
import CTABanner from '@/components/cta-banner'

const locations = [
  {
    image: '/icons/nigeria.svg',
    country: "Nigeria",
    address:
      "80 Sparklight Estate, Ojodu, Lagos 116 Adenike Wole- Ajibode, Lekki Phase one",
  },
  {
    image: '/icons/canada.svg',
    country: "Canada",
    address:
      "20 Maud St #202 Toronto",
  },
]

const emailContacts = [
  {
    title: 'For General Inquiries',
    email: 'info@intplus.co',
  },
  {
    title: 'For Business Collaborations',
    email: 'partnerships@intplus.co',
  },
  {
    title: 'For Job Opportunities',
    email: 'careers@intplus.co',
  },
]

const phoneContacts = [
  {
    title: 'General Enquiries',
    phone: '+234 812 341 1180',
  },
  {
    title: 'Business Collaborations',
    phone: '+234 812 341 1180',
  },
  {
    title: 'Free Consultation',
    phone: '+234 703 957 4358',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const Page = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="md:container">
        <ContactBanner />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-background text-white py-12"
        >
          <div className="mx-auto space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-center text-lg font-medium mb-8">Contact Us Via Email</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border rounded-2xl p-10">
                {emailContacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                  >
                    <p className="text-sm text-muted-foreground">{contact.title}</p>
                    <Link
                      href={`mailto:${contact.email}`}
                      className="group flex items-center justify-between p-4 border border-gray-800 rounded-full hover:border-gray-600 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Mail size={18} />
                        <span className="text-sm">{contact.email}</span>
                      </span>
                      <span className="flex items-center justify-center bg-muted rounded-full px-4 py-2">
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-center text-lg font-medium mb-8">Contact Us By Phone</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border rounded-2xl p-10">
                {phoneContacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                  >
                    <p className="text-sm text-muted-foreground">{contact.title}</p>
                    <Link
                      href={`tel:${contact.phone}`}
                      className="group flex items-center justify-between px-4 py-2 border border-gray-800 rounded-full hover:border-gray-600 transition-colors"
                    >
                      <span className="text-sm">{contact.phone}</span>
                      <span className="flex items-center justify-center bg-muted rounded-full px-4 py-2">
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-8 container md:px-0 "
        >
          <h3 className="text-lg font-bold">Office Locations</h3>
          <p className="text-muted-foreground">
            Visit our offices to have a face-to-face discussion with our team. We have locations in
          </p>

          <div className="mx-auto grid gap-8 xl:grid-cols-2 items-start mt-10 md:border rounded-2xl md:p-10">
            {locations.map((location, index) => (
              <motion.div
                key={location.country}
                className="relative h-fit sm:h-[500px] flex items-center justify-center overflow-hidden border border-b-0 bg-gradient-to-b from-background to-background rounded-[calc(1.5rem-1px)] p-px"
                variants={fadeInUp}
                transition={{ duration: 0.9, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-full w-full bg-background rounded-[calc(1.5rem-1px)] bg-[url('/bg-small.svg')]">
                  <div className=" bg-gradient-to-b from-background/10 via-background/70 to-background h-full w-full absolute top-0 left-0 z-0" />
                  <div className="flex flex-col items-center justify-center space-y-4 py-10 px-6 md:px-14 text-center h-full relative z-10">
                    <Image
                      src={location.image}
                      alt={location.country}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <h3 className="text-xl font-bold text-white">{location.country}</h3>
                    <p className="text-zinc-400">{location.address}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <InquiryForm />
        <ContactConfirmation />
      </div>
      <CTABanner />
    </motion.div>
  )
}

export default Page

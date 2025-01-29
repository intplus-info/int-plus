'use client'

import { Linkedin, Instagram, Twitter, Clock, Shield } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactConfirmation() {
  return (
    <div className="min-h-screen bg-background py-6 md:py-8 lg:py-12">
      <div className="mx-auto space-y-12">
        {/* Response and Privacy sections */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Our Response */}
          <motion.div
            className="space-y-4 border rounded-2xl p-4 md:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <span className='flex items-center justify-center p-4 rounded-full border bg-gradient-to-br from-neutral-800 via-neutral-900 to-background'>
                <Clock fill='white' stroke='black' />
              </span>
              <h2 className="text-lg font-medium">Our Response</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We understand the importance of timely responses, and our team is committed to addressing your inquiries promptly. Whether you have a specific project in mind, need advanced technological solutions, or want to explore partnership opportunities, we are here to assist you at every step.
            </p>
          </motion.div>

          {/* Privacy Assurance */}
          <motion.div
            className="space-y-4 border rounded-2xl p-4 md:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <span className='flex items-center justify-center p-4 rounded-full border bg-gradient-to-br from-neutral-800 via-neutral-900 to-background'>
                <Shield fill='white' stroke='black' />
              </span>
              <h2 className="text-lg font-medium">Privacy Assurance</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              At Device, we prioritize your privacy and protect your personal information in compliance with data protection regulations. Rest assured that your details will only be used for the purpose of addressing your inquiries and will not be shared with third parties without your consent.
            </p>
          </motion.div>
        </div>

        {/* Social Media section */}
        <motion.div
          className="text-center space-y-2 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-[30px] font-medium">Join Us on Social Media</h2>
          <p className="text-muted-foreground leading-relaxed">
            Stay updated with our latest projects, industry insights, and company news by following us on social media.
          </p>

          <div className="flex justify-center gap-6 py-4">
            <Link href="https://www.linkedin.com/company/intplus" className="hover:text-gray-300 transition-colors">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Linkedin className="w-6 h-6" />
              </motion.div>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.instagram.com/intplus_technology" className="hover:text-gray-300 transition-colors">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Instagram className="w-6 h-6" />
              </motion.div>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://x.com/info_intplus" className="hover:text-gray-300 transition-colors">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Twitter className="w-6 h-6" />
              </motion.div>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </motion.div>

        {/* Thank You section */}
        <motion.div
          className="text-center space-y-4 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-[36px] font-medium">Thank You!</h2>
          <p className="text-muted-foreground leading-relaxed">
            For considering me for your technological solutions. We look forward to connecting with you and being part of your business success!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

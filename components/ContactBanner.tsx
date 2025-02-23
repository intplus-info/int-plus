'use client';

import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const ContactBanner = () => {
  return (
    <motion.section
      className="bg-background md:my-16 text-white px-4 rounded-t-[25px] min-h-[600px] md:min-h-[360px] rounded-2xl border bg-[url('/bg-small.svg')] border-t flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <motion.div
        className="mx-auto text-center flex items-center justify-center w-full absolute z-20 pt-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
      >
        <div className="container mx-auto md:pt-10">
          <motion.h2
            className="title mb-6 text-center w-fit mx-auto gap-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          >
            <span className="text-muted-foreground">Get</span> in Touch with Us Today!
          </motion.h2>

          <motion.p
            className="text-muted-foreground mb-8 mx-auto md:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6 }}
          >
            At Int+, we value your inquiries, feedback, and collaborations. Whether you are
            interested in our digital services, have questions about our projects, or want to
            explore potential partnerships, we encourage you to reach out to our dedicated team.
            Connect with us through any of the channels below, and we&apos;ll be delighted to assist
            you on your digital journey.
          </motion.p>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
          >
            <Button
              variant={'outline'}
              className="w-fit hidden xl:block absolute -bottom-[80px] right-1/3 border-foreground/40 text-foreground disabled:text-foreground"
              size="lg"
              disabled
            >
              Feel free to contact us through any of the following channels
            </Button>
            <Button variant={'outline'} className="w-fit xl:hidden md:mb-20" size="lg">
              Contact us through here
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactBanner;

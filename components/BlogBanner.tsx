'use client';

import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Mail } from 'lucide-react';

const BlogBanner = () => {
  return (
    <div className="container my-16">
      <motion.section
        className="bg-background  text-white px-4 pb-12 rounded-t-[25px] min-h-[600px] md:min-h-[360px] rounded-2xl border bg-[url('/bg-small.svg')] border-t flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      >
        <motion.div
          className="mx-auto text-center flex items-center justify-center w-full absolute z-20"
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
              Subscribe to our blog today
            </motion.h2>

            <motion.p
              className="text-muted-foreground max-w-3xl mb-8 mx-auto md:px-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.6 }}
            >
              let's embark on this exciting digital adventure together! Don't forget to share our
              blog with your network to spread the knowledge and stay connected with the
              ever-evolving world of technology and innovation. Happy reading!
            </motion.p>
            <div>
              <p className="text-white text-lg text-center">Unlock Your Digital Potential</p>
              <div className="flex items-center gap-3 w-fit mx-auto mt-4">
                <span className="relative">
                  <Mail
                    strokeWidth={1}
                    className="size-5 text-muted-foreground absolute top-[14px] left-3"
                  />
                  <Input
                    placeholder="Enter tour email"
                    className="pl-10 bg-background h-12 text-lg"
                    type="email"
                  />
                </span>
                <Button className="h-12 px-6">Subscribe</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default BlogBanner;

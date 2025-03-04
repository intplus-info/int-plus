'use client'

import React from 'react';
import { motion } from 'framer-motion';

const BlogHero = () => {
  return (
    <section className="relative flex items-center bg-gradient-to-b from-background to-black justify-center w-full md:h-[60vh] xl:h-[95vh] py-16 md:py-24">
      {/* Title Section */}
      <motion.div
        className="relative z-30 flex flex-col items-center justify-center max-w-4xl space-y-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <h2 className="title2 text-white">
          Empowering Your <br />
          <span className="title2 text-muted-foreground">Technological Journey</span>
        </h2>
        <p className=" px-10 xl:max-w-5xl mx-auto text-muted-foreground ">
          At Int+, we are passionate about sharing our expertise, insights, and latest trends in the
          digital world. Our blog serves as a knowledge hub, offering valuable information and
          resources for individuals, businesses, and fellow industry enthusiasts. Whether you are a
          seasoned professional or a curious learner, our blog covers a wide range of topics related
          to web design, development, digital marketing, technology, and much more. Join us as we
          embark on a journey to explore the technological landscape and unlock the potential of the
          online world.
        </p>
      </motion.div>

      {/* Background Overlay */}
      <div className="absolute top-0 w-[700px] md:h-[60vh] xl:h-[95vh] bg-[url('/bg-small.svg')] z-10" />
    </section>
  );
};

export default BlogHero;

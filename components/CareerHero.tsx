import React from 'react';
import { motion } from 'framer-motion';

const CareerHero = () => {
  return (
    <section className="relative flex items-center bg-gradient-to-b from-background to-black justify-center w-full h-[95vh] py-16 md:py-24">
      {/* Title Section */}
      <motion.div
        className="relative z-30 flex flex-col items-center justify-center max-w-4xl space-y-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <h2 className="title2 text-white">
          Unlock Your Potential{' '}
          <span className="title2 text-muted-foreground">
            in the <br /> Technological Age
          </span>
        </h2>
        <p className="max-w-5xl mx-auto text-muted-foreground ">
          At Int+, we believe in fostering a dynamic and collaborative work environment that
          empowers our team members to excel in their respective fields. Join us to be part of a
          passionate and innovative team dedicated to crafting exceptional digital solutions for
          clients across the globe. We are committed to nurturing talent, encouraging professional
          growth, and creating a workplace where creativity thrives.
        </p>
      </motion.div>

      {/* Background Overlay */}
      <div className="absolute top-0 w-[700px] h-[95vh] bg-[url('/bg-small.svg')] z-10" />
    </section>
  );
};

export default CareerHero;

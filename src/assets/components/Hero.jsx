import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hola, soy Yaya 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl mb-6"
      >
        Desarrolladora y diseñadora de experiencias web
      </motion.p>
      <a href="#contact" className="px-6 py-3 bg-purple-600 rounded hover:bg-purple-500 transition">Contáctame</a>
    </section>
  );
};

export default Hero;

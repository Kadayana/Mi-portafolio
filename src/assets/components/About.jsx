import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100">
      <motion.img
        src="https://via.placeholder.com/150" // placeholder temporal
        alt="Yaya"
        className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-12"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg max-w-lg">
          Soy Yaya, desarrolladora web apasionada por crear experiencias interactivas y funcionales. Me encanta aprender nuevas tecnologías y llevar mis proyectos al siguiente nivel.
        </p>
      </motion.div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact size={40} className="text-blue-500"/> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-600"/> },
  { name: 'Base de datos', icon: <FaDatabase size={40} className="text-yellow-600"/> },
  // agrega más skills si quieres
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-200 flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded shadow hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {skill.icon}
            <p className="mt-2 font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

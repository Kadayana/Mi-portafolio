import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1.',
    image: 'https://via.placeholder.com/300',
    link: '#'
  },
  {
    name: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.',
    image: 'https://via.placeholder.com/300',
    link: '#'
  },
  // agrega más proyectos
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded shadow overflow-hidden hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} target="_blank" className="text-purple-600 font-semibold">Ver más</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

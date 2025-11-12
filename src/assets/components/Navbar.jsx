import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-bold text-purple-700">Yaya</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="#hero" className="hover:text-purple-700 transition">Inicio</a></li>
        <li><a href="#about" className="hover:text-purple-700 transition">Sobre mí</a></li>
        <li><a href="#skills" className="hover:text-purple-700 transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-purple-700 transition">Proyectos</a></li>
        <li><a href="#contact" className="hover:text-purple-700 transition">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

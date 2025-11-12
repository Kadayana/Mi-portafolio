import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-purple-200/80 backdrop-blur-md shadow-lg flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-bold text-purple-800">Yaya</h1>
      <ul className="flex gap-6 text-purple-900 font-medium">
        <li>
          <a href="#hero" className="hover:text-purple-700 transition-colors duration-300">
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-purple-700 transition-colors duration-300">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-purple-700 transition-colors duration-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple-700 transition-colors duration-300">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple-700 transition-colors duration-300">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

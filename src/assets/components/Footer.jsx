import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <p>© {new Date().getFullYear()} Yaya. Todos los derechos reservados.</p>
      <p className="mt-2">Hecho con ❤️ usando React y Tailwind CSS</p>
    </footer>
  );
};

export default Footer;

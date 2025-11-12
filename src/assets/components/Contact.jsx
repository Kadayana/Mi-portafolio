import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen p-8 bg-gray-200 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Contacto</h2>
      <motion.form
        className="flex flex-col w-full max-w-md gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input type="text" placeholder="Nombre" className="p-3 rounded border"/>
        <input type="email" placeholder="Correo" className="p-3 rounded border"/>
        <textarea placeholder="Mensaje" rows="4" className="p-3 rounded border"/>
        <button type="submit" className="bg-purple-600 text-white p-3 rounded hover:bg-purple-500 transition">
          Enviar
        </button>
      </motion.form>
      <p className="mt-4">O también puedes contactarme por <a href="mailto:tuemail@example.com" className="text-purple-600">email</a></p>
    </section>
  );
};

export default Contact;

'use client';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; 
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Versão Desktop */}
      <div className="hidden md:flex items-center justify-between px-16 py-6">
        <div>
          Mariana.DEV
        </div>
        <ul className="flex space-x-10 items-center">
          <li>Sobre mim</li>
          <li>Experiência</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </div>

      {/* Versão Móvel */}
      <div className="md:hidden flex items-center justify-between px-4 py-6">
        <div>
          Mariana.DEV
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Menu Móvel */}
      <motion.div 
        className={`md:hidden absolute top-16 left-0 w-full h-fit bg-slate-900 py-8 z-50`} 
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        exit={{ opacity: 0, y: -20 }} 
        transition={{ duration: 0.3 }}
        style={{ display: isOpen ? 'block' : 'none' }} // Para ocultar quando não está aberto
      >
        <ul className="space-y-4">
          <li className="pl-4">Sobre mim</li>
          <hr className="w-full border-purple-900"/>
          <li className="pl-4">Experiência</li>
          <hr className="w-full border-purple-900"/>
          <li className="pl-4">Projetos</li>
          <hr className="w-full border-purple-900"/>
          <li className="pl-4">
            <button className="bg-purple-900 py-2 px-4 rounded-md hover:bg-purple-950 duration-300 transition ease-in-out delay-150 ">
                Contato
            </button>
            </li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;

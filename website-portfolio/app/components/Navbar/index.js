'use client';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; 
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`w-full absolute top-0 left-0 z-50 ${isOpen ? 'bg-slate-900 backdrop-blur-sm' : 'bg-transparent'}`}>
      {/* Versão Desktop */}
      <div className="hidden md:flex items-center justify-between px-16 py-6">
        <div>
          <img src="/logo.png" alt="Logo" className="w-[100px] h-auto"/>
        </div>
        <ul className="flex space-x-10 items-center">
            <li
                className="cursor-pointer transition-all duration-300 hover:text-purple-500 hover:scale-105"
                onClick={() => scrollToSection('second-section')}>
                Sobre mim
            </li>
            <li
                className="cursor-pointer transition-all duration-300 hover:text-purple-500 hover:scale-105"
                onClick={() => scrollToSection('third-section')}>
                Experiência
            </li>
            <li
                className="cursor-pointer transition-all duration-300 hover:text-purple-500 hover:scale-105"
                onClick={() => scrollToSection('technologies-section')}>
                Tecnologias
            </li>
            <li
                className="cursor-pointer transition-all duration-300 hover:text-purple-500 hover:scale-105"
                onClick={() => scrollToSection('contact-section')}>
                Contato
            </li>
        </ul>

      </div>

      {/* Versão Móvel */}
      <div className="md:hidden flex items-center justify-between px-4 py-6">
        <div>
             <img src="/logo.png" alt="Logo" className="w-[80px] h-auto"/>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
          {isOpen ? <HiX className="text-[32px]"/> : <HiMenu className="text-[32px]" />}
        </button>
      </div>

      {/* Menu Móvel */}
      <motion.div 
        className={`md:hidden absolute top-20 left-0 w-full h-fit bg-slate-900 py-8 z-50`} 
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        exit={{ opacity: 0, y: -20 }} 
        transition={{ duration: 0.3 }}
        style={{ display: isOpen ? 'block' : 'none' }} // Para ocultar quando não está aberto
      >
        <ul className="space-y-4">
          <li className="pl-4 cursor-pointer" onClick={() => scrollToSection('second-section')}>Sobre mim</li>
          <hr className="w-full border-purple-900"/>
          <li className="pl-4 cursor-pointer" onClick={() => scrollToSection('third-section')}>Experiência</li>
          <hr className="w-full border-purple-900"/>
          <li className="pl-4 cursor-pointer" onClick={() => scrollToSection('technologies-section')}>Tecnologias</li>
          <hr className="w-full border-purple-900"/>
          <li className="pl-4 cursor-pointer">
            <button onClick={() => scrollToSection('contact-section')} className="bg-purple-900 py-2 px-4 rounded-md hover:bg-purple-950 duration-300 transition ease-in-out delay-150 ">
                Contato
            </button>
            </li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;

"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaArrowDown } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Button } from '@/components/ui/button';

const index = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section>
      <div 
        className="relative bg-fixed w-full h-screen flex items-center justify-center lg:justify-center bg-cover bg-center bg-no-repeat bg-opacity-80"
        style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(58, 24, 86, 0.8)), url("/bg-hero.jpg")'
        }}>
        <motion.div className="max-w-[800px] flex flex-col px-8 pb-4 py-8 gap-4 lg:pl-20 md:py-16 bg-white/8 rounded-lg shadow-lg shadow-black/10 backdrop-blur-sm "
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
        >
          <h2 className="text-[44px] font-bold">Olá! 👋</h2>
          <h2 className="text-[24px] font-bold">Me chamo Mariana e sou
            <span className="ml-1.5 font-bold bg-gradient-to-r from-sky-400 to-purple-600 inline-block text-transparent bg-clip-text">
              Desenvolvedora Web
            </span>
          </h2>
          <p>Com mais de 3 anos de experiência no desenvolvimento de aplicações, sempre busco entregar qualidade e funcionalidade ao usuário. </p>
          <button type="button" className="mt-2 text-white bg-gradient-to-r w-fit from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Download CV
          </button>
          <div className="flex gap-4 mt-2">
          <FaLinkedin className="text-[24px] cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/marianapmont', '_blank')}/>
          <SiGmail className="text-[24px] cursor-pointer" onClick={() => window.location.href = 'mailto:marianamonteiro0302@gmail.com?subject=Contato%20Mariana Dev'}/>
          <FaGithub className="text-[24px] cursor-pointer" onClick={() => window.open('https://github.com/marianapmonteiro', '_blank')}/>
          </div>
        </motion.div>
        <div className="w-full flex justify-center items-center absolute bottom-[-25px]">
          <button 
            className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-indigo-600 p-4 rounded-full text-white"
            onClick={() => scrollToSection('second-section')}
         >
          <FaArrowDown className="text-[20px]"/>
          </button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-l from-slate-500 via-slate-50 to-slate-500"></div>
    </section>
  )
}

export default index
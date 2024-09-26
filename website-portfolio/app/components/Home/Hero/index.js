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
      <div className="relative w-full h-screen flex items-center justify-between bg-gradient-to-b from-slate-900 to-purple-900">
        <motion.div className="max-w-[800px] flex flex-col gap-2 pl-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
        >
          <h2 className="text-[44px]">Olá! 👋</h2>
          <h2 className="text-[24px]">Me chamo Mariana e sou
            <span className="ml-1.5 font-bold bg-gradient-to-r from-sky-400 to-purple-600 inline-block text-transparent bg-clip-text">
              Desenvolvedora Web
            </span>
          </h2>
          <p>Crie seu primeiro site mesmo sem conhecimentos prévios, descomplique o código e dê seus primeiros passos nesse universo. </p>
          <button type="button" className="mt-2 text-white bg-gradient-to-r w-fit from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download CV</button>
          <div className="flex gap-4 mt-2">
          <FaLinkedin className="text-[24px]" />
          <SiGmail className="text-[24px]"/>
          <FaGithub className="text-[24px]"/>
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
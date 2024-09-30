"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Index = () => {
  const nextSectionRef = useRef(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fullText = "SELECT * FROM developers WHERE name = Mariana";

  useEffect(() => {
    if (inView && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 90);
      return () => clearTimeout(timeout);
    } else if (text.length === fullText.length && !showAbout) {
      setLoading(false)
      const aboutTimeout = setTimeout(() => {
        setShowAbout(true);
      }, 500);
      return () => clearTimeout(aboutTimeout);
    }
  }, [text, inView, showAbout]);


  return (
    <section id="second-section" className="relative w-full border-gray-500 py-10 md:pt-0 md:py-0 lg:py-4 lg:pt-0 px-8 overflow-x-hidden overflow-y-hidden min-h-fit ">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10" />
      <div ref={ref} className="w-full h-fit min-h-screen py-8 lg:py-0 flex-col lg:flex-row lg:h-screen flex justify-center items-center">
        {loading ? (
          <div className="mb-8 flex flex-wrap max-w-screen-sm md:max-w-screen-2xl break-words md:pt-32 lg:pt-0">
            {text.length > 0 ? (
              <pre className="font-mono text-green-400 text-lg sm:text-xl md:text-2xl tracking-[2px] whitespace-normal">
                {text}
                {text.length < fullText.length && <span className="animate-blink">|</span>}
              </pre>
            ) : null}
          </div>

        ) : null}
        {showAbout && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col-reverse items-center justify-center gap-14 md:gap-28 md:py-10 lg:gap-0 lg:justify-around lg:flex-row md:h-fit lg:h-screen animate-fadeIn"
          >
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-[600px] 2xl:max-w-[50%] mb-10 md:mb-0 2xl:px-20 2xl:py-16">
              <h2 className="text-[32px] mb-4 2xl:mb-8 2xl:text-[40px]">_Sobre mim</h2>
              <p className="font-roboto text-[16px] text-gray-100 my-4 text-justify leading-[28px] 2xl:text-[18px] 2xl:leading-[42px] ">
                Meu nome é Mariana, tenho 25 anos e sou graduada em Engenharia de Software pela Universidade Cesumar, onde concluí meu curso em 2023. Desde 2019, venho me dedicando ao desenvolvimento de aplicações web e, em 2021, tive a oportunidade de estagiar, onde aprendi e aperfeiçoei diversas tecnologias que utilizo hoje.
                Estou em busca de uma nova oportunidade no mercado de trabalho, onde possa aplicar minhas habilidades e continuar a crescer profissionalmente. Sou entusiasmada, proativa e sempre disposta a aprender.
              </p>
            </div>
            <div className="w-full max-w-[500px] 2xl:max-w-[30%] relative flex flex-col border-gray-500 border-2 rounded-md py-8 shadow-lg ">
              <div className="w-full py-2 px-2 top-0 absolute flex gap-4 justify-end items-center border-gray-500 border-b-2">
                <div className="rounded-full w-[16px] h-[16px] bg-red-500"></div>
                <div className="rounded-full w-[16px] h-[16px] bg-yellow-500"></div>
                <div className="rounded-full w-[16px] h-[16px] bg-green-500"></div>
              </div>
              <div className="px-8 pt-8">
                <h2 className="text-2xl font-bold mb-4 2xl:text-[24px]">&#123;</h2>
                <p className="text-green-500 font-bold text-[20px] ml-8 2xl:text-[24px]">
                  <span className="text-pink-500  font-bold">"name":</span> "Mariana"<span className="text-white">,</span>
                </p>
                <p className="text-green-500  font-bold text-[20px] ml-8 2xl:text-[24px]">
                  <span className="text-pink-500">"age":</span> 25<span className="text-white">,</span>
                </p>
                <p className="text-green-500  font-bold text-[20px] ml-8 2xl:text-[24px]">
                  <span className="text-pink-500">"role":</span> "Web Developer"<span className="text-white">,</span>
                </p>
                <p className="text-green-500  font-bold text-[20px] ml-8 2xl:text-[24px]">
                  <span className="text-pink-500">"city":</span> "Rio de Janeiro"
                </p>
                <h2 className="text-2xl font-bold mb-4 2xl:text-[24px]">&#125;</h2>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Index;

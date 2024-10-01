'use client';
import React from 'react';
import { PiGraduationCapDuotone } from 'react-icons/pi';
import { CgWorkAlt } from 'react-icons/cg';

function Index() {
  const expIcons = [<PiGraduationCapDuotone className="text-white text-[36px]"/>, <CgWorkAlt className="text-white text-[36px]" />, <PiGraduationCapDuotone className="text-white text-[36px]"/> ]
  const expTitles = ["Curso Ingate-Educa", "Estagiária em desenvolvimento Web", "Bacharelado Engenharia de Software"]
  const expDate = ["Fev. 2021 - Nov. 2021", "Nov. 2021 - Nov. 2023", "Agosto 2019 - Nov. 2023"]
  const expDescriptions = ["Curso de desenvolvimento Web (Javascript Vanilla, CSS, HTML, Vue).", "Privat - Serviços Tecnológicos", "UniCesumar" ]
  return (
    <section id="third-section" className="py-20 px-20 bg-slate-950 relative overflow-hidden">
      <img src="bbblurry.svg"  alt="background pattern" className="absolute top-0 md:top-[-30%] right-0 md:left-0 select-none pointer-events-none"  />
      {/* <img src="/bg-dots.png" className="absolute top-0 left-0" style={{width:"150px", height:"120px", clipPath: "inset(1% 49% 25% 0)"}}/> */}
      <img src="/bg-dots.png"  alt="background pattern dots" className="select-none pointer-events-none absolute bottom-0 right-0" style={{width:"200px", height:"auto", clipPath: "polygon(100% 0, 0% 100%, 100% 100%)"}}/>
      <img src="/bg-dots.png"  alt="background pattern dots" className="select-none pointer-events-none absolute top-[-1%] left-[15px]" style={{width:"200px", height:"auto", clipPath: "inset(0 67% 50% 0)"}}/>
      <h2 className="text-[36px] mb-20">_Experiências</h2>
      <ol className="items-center sm:flex">
        {expTitles.map((item, index)=>{
          return(
            <li className="relative mb-12 sm:mb-0 max-w-[400px] h-auto md:h-[300px]" key={index}>
              <div className="flex items-center">
                <div className="relative z-10 flex items-center justify-center w-14 2xl:w-[150px] 2xl:h-[100px] h-14 border-[1px] border-slate-500 bg-gradient-to-b from-gray-800 to-gray-800/20 rounded-md">
                  <div className="relative flex items-center justify-center w-6 2xl:w-[50px] h-auto rounded-full ring-0 ring-slate-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    {expIcons[index]}
                  </div>
                </div>
                <div className="hidden sm:flex w-full bg-slate-500 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{expDate[index]}</time>
                <p className="text-base font-normal text-white dark:text-gray-400">{expDescriptions[index]}</p>
              </div>
        </li>
          )
        })}
      </ol>
      <div className="w-full h-[1px] absolute bottom-0 left-0 bg-gradient-to-l from-slate-900 via-slate-400 to-slate-900"></div>
    </section>
  );
}

export default Index;

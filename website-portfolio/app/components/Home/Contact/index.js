"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaArrowUp } from "react-icons/fa";
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"


const Index = () => {
  const { toast } = useToast()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sendMessage = (name, email, message) => {
    setLoading(true);
    axios.post("https://portfolio-7inw.onrender.com/api/contact", { name, email, message })
      .then(response => {
        Swal.fire({
          type: "success",
          icon: 'success',
          text: response.data.message,
          customClass: {
            popup: "bg-slate-950 text-white shadow-lg border-2 border-gray-400",
            htmlContainer: "bg-slate-950 text-white",
            confirmButton: "bg-purple-800",
          },
        })
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao enviar a mensagem:", error);
        toast({
          title: "Erro",
          description: error.response.data.error,
          className: "z-50 bg-slate-950",
        })
        setLoading(false);
      });
  };

  return (
    <section id="contact-section" className="relative">
      {/* Imagem de fundo */}
      <img
        src="/oooscillate.svg"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="h-screen w-full relative flex justify-center items-center">
        <div className="relative container mx-auto px-8 flex items-center justify-center w-full max-w-[700px]">
          <div className="border border-slate-300 bg-slate-950 max-w-[700px] w-full rounded-md py-8 xs:px-4">
            <div className="flex px-6 md:px-10 mb-10 md:mb-14 justify-between items-center border-slate-300 border-b h-fit">
              <h2 className="text-center text-[24px] md:text-[36px] mb-6">_Contato.exe</h2>
              <div className="flex gap-2 mb-6 justify-center items-center">
                <div className="rounded-full w-[16px] h-[16px] bg-red-500"></div>
                <div className="rounded-full w-[16px] h-[16px] bg-yellow-500"></div>
                <div className="rounded-full w-[16px] h-[16px] bg-green-500"></div>
              </div>
            </div>
            <form className="max-w-md mx-auto px-6 md:px-0" onSubmit={(e) => { e.preventDefault(); sendMessage(name, email, message); }}
            >
              <div className="mb-4">
                <Input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="border border-slate-500 bg-gradient-to-b from-gray-800 to-gray-800/20 rounded-md" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-slate-500 bg-gradient-to-b from-gray-800 to-gray-800/20 rounded-md" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} className="border border-slate-500 bg-gradient-to-b from-gray-800 to-gray-800/20 rounded-md" />
              </div>
              {loading ? <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn("animate-spin")}
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              </div> : null}
              <div className="w-full flex justify-end items-center">
                <button
                  type="submit"
                  //   onClick={()=>{sendMessage(name, email, message)}}
                  className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md h-[50px] w-[145px] flex justify-center items-center ">
                  <div className="relative hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-colors duration-300 ease-in-out bg-slate-900 h-[45px] w-[140px] rounded-md flex items-center justify-center text-sm focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50">Enviar Mensagem</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-0 mb-10 right-[10%] w-[50px] h-[50px] flex items-center justify-center rounded-md shadow-lg bg-gradient-to-b bg-slate-800 to-gray-800/20"
        onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </section>
  );
};

export default Index;

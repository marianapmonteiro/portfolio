import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"


function index() {
  const imgs = ["/HTML5.svg","/CSS3.svg", "/JavaScript.svg", "/TypeScript.svg", "/React.svg", "/Next.js.svg", "/Tailwind.svg", "/Node.js.svg", "/Express.svg","/MongoDB.svg","/SQLDeveloper.svg",]
  const titles = ["HTML5","CSS3", "JavaScript", "TypeScript", "React", "Next", "Tailwind", "Node", "Express","MongoDB","SQL",]

  return (
    <section id="technologies-section" className="h-fit lg:h-screen 2xl:h-fit 2xl:py-32 w-full pt-20 pb-40 lg:py-20 px-20 overflow-hidden relative bg-[url('/pattern.svg')] bg-opacity-5 z-40">
       <img src="/blur_technologies.svg"  alt="background svg pattern" className="absolute bg-center bg-no-repeat bg-cover bottom-0 m-auto select-none pointer-events-none" /> 
      <h2 className="text-[36px] pb-20">_Tecnologias</h2>
        <div className="w-full h-fit bg-slate-900 p-4 rounded-md">
          <Carousel className="w-full h-fit" opts={{
              align: "start",
              loop: true,
          }}>
            <CarouselContent className="-ml-2">
              {Array.from({ length: 11 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-2/5 lg:basis-1/5 xl:basis-80 flex justify-center items-center ">
                    <Card className="h-[200px] w-[200px] p-6 flex flex-col gap-6 rounded-md border-slate-500 bg-gradient-to-b from-gray-800 to-slate-950 text-white cursor-pointer ">
                      <CardContent className="flex flex-col gap-2 aspect-square items-center justify-center">
                        <span className="text-2xl font-semibold">{titles[index]}</span>
                        <img src={imgs[index]} alt="Imagem do logo da tecnologia"/>
                      </CardContent>
                    </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-full h-[1px] absolute bottom-0 left-0 bg-gradient-to-l from-slate-900 via-slate-400 to-slate-900"></div>
    </section>
  )
}

export default index
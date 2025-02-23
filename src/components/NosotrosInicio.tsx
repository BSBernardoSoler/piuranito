"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/Recurso 6.jpg", // Cambia por tu ruta de imagen
    title: "¿QUIÉNES SOMOS?",
    description:
      "Arroz del Piuranito es una marca que nació en 1996 gracias al emprendimiento de Jorge Arce, quien adquirió un terreno en La Unión, Piura, para construir un molino de arroz.Inicialmente, solo producían polvillo, pero con el tiempo comenzaron a vender arroz, destacándose en el mercado por el sabor característico del grano del Bajo Piura. Hace cinco años, la empresa adquirió máquinas añejadoras y selectoras para mejorar su proceso de producción,consolidando nuestro crecimiento y calidad.",
  },
  
];

export default function NosotrosInicio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

 
  return (
    <section className="relative w-full h-screen overflow-hidden flex justify-center items-center bg-white p-10">
        {/* Texto con fondo negro */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].id}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute left-0 w-full md:w-2/5 h-full bg-black text-white flex flex-col justify-center p-10 z-10 bg-opacity-35 md:bg-opacity-100"
            style={{
              clipPath: window.innerWidth > 768 ? "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)" : "none",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-start justify-center px-10  text-white max-w-96">
           
            <h2 className="text-3xl font-bold">{slides[currentIndex].title}</h2>
            <p className="mt-4 text-gray-300">{slides[currentIndex].description}</p>
            

            </div>
           
          </motion.div>
        </AnimatePresence>

        {/* Imagen */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].image}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute right-0 w-full h-full"
            style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
          >
            <Image
              src={slides[currentIndex].image}
              alt="Slide image"
              layout="fill"
              objectFit="cover"
              className="rounded-r-lg"
            />
          </motion.div>
        </AnimatePresence>
      

    </section>
  );
}

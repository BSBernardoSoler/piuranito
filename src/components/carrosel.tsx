"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/Recurso 6.jpg", // Cambia por tu ruta de imagen
    title: "INNOVACIÓN TECNOLÓGICA Y CALIDAD DEL GRANO",
    description:
      "La implementación de maquinaria moderna y la constante innovación en nuestros procesos nos permiten producir un grano de arroz de alta calidad, garantizando una correcta cocción y selección.",
  },
  {
    id: 2,
    image: "/images/Recurso 5.jpg",
    title: "COMPROMISO CON LA SOSTENIBILIDAD",
    description:
      "Nuestros campos son gestionados con prácticas responsables que respetan el medio ambiente y garantizan un arroz saludable y sostenible.",
  },
  {
    id: 3,
    image: "/images/Recurso 7.jpg",
    title: "TRADICIÓN Y EXPERIENCIA",
    description:
      "Más de 25 años de experiencia nos respaldan, combinando métodos tradicionales con tecnología avanzada para ofrecer el mejor arroz del mercado.",
  },
];

export default function Carousel() {
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
    <section className="  relative w-full h-screen overflow-hidden flex justify-center items-center p-10">
        {/* Texto con fondo negro */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].id}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute left-0 w-2/5 h-full bg-black text-white flex flex-col justify-center p-10 z-10"
            style={{
                clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)",
              }}
          >
            <div className="absolute inset-0 flex flex-col items-start justify-center px-10 bg-black bg-opacity-50 text-white max-w-96">
            <div className="text-sm text-green-500 font-bold">0{currentIndex + 1}</div>
            <h2 className="text-3xl font-bold">{slides[currentIndex].title}</h2>
            <p className="mt-4 text-gray-300">{slides[currentIndex].description}</p>
            <button className="mt-6 bg-green-600 px-6 py-3 text-white font-bold rounded-lg flex items-center hover:bg-green-500 transition">
              LEER MÁS →
            </button>

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

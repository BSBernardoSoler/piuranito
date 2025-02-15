"use client";
import Carousel from "@/components/carrosel";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/Recurso 1.png",
    "/images/Recurso 2.png",
    "/images/Recurso 3.jpeg",
  ];

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide]}
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
              src={slides[currentSlide]}
              alt="Slide image"
              layout="fill"
              objectFit="cover"
              className="rounded-r-lg"
            />
          </motion.div>
        </AnimatePresence>
        </div>

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-10 bg-black bg-opacity-50 text-white">
          <p className="text-green-500 text-lg font-bold">
            SIEMPRE ESTAMOS PARA TI
          </p>
          <h1 className="text-5xl font-bold leading-tight">
            EXCELENCIA EN <br /> CALIDAD PRECIO
          </h1>
          <p className="mt-4 text-lg max-w-lg">
            Participa de nuestra marcha blanca en pilado y secado de arroz con
            el 20% de descuento por tonelada de cáscara.
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 font-semibold text-lg rounded-md hover:bg-green-600 transition">
            LEER MÁS →
          </button>
        </div>

        {/* Botones de navegación */}
        <div className="absolute bottom-20 left-0 right-10  flex justify-end gap-4">
          <button
            className="bg-black bg-opacity-50 text-white p-3 rounded-full"
            onClick={handlePrev}
          >
            &#9665;
          </button>
          <button
            className="bg-black bg-opacity-50 text-white p-3 rounded-full"
            onClick={handleNext}
          >
            &#9655;
          </button>
        </div>
      </div>

      <section className="bg-white relative w-full p-10 flex flex-col items-center">
        {/* Título y texto */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-start gap-6">
          {/* Imágenes */}
          <div className="flex flex-col md:flex-row gap-4">
            <Image
              src="/images/Recurso 4.jpg"
              alt="Campo de arroz"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-green-600 font-bold">SIEMPRE ESTAMOS PARA TI</p>
            <h2 className="text-4xl font-bold text-black leading-tight">
              ARROZ DEL PIURANO:
              <br /> TRADICIÓN Y CALIDAD
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <Image
                src="/images/Recurso 5.jpg"
                alt="Campo de arroz"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />

              <p className="mt-4 text-gray-700 text-ms">
                Arroz del Piurano es una marca fundada en 1996 por Jorge Arce,
                quien inició su emprendimiento con la construcción de un molino
                de arroz en La Unión, Piura. Comenzó produciendo polvillo, pero
                pronto se destacó en el mercado por su arroz de excepcional
                sabor, característico del grano del Bajo Piura. Hace cinco años,
                la empresa modernizó su producción con máquinas aleñadoras y
                selectoras, consolidando su crecimiento y manteniendo su
                compromiso con la calidad.
              </p>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-10 w-full max-w-5xl flex justify-around text-center">
          <div>
            <h3 className="text-5xl font-bold text-black">1</h3>
            <p className="text-green-600 font-bold uppercase">Campos</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-black">1</h3>
            <p className="text-green-600 font-bold uppercase">Materiales</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-black">1</h3>
            <p className="text-green-600 font-bold uppercase">Producción</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-black">1</h3>
            <p className="text-green-600 font-bold uppercase">Producción</p>
          </div>
        </div>
      </section>
   
      {/*carousel*/}
      <Carousel />
      <section className=" bg-white relative w-full min-h-screen overflow-hidden flex flex-wrap justify-around items-center p-10 gap-6">
        {/* Título centrado */}
        <div className="w-full text-center mb-6">
          <h1 className="text-4xl font-bold uppercase">Servicio Principal</h1>
        </div>

        {/* Primer bloque */}
        <div className="w-full md:w-5/12">
          <Image
            src="/images/Recurso 8.png"
            width={300}
            height={300}
            alt="Arroz de grano selecto"
            className="ml-60 rounded-lg shadow-lg"
          />
        </div>
        <div className="flex w-full md:w-5/12 flex-col gap-4">
          <h2 className="text-green-700 text-3xl font-bold uppercase max-w-96 ">
            PRODUCCIÓN DE ARROZ DE GRANO SELECTO
          </h2>
          <p className="text-gray-700 max-w-96 text-justify ">
            El proceso implica un enfoque detallado y minucioso que inicia con
            la selección de las variedades de arroz de mayor calidad, adaptadas
            a las condiciones ideales para su crecimiento. Durante el cultivo,
            se monitorean cuidadosamente factores como el suelo, el clima y el
            riego para obtener un grano óptimo. La cosecha se realiza en el
            momento preciso para preservar su frescura y nutrientes.
            Posteriormente, en la fase de procesamiento, se emplean técnicas
            avanzadas y estrictos controles de calidad para asegurar que cada
            grano cumpla con los más altos estándares, garantizando un producto
            final que destaque por su excelencia y consistencia en cada cocción.
          </p>
        </div>

        {/* Segundo bloque */}
        <div className="flex w-full md:w-5/12 flex-col gap-4">
          <h2 className="text-green-700 text-3xl font-bold uppercase max-w-96 ml-52">
            PRODUCCIÓN DE ARROZ DE GRANO CORTO
          </h2>
          <p className="text-gray-700 max-w-96  ml-52 text-justify">
            La empresa se distingue por brindar un producto de excelencia, que
            sobresale frente a otros arroces disponibles en el mercado gracias a
            sus cualidades únicas. Su sabor excepcional, su textura perfecta y
            su atractiva apariencia lo convierten en una opción premium, capaz
            de satisfacer incluso a los paladares más exigentes. Estas
            características no solo lo diferencian de la competencia, sino que
            también lo posicionan como una elección preferida entre los
            consumidores que buscan calidad y consistencia en cada grano.
          </p>
        </div>
        <div className="w-full md:w-5/12">
          <Image
            src="/images/Recurso 9.png"
            width={300}
            height={300}
            alt="Arroz de grano corto"
            className=" rounded-lg shadow-lg ml-12 mt-5"
          />
        </div>
      </section>

      <section className="relative w-full h-screen overflow-hidden flex flex-wrap justify-around items-center bg-white p-10 gap-6">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/Recurso 7.jpg"
          alt="Campo agrícola"
          width={400}
          height={400}
          className="w-full h-full object-cover scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Contenido de la izquierda */}
      <div className="relative z-10 text-white max-w-lg">
        <p className="text-green-400 font-semibold uppercase">Ponte en contacto</p>
        <h2 className="text-5xl font-bold">Innovadores en Métodos Agrícolas</h2>
      </div>

      {/* Formulario */}
      <div className="relative z-10 bg-gray-600 bg-opacity-90 p-6 rounded-lg w-96   max-w-md">
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Nombre Completo:"
            className=" m-2 p-2 w-full text-black rounded-md"
          />
          <input
            type="email"
            placeholder="Dirección de correo electrónico"
            className="m-2 p-2 w-full text-black rounded-md"
          />
          <input
            type="tel"
            placeholder="Número de Teléfono"
            className="m-2 p-2 w-full text-black rounded-md"
          />
          <textarea
            placeholder="¿Pregunta / Mensaje?"
            className="m-2 p-2 w-full text-black rounded-md h-12"
          ></textarea>
          <button className="m-2 bg-green-600 hover:bg-green-700 text-white px-4 py-4 rounded-md flex items-center justify-center gap-2">
            ENVIAR →
          </button>
        </form>
      </div>
    </section>
    </div>
  );
}

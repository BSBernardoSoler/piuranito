"use client";

import { FloatingCards } from "@/components/FloatingCard";
import NosotrosInicio from "@/components/NosotrosInicio";
import { Handshake, Heart, SquarePen } from "lucide-react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

export default function Nosotros() {
  return (
    <div>
      <NosotrosInicio />
      {/* Sección HISTORIA */}
      <section className="relative w-full flex flex-col items-center p-4 md:p-10 gap-6">
        <div className="flex flex-wrap justify-center items-center w-full">
          {/* Contenedor del texto */}
          <div className="max-w-xl text-left p-4 md:p-10">
             <Fade
                          delay={200} // Wait 200ms before starting
                          duration={1000} // Animation lasts 1 second
                          // Only animate once
                          fraction={0.5} // Start animation when element is 50% visible
                        >
            <h2 className="text-green-700 text-3xl md:text-4xl font-bold">HISTORIA</h2>
            <p className="text-black mt-4 text-base md:text-md leading-7">
              El 15 de junio de 2020, en pleno inicio de la pandemia de COVID-19, el mundo enfrentaba una coyuntura sin precedentes que afectó a casi todos
              los sectores económicos. Para muchas empresas, este periodo representó un desafío enorme, e incluso algunas estuvieron al borde del cierre.
              Sin embargo, en medio de la incertidumbre, surgió la oportunidad de reinventarse y adaptarse a las nuevas circunstancias.
            </p>
            <p className="text-black mt-2 text-base md:text-md leading-7">
              En este contexto, decidimos aprovechar el stop total que impuso la pandemia para reflexionar, invertir y modernizar nuestro molino. En lugar
              de ver este tiempo como un obstáculo, lo convertimos en una oportunidad para innovar y fortalecer nuestro negocio. Nos enfocamos en
              mejorar nuestros procesos y en adquirir maquinaria de alta tecnología, como secadoras y piladoras importadas desde China, con el objetivo de
              optimizar la producción y la selección de arroz. Estas implementaciones no solo nos permitieron aumentar la eficiencia, sino también elevar la
              calidad de nuestro producto final.
            </p>
            <p className="text-black mt-2 text-base md:text-md leading-7">
              Esta decisión fue crucial para adaptarnos a las nuevas demandas del mercado y para asegurar la continuidad del negocio en un escenario tan
              desafiante. La pandemia, aunque difícil, se convirtió en un catalizador para modernizar nuestras operaciones y prepararnos para un futuro
              más competitivo y sostenible.
            </p>
            </Fade>
          </div>

          {/* Imagen */}
          <FloatingCards>
          <div className="w-full md:w-[600px] h-[300px] md:h-[600px]">
          
            <Image
              src="/images/Recurso 5.jpg"
              alt="Cultivo de arroz"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            
          </div>
          </FloatingCards>
        </div>
      </section>

      {/* Sección EVOLUCIÓN EMPRESARIAL */}
      <section
        className="relative w-full h-auto md:h-screen flex items-start bg-cover bg-center p-4 md:p-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/Recurso 17.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto text-left text-white">
          <h2 className="text-green-400 text-2xl md:text-3xl font-bold flex items-center gap-2">
            <span className="text-3xl md:text-4xl">→</span> EVOLUCIÓN EMPRESARIAL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mt-6">
            <div className="relative mt-8 md:mt-80">
              <p className="text-sm md:text-md leading-6">
                Desde nuestros inicios hemos sido dedicados a mejorar nuestra calidad y servicio a nuestros clientes que nos ayuda a poder
                seguir manteniendo nuestra cartera de clientes en varías ciudades del Perú.
              </p>
              <div className="absolute  left-1/2 transform -translate-x-1/2 mt-2 animate-bounce">
                <span className="text-yellow-400 text-3xl md:text-4xl">↑</span>
              </div>
            </div>
            <div className="relative mt-8 md:mt-52">
              <p className="text-sm md:text-md leading-6">
                La implementación y constante innovación que adquirimos a través de nuestras modernas máquinas que nos permite crear un grano de
                calidad para una correcta cocción y selección.
              </p>
              <div className="absolute  left-1/2 transform -translate-x-1/2 mt-2 animate-bounce">
                <span className="text-yellow-400 text-3xl md:text-4xl">↑</span>
              </div>
            </div>
            <div className="relative mt-8 md:mt-36">
              <p className="text-sm md:text-md leading-6">
                La calidad en nuestro grano nos permite posicionarnos entre el top a nivel regional ya que nuestro sabor y cremosidad que
                caracteriza nuestro producto es un diferenciador clave.
              </p>
              <div className="absolute  left-1/2 transform -translate-x-1/2 mt-2 animate-bounce">
                <span className="text-yellow-400 text-3xl md:text-4xl">↑</span>
              </div>
            </div>
            <div className="relative mt-8 md:mt-16">
              <p className="text-sm md:text-md leading-6">
                La implementación y constante innovación que adquirimos a través de nuestras modernas máquinas que nos permite crear un grano de
                calidad para una correcta cocción y selección.
              </p>
              <div className="absolute  left-1/2 transform -translate-x-1/2 mt-2 animate-bounce">
                <span className="text-yellow-400 text-3xl md:text-4xl">↑</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección MISIÓN */}
      <section className="relative w-full flex flex-col items-center  p-4 md:p-10 gap-6">
        <div className="flex flex-wrap justify-center items-center w-full">
          {/* Imagen */}
          <div className="w-full md:w-[450px] h-[300px] md:h-[450px]">
            <FloatingCards>
            <Image
              src="/images/Recurso 24.png"
              alt="Cultivo de arroz"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            </FloatingCards>
          </div>
          {/* Contenedor del texto */}
          <div className="max-w-xl text-left p-4 md:p-10">
          <Fade
              delay={200} // Wait 200ms before starting
              duration={1000} // Animation lasts 1 second
              // Only animate once
              fraction={0.5} // Start animation when element is 50% visible
            >
            <h2 className="text-green-700 text-3xl md:text-4xl font-bold">MISIÓN</h2>
            <p className="text-black mt-4 text-base md:text-xl leading-7">
              Somos una empresa dedicada a la producción y comercialización de arroz, comprometidos con ofrecer el mejor producto de la región.
              Nos esforzamos por satisfacer las necesidades de todos nuestros clientes, brindando una amplia variedad de opciones que se adaptan
              a diferentes presupuestos, sin comprometer nunca la calidad que nos caracteriza. Nuestro objetivo es garantizar que cada grano de
              arroz que llega a su mesa cumpla con los más altos estándares de sabor, textura y frescura, manteniendo así la confianza y
              preferencia de quienes nos eligen. En nuestra empresa, la calidad no es una opción, es una promesa.
            </p>
            </Fade>
          </div>
        </div>
      </section>

      {/* Sección VALORES (CALIDAD, AMOR, COMPROMISO) */}
      <section className="relative h-auto md:h-screen flex items-center justify-center bg-cover bg-center p-4 md:p-10" style={{ backgroundImage: "url('/images/Recurso 6.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-20 text-white text-center">
          {/* Tarjeta CALIDAD */}
          <div className="flex flex-col items-center mt-8 md:mt-20">
            <div className="flex flex-col items-center bg-green-500 p-4 md:p-6 rounded-lg shadow-lg h-40 md:h-52 w-40 md:w-52">
              <SquarePen size={500} className=" " />
            </div>
            <h3 className="text-xl font-bold mt-4 bg-black px-4 py-1 w-40 md:w-52 text-green-600">CALIDAD</h3>
            <p className="mt-2 text-sm md:text-md max-w-40 md:max-w-52 text-justify">En nuestros productos, en nuestras diversas calidades de arroz.</p>
          </div>

          {/* Tarjeta AMOR */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center bg-green-600 p-4 md:p-6 rounded-lg shadow-lg h-40 md:h-52 w-40 md:w-52">
              <Heart size={400} className="" />
            </div>
            <h3 className="text-xl font-bold mt-4 bg-black px-4 py-1 w-40 md:w-52 text-green-600">AMOR</h3>
            <p className="mt-2 text-sm md:text-md max-w-40 md:max-w-52 text-justify">
              Hacia nuestros consumidores, el solo hecho de hacer arroz de calidad y accesible refleja nuestro valor más importante.
            </p>
          </div>

          {/* Tarjeta COMPROMISO */}
          <div className="flex flex-col items-center mt-8 md:mt-20">
            <div className="flex flex-col items-center bg-green-500 p-4 md:p-6 rounded-lg shadow-lg h-40 md:h-52 w-40 md:w-52">
              <Handshake size={400} className="" />
            </div>
            <h3 className="text-xl font-bold mt-4 bg-black px-4 py-1 w-40 md:w-52 text-green-600">COMPROMISO</h3>
            <p className="mt-2 text-sm md:text-md max-w-40 md:max-w-52 text-justify">
              Con nuestra calidad y servicios que ofrecemos, la competitividad que le ponemos a nuestro trabajo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


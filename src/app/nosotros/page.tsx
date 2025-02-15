"use client";

import NosotrosInicio from "@/components/NosotrosInicio";
import { Handshake, Heart, SquarePen } from "lucide-react";
import Image from "next/image";

export default function Nosotros() {
  return (
    <div>
      <NosotrosInicio />
   <section className="relative w-full flex flex-col items-center bg-white p-10 gap-6">
           {/* Contenedor principal */}
           <div className="flex flex-wrap justify-center items-center w-full">
             {/* Contenedor del texto */}
             <div className="max-w-xl text-left p-10">
               {/* Título */}
               <h2 className="text-green-700 text-4xl font-bold">HISTORIA</h2>
   
               {/* Descripción */}
               <p className="text-black mt-4 text-md leading-7">
                El 15 de junio de 2020, en pleno inicio de la pandemia de COVID-19, el mundo enfrentaba una coyuntura sin precedentes que afectó a casi todos
                los sectores económicos. Para muchas empresas, este periodo representó un desafío enorme, e incluso algunas estuvieron al borde del cierre.
                Sin embargo, en medio de la incertidumbre, surgió la oportunidad de reinventarse y adaptarse a las nuevas circunstancias.
               </p>
               <p className="text-black mt-2 text-md leading-7">
                En este contexto, decidimos aprovechar el stop total que impuso la pandemia para reflexionar, invertir y modernizar nuestro molino. En lugar
                de ver este tiempo como un obstáculo, lo convertimos en una oportunidad para innovar y fortalecer nuestro negocio. Nos enfocamos en
                mejorar nuestros procesos y en adquirir maquinaria de alta tecnología, como secadoras y piladoras importadas desde China, con el objetivo de
                optimizar la producción y la selección de arroz. Estas implementaciones no solo nos permitieron aumentar la eficiencia, sino también elevar la
                calidad de nuestro producto final
               </p>
               <p className="text-black mt-2 text-md leading-7">
                Esta decisión fue crucial para adaptarnos a las nuevas demandas del mercado y para asegurar la continuidad del negocio en un escenario tan
                desafiante. La pandemia, aunque difícil, se convirtió en un catalizador para modernizar nuestras operaciones y prepararnos para un futuro
                más competitivo y sostenible
               </p>
             </div>
   
             {/* Imagen */}
             <div className="w-[600px] h-[600px]">
               <Image
                 src="/images/Recurso 5.jpg"
                 alt="Cultivo de arroz"
                 width={600}
                 height={600}
                 className="w-full h-full object-cover rounded-lg shadow-md"
               />
             </div>
           </div>
   
          
         </section>

      <section
        className="relative w-full h-screen flex items-start bg-cover bg-center p-10  "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/Recurso 17.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="max-w-6xl mx-auto text-left text-white">
          {/* Título */}
          <h2 className="text-green-400 text-3xl font-bold flex items-center gap-2">
            <span className="text-4xl">→</span> EVOLUCIÓN EMPRESARIAL
          </h2>

          {/* Contenedor de textos */}
          <div className="grid grid-cols-4 gap-8 mt-6">
            {/* Bloques de texto */}
            <div className="relative mt-80 ">
              <p className="text-md leading-6 ">
                Desde nuestros inicios hemos sido dedicados a mejorar nuestra
                calidad y servicio a nuestros clientes que nos ayuda a poder
                seguir manteniendo nuestra cartera de clientes en varías
                ciudades del Perú
              </p>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 animate-bounce">
                <span className="text-yellow-400 text-4xl ">↑</span>
              </div>
            </div>
            <div className="relative mt-52 ">
              <p className="text-md leading-6">
                La implementación y constante innovación que adquirimos a través
                de nuestras modernas maquinas que nos permite crear un grano de
                calidad para una correcta cocción y selección
              </p>
              <div className="absolute  left-1/2 transform -translate-x-1/2 mt-2 animate-bounce">
                <span className="text-yellow-400 text-4xl ">↑</span>
              </div>
            </div>
            <div className="relative mt-36 ">
              <p className="text-md leading-6">
                La calidad en nuestro grano nos permite posicionarnos entre el
                top a nivel regional ya que nuestro sabor y cremosidad que
                caracteriza nuestro producto es un diferenciador clave .
              </p>
              <div className="absolute  left-1/2 transform -translate-x-1/2 mt-2  animate-bounce">
                <span className="text-yellow-400 text-4xl">↑</span>
              </div>
            </div>
            <div className="relative mt-16 ">
              <p className="text-md leading-6">
                La implementación y constante innovación que adquirimos a través
                de nuestras modernas maquinas que nos permite crear un grano de
                calidad para una correcta cocción y selección
              </p>
              <div className="absolute  left-1/2 transform -translate-x-1/2 mt-2 animate-bounce">
                <span className="text-yellow-400 text-4xl ">↑</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Mision*/}
      <section className="relative w-full flex flex-col items-center bg-white p-10 gap-6">
           
           {/* Contenedor principal */}
           <div className="flex flex-wrap justify-center items-center w-full">
            {/* Imagen */}
            <div className="w-[450px] h-[450px]">
               <Image
                 src="/images/Recurso 24.png"
                 alt="Cultivo de arroz"
                 width={400}
                 height={400}
                 className="w-full h-full object-cover rounded-lg shadow-md"
               />
             </div>
             {/* Contenedor del texto */}
             <div className="max-w-xl text-left p-10">
               {/* Título */}
               <h2 className="text-green-700 text-4xl font-bold">MISION</h2>
   
               {/* Descripción */}
               <p className="text-black mt-4 text-xl leading-7">
                Somos una empresa dedicada a la producción y comercialización de
                arroz, comprometidos con ofrecer el mejor producto de la región.
                Nos esforzamos por satisfacer las necesidades de todos nuestros
                clientes, brindando una amplia variedad de opciones que se adaptan
                a diferentes presupuestos, sin comprometer nunca la calidad que
                nos caracteriza. Nuestro objetivo es garantizar que cada grano de
                arroz que llega a su mesa cumpla con los más altos estándares de
                sabor, textura y frescura, manteniendo así la confianza y
                preferencia de quienes nos eligen. En nuestra empresa, la calidad no
                es una opción, es una promesa.
               </p>
       
             </div>
   
             
           </div>
   
          
         </section>

      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/Recurso 6.jpg')" }}>
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col md:flex-row gap-20 text-white text-center">
        {/* Tarjeta Calidad */}
        <div className="flex flex-col items-center mt-20  ">
          <div className="flex flex-col items-center bg-green-500 p-6 rounded-lg shadow-lg h-52 w-52">
          <SquarePen 
          size={500}
          /> {/* Ícono (puedes reemplazarlo con un SVG) */}
          </div>
          <h3 className="text-xl font-bold mt-4 bg-black px-4 py-1 w-52  text-green-600">CALIDAD</h3>
          <p className="mt-2 text-md max-w-52 text-justify">En nuestros productos,en nuestras diversas calidades de arroz</p>
        </div>

        {/* Tarjeta Amor */}
        <div className="flex flex-col items-center ">
          <div className="flex flex-col items-center bg-green-600 p-6 rounded-lg shadow-lg h-52 w-52 ">
          <Heart 
          size={500}
          />
           
          </div>
          <h3 className="text-xl font-bold mt-4 bg-black px-4 py-1 w-52 text-green-600 ">AMOR</h3>
            <p className="mt-2 text-md max-w-52 text-justify">
              Hacia nuestros consumidores, el solo hecho de hacer arroz de calidad y accesible refleja nuestro valor más importante.
            </p>
        </div>

        {/* Tarjeta Compromiso */}
        <div className="flex flex-col items-center mt-20">
          <div className="flex flex-col items-center bg-green-500 p-6 rounded-lg shadow-lg  w-52 h-52">
          <Handshake 
          size={500}
          />
            
          </div>
          <h3 className="text-xl font-bold mt-4 bg-black px-4 py-1 w-52 text-green-600">COMPROMISO</h3>
            <p className="mt-2 text-md max-w-52 text-justify">
              Con nuestra calidad y servicios que ofrecemos, la competitividad que le ponemos a nuestro trabajo.
            </p>
        </div>
      </div>
    </section>
    </div>
  );
}

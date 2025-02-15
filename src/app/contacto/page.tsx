"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";


export default function Contacto() {



  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
        <AnimatePresence mode="wait">
            <motion.div
              key={"w"}
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
                src={"/images/Recurso 1.png"}
                alt="Slide image"
                layout="fill"
                objectFit="cover"
                className="rounded-r-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex flex-col items-start justify-center  bg-black bg-opacity-50 text-white">
          <div className="ml-52 mb-52 text-justify flex flex-wrap justify-around items-center">
            <div>
              <p className="text-green-500 text-lg font-bold">
                Tus comentarios y preguntas nos ayudan a servirte mejor
              </p>
              <h1 className="text-5xl font-bold leading-tight">
                ¡Queremos Saber de Ti!
              </h1>
              <p className="mt-4 text-lg max-w-lg">
                En Nuestra Esencia, estamos comprometidos con ofrecerte el mejor
                arroz desde el campo hasta tu mesa. Si tienes dudas, comentarios
                o simplemente quieres saludarnos, ¡escríbenos! Nos encantaría
                escucharte.
              </p>
              `
            </div>
            <div className="bg-green-600 bg-opacity-30 text-white p-6 rounded-lg shadow-lg max-w-md w-full ml-20 mt-32">
              <h3 className="text-2xl font-bold mb-4">
                Siempre mantente en contacto con nosotros
              </h3>
              <form>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre completo"
                  required
                  className="w-full p-2 mb-4 rounded text-black"
                />

                <label htmlFor="email" className="block mb-2 text-sm">
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  required
                  className="w-full p-2 mb-4 rounded text-black"
                />

                <label htmlFor="phone" className="block mb-2 text-sm">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Tu número de teléfono"
                  required
                  className="w-full p-2 mb-4 rounded text-black"
                />

                <label className="flex items-center mb-4 text-sm">
                  <input type="checkbox" required className="mr-2" />
                  Acepto las Condiciones del servicio y la Política de
                  privacidad de Google
                </label>

                <button
                  type="submit"
                  className="bg-yellow-400 text-black py-2 px-4 rounded font-bold hover:bg-yellow-500"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
            `
          </div>
        </div>
      </div>

    </div>
  );
}

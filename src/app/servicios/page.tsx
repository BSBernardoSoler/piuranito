"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Servicios() {
  return (
    <div className="">
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
                src={"/images/Recurso 23.jpg"}
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
            Conoce mas sobre nuestros servicios
          </p>
          <h1 className="text-5xl font-bold leading-tight">
            TÚ NOS HACES <br /> SALIR ADELANTE
          </h1>
          <p className="mt-4 text-lg max-w-lg">
            Brinda el servicio de producción de arroz de grano selecto y de la
            mejor calidad, con puntos de venta en los principales centros de
            abastos de la región, también en ciudades como Cuzco, Lima,
            Arequipa.
          </p>
        </div>
      </div>

      <section className="relative w-full flex flex-col items-center bg-white p-10 gap-6">
        {/* Contenedor principal */}
        <div className="flex flex-wrap justify-center items-center w-full">
          {/* Contenedor del texto */}
          <div className="max-w-xl text-left px-4">
            {/* Título */}
            <h2 className="text-green-700 text-4xl font-bold">ARROZ BLANCO</h2>

            {/* Descripción */}
            <p className="text-black mt-4 text-lg leading-7">
              Es un cereal básico que se consume ampliamente en muchas culturas.
              Es una buena fuente de carbohidratos complejos, que proporcionan
              energía al cuerpo. Sin embargo, durante su proceso de refinado,
              pierde parte de sus nutrientes. A pesar de esto, aún contiene
              pequeñas cantidades de proteínas, vitaminas del complejo B (como
              B1 y B3) y minerales como el hierro, aunque estos nutrientes no
              están en niveles tan altos como en el arroz integral.
            </p>

            {/* Recomendación */}
            <h3 className="text-green-700 text-2xl font-bold mt-6">
              RECOMENDACIÓN
            </h3>
            <p className="text-black mt-2 text-lg leading-7">
              Es clave equilibrar el consumo de arroz blanco, por su alto índice
              glucémico. Además, controlar el tamaño de las porciones también es
              importante para evitar picos de azúcar en sangre.
            </p>
          </div>

          {/* Imagen */}
          <div className="w-[600px] h-[500px]">
            <Image
              src="/images/Recurso 18.png"
              alt="Cultivo de arroz"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Beneficios */}
        <div className="w-full text-center mt-6">
          <h3 className="text-green-700 text-2xl font-bold">
            QUE BENEFICIOS INCLUYEN:
          </h3>

          <div className="flex justify-center gap-10 mt-4">
            <p className="text-black text-lg font-medium">Bajo en grasas</p>
            <p className="text-black text-lg font-medium">
              Fuente de energéticos
            </p>
            <p className="text-black text-lg font-medium">Bajo en fibra</p>
          </div>
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center bg-white p-10 gap-6">
        {/* Contenedor principal */}
        <div className="flex flex-wrap justify-center items-center w-full">
          {/* Imagen */}
          <div className="w-600px] h-[500px]">
            <Image
              src="/images/Recurso 19.png"
              alt="Cultivo de arroz"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          {/* Contenedor del texto */}
          <div className="max-w-xl text-left px-8">
            {/* Título */}
            <h2 className="text-green-700 text-4xl font-bold">
              ARROZ INTEGRAL
            </h2>

            {/* Descripción */}
            <p className="text-black mt-4 text-lg leading-7">
              El arroz integral es una opción más nutritiva en comparación con
              el arroz blanco, ya que conserva su capa externa (el salvado), que
              es rica en fibra, vitaminas y minerales. A diferencia del arroz
              blanco, que es refinado, el arroz integral mantiene una mayor
              cantidad de nutrientes, lo que lo convierte en una opción más
              saludable para una dieta equilibrada
            </p>

            {/* nutrientes */}
            <h3 className="text-green-700 text-2xl font-bold mt-6">
              NUTRIENTES PRINCIPALES{" "}
            </h3>
            <p className="text-black mt-2 text-lg leading-7">
              El arroz integral es una excelente fuente de fibra, que favorece
              la digestión y promueve la salud intestinal, además de contener
              carbohidratos complejos que proporcionan energía de manera
              sostenida, evitando picos altos de azúcar en sangre. Asimismo,
              contiene más proteínas que el arroz blanco, lo que contribuye a la
              reparación de tejidos y al crecimiento muscular
            </p>
          </div>
        </div>

        {/* Beneficios */}
        <div className="w-full text-center mt-6">
          <h3 className="text-green-700 text-2xl font-bold">BENEFICIOS:</h3>

          <div className="flex justify-center gap-10 mt-4">
            <p className="text-black text-lg font-medium">Regula azúcar</p>
            <p className="text-black text-lg font-medium">
              Favorece la digestión
            </p>
            <p className="text-black text-lg font-medium">
              Favorece la saciedad
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center bg-white p-10 gap-6">
        {/* Contenedor principal */}
        <div className="flex flex-wrap justify-center items-center w-full">
          {/* Contenedor del texto */}
          <div className="max-w-xl text-left px-10">
            {/* Título */}
            <h2 className="text-green-700 text-4xl font-bold">
              ARROZ PARBOLIZADO
            </h2>

            {/* Descripción */}
            <p className="text-black mt-4 text-lg leading-7">
              Es un tipo de arroz que ha sido parcialmente hervido en su cáscara
              antes de ser procesado. Este proceso ayuda a que el arroz conserve
              más nutrientes que el arroz blanco, ya que el calor y el agua
              permiten que parte de las vitaminas y minerales del salvado se
              transfieran al grano
            </p>

            {/* Recomendación */}
            <h3 className="text-green-700 text-2xl font-bold mt-6">
              NUTRIENTES PRINCIPALES
            </h3>
            <p className="text-black mt-2 text-lg leading-7">
              El arroz parbolizado es una excelente fuente de carbohidratos
              complejos, proporcionando energía rápida pero con un índice
              glucémico más bajo que el arroz blanco, lo que ayuda a regular los
              niveles de azúcar en sangre de manera más gradual. Aunque no tiene
              tanta fibra como el arroz integral, contiene más fibra que el
              arroz blanco, favoreciendo la digestión y brindando mayor
              saciedad. Además, es rico en vitaminas del complejo B, como la B1
              y B6, esenciales para el metabolismo energético y el buen
              funcionamiento del sistema nervioso.
            </p>
            {/* Recomendación */}
            <h3 className="text-green-700 text-2xl font-bold mt-6">
              RECOMENDACIÓN:
            </h3>
            <p className="text-black mt-2 text-lg leading-7">
              El arroz parbolizado es una excelente opción si buscas un balance
              entre la nutrición del arroz integral y la conveniencia del arroz
              blanco. Puedes incorporarlo en tu dieta como fuente de energía
              saludable, y combinarlo con proteínas, verduras y grasas
              saludables para obtener una comida completa.
            </p>
          </div>

          {/* Imagen */}
          <div className="w-[500px] h-[700px]">
            <Image
              src="/images/Recurso 20.png"
              alt="Cultivo de arroz"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Beneficios */}
        <div className="w-full text-center mt-6">
          <h3 className="text-green-700 text-2xl font-bold">
            QUE BENEFICIOS INCLUYEN:
          </h3>

          <div className="flex justify-center gap-10 mt-4">
            <p className="text-black text-lg font-medium">Bajo en grasas</p>
            <p className="text-black text-lg font-medium">
              Fuente de energéticos
            </p>
            <p className="text-black text-lg font-medium">Bajo en fibra</p>
          </div>
        </div>
      </section>

      <section className="relative w-full h-screen overflow-hidden flex flex-wrap justify-center items-center bg-white p-10 gap-6">
        {/* Imagen del arroz */}
        <div className="w-[600px] h-[400px]">
          <Image
            src="/images/Recurso 21.png"
            alt="Cultivo de arroz quebrado"
            className="w-full h-full object-cover rounded-lg shadow-md"
            width={400}
            height={400}
          />
        </div>

        {/* Contenedor del texto */}
        <div className="max-w-xl text-left px-2">
          {/* Título */}
          <h2 className="text-green-700 text-4xl font-bold">ARROZ QUEBRADO</h2>

          {/* Descripción */}
          <p className="text-black mt-4 text-lg leading-7">
            El arroz quebrado es una variedad de arroz que se produce cuando los
            granos se rompen durante el proceso de molienda, resultando en
            fragmentos más pequeños en comparación con el arroz entero. Aunque
            su apariencia puede ser menos uniforme, comparte muchas
            características con el arroz blanco, como su sabor neutro y su
            capacidad para absorber sabores. Su textura más suave y rápida
            cocción lo hacen ideal para sopas, risottos y postres.
          </p>

          {/* Sección de Nutrientes */}
          <h3 className="text-green-700 text-2xl font-bold mt-6">
            NUTRIENTES PRINCIPALES
          </h3>
          <p className="text-black mt-2 text-lg leading-7">
            Al igual que el arroz blanco, es rico en carbohidratos complejos,
            proporcionando energía rápida. Contiene pequeñas cantidades de
            proteínas y algo de vitamina B1 (tiamina) y B6, esenciales para el
            metabolismo energético y el sistema nervioso.
          </p>
        </div>
      </section>
    </div>
  );
}

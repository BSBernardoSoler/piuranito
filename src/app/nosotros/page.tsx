import Image from 'next/image';

export default function Nosotros() {
  return (
    <div>
      {/* Sobre Nosotros */}
      <section className="flex flex-wrap justify-around items-center bg-white p-10 gap-6">
        <div className="text-black max-w-md">
          <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
          <p>
            Arroz del Piurano es una marca que nació en 1996 gracias al emprendimiento de Jorge Arce,
            quien adquirió un terreno en La Unión, Piura, para construir un molino de arroz. Inicialmente, solo producían
            polvillo, pero con el tiempo comenzaron a vender arroz, destacándose en el mercado por el sabor característico
            del grano del Bajo Piura. Hace cinco años, la empresa adquirió máquinas aleñadoras y selectoras para mejorar su
            proceso de producción, consolidando su crecimiento y calidad.
          </p>
        </div>
        <Image
          src="/Recurso 2.png"
          alt="Campo de arroz"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Nuestra Historia */}
      <section className="flex flex-wrap-reverse justify-around items-center bg-green-600 text-white p-10 gap-6">
        <Image
          src="/Recurso 3.png"
          alt="Campo de arroz"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
          <p>
            Un 15 de junio 2020, a inicios de la pandemia, dos hermanas decidieron transformar su tiempo libre en una
            oportunidad de negocio, lanzando Batido y al horno, su propia marca de repostería inspirada por DOLCE, un
            pequeño proyecto de una de ellas en la adolescencia, donde vendía postres caseros en el colegio.
          </p>
          <p>
            Retomaron esa pasión y comenzaron a crear desde la cocina de su madre con una inversión inicial de solo 200 soles,
            ofreciendo sus productos a familiares y amigos, y pronto, con el deseo de crecer, impulsaron la marca en redes
            sociales.
          </p>
          <p>
            Así, digitalizaron el negocio y lograron atraer cada vez a más clientes, consolidando su presencia en el mercado.
          </p>
        </div>
      </section>

      {/* Visión */}
      <section className="flex flex-wrap justify-around items-center bg-green-600 text-white p-10  my-2 gap-6">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4">Trayectoria</h2>
          <p>
            Con 4 años de experiencia en el negocio, han logrado un crecimiento constante, adaptándose a
            las nuevas tendencias y tecnologías en la ciudad de Chiclayo.
          </p>
          <p>
            Actualmente, cuentan con un taller de producción y planean abrir su propio local.
          </p>
        </div>
        <Image
          src="/Recurso 4.png"
          alt="Arroz en un recipiente"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </section>

      {/* Misión */}
      <section className="flex flex-wrap justify-around items-center bg-white p-10 gap-6">
        <Image
          src="/Recurso 5.png"
          alt="Bol con arroz"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div className="max-w-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Nuestra Misión</h2>
          <p>
            En Batido y al Horno, nuestra misión es crear momentos especiales para nuestros clientes a través de la elaboración
            de pasteles y postres artesanales de alta calidad.
          </p>
          <p>
            Nos comprometemos a utilizar ingredientes frescos y naturales, siguiendo un proceso artesanal que garantice el sabor
            y la excelencia en cada producto.
          </p>
          <p>
            Ofrecemos un servicio personalizado y accesible, cuidando cada detalle para satisfacer las necesidades y deseos de
            nuestros clientes.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-green-600 text-white text-center p-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Nuestros Valores</h2>
        <div className="flex justify-center gap-10">
          {[
            { name: 'Calidad', img: '/Recurso 6.png' },
            { name: 'Amor', img: '/Recurso 7.png' },
            { name: 'Frescura', img: '/Recurso 9.png' },
          ].map((value, index) => (
            <div key={index} className="text-center">
              <Image
                src={value.img}
                alt={value.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p>{value.name}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}

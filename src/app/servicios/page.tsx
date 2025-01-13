import Image from 'next/image';

export default function Servicios() {
  const otrosServicios = [
    {
      name: 'ARROZ BLANCO',
      description: 'Producto refinado y pulido, ideal para consumo general.',
      imagen: '/Recurso 15.png',
    },
    {
      name: 'ARROZ INTEGRAL',
      description: 'Es más nutritivo y rico en fibra, popular entre consumidores saludables.',
      imagen: '/Recurso 16.png',
    },
    {
      name: 'ARROZ PARBOLIZADO',
      description:
        'Proporcionado antes de retirarle la cáscara con más nutrientes y menos propenso a romperse durante la cocción.',
      imagen: '/Recurso 17.png',
    },
    {
      name: 'ARROZ QUEBRADO',
      description:
        'Más económico, utilizado en la industria alimenticia o para la producción de harinas y alimentos para animales.',
      imagen: '/Recurso 18.png',
    },
  ];

  return (
    <div className="">
      {/* Servicios Section */}
      <section className="flex flex-col md:flex-row justify-center items-center bg-white p-10 gap-8 max-w-screen-lg mx-auto">
        <div className="bg-green-600 text-white p-5 px-32 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-4xl font-bold mb-4">Servicios</h2>
          <p>
            Brinda el servicio de producción de arroz de grano selecto y de la mejor calidad, con puntos de venta en los
            principales centros de abastos de la región, también en ciudades como Cuzco, Lima, Arequipa.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <Image
            src="/Recurso 10.png"
            alt="Imagen de servicio principal, mostrando arroz de alta calidad."
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Servicio Principal */}
      <section className="bg-gray-50 text-center p-10">
        <h2 className="text-3xl font-bold mb-6">SERVICIO PRINCIPAL</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-screen-lg mx-auto">
          {[
            {
              imgSrc: '/Recurso 11.png',
              title: 'PRODUCCIÓN DE ARROZ DE GRANO SELECTO',
              description:
                'Esto implica un proceso cuidadoso desde la selección de las mejores variedades de arroz, hasta el cultivo, cosecha y procesamiento, asegurando que cada grano cumpla con los estándares de calidad más altos.',
            },
            {
              imgSrc: '/Recurso 12.png',
              title: 'CALIDAD SUPERIOR EN ARROZ',
              description:
                'La empresa se destaca por ofrecer un producto superior, que se diferencia de otros arroces en el mercado por su sabor, textura y apariencia.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className=" p-6 rounded-lg  w-full md:w-5/12 flex flex-col items-center"
            >
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={400}
                height={300}
                className="rounded-lg mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Otros Servicios */}
      <section className="bg-white text-center p-10">
        <h2 className="text-3xl font-bold mb-6">OTROS SERVICIOS</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-screen-lg mx-auto">
          {otrosServicios.map((service, index) => (
            <div
              key={index}
              className=" p-6 rounded-lg  w-full md:w-5/12 flex flex-col items-center"
            >
              <Image
                src={service.imagen}
                alt={`Imagen de ${service.name}`}
                width={400}
                height={300}
                className="rounded-lg mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

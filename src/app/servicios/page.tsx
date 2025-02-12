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
  

      {/* Otros Servicios */}
      <section className="bg-green-600 bg-opacity-10 text-center p-10">
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

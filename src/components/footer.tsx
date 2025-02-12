import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1E1D1D] text-white py-10 px-6 md:px-20 flex flex-wrap justify-between items-start">
      {/* Logo y descripción */}
      <div className="w-full md:w-1/4 flex flex-col gap-2">
        <Image src="/images/Logo Positivo.png" width={150} height={50} alt="Logo Arroz Puranito" />
        <p className="text-sm text-gray-400">
          Del campo a tu mesa calidad, tradición y sabor en cada grano
        </p>
      </div>

      {/* Menú */}
      <div className="w-full md:w-1/4 flex flex-col gap-2">
        <a href="#" className="text-white hover:text-gray-400 transition">
          Inicio
        </a>
        <a href="#" className="text-white hover:text-gray-400 transition">
          Nosotros
        </a>
        <a href="#" className="text-white hover:text-gray-400 transition">
          Servicios
        </a>
      </div>

      {/* Contacto */}
      <div className="w-full md:w-1/4 flex flex-col gap-2">
        <h3 className="text-white font-bold">Contáctanos</h3>
        <p className="text-gray-400 text-sm">Atención al cliente: +51 968 809 557</p>
        <p className="text-gray-400 text-sm">Dirección</p>
      </div>

      {/* Suscripción */}
      <div className="w-full md:w-1/4 flex flex-col gap-2">
        <h3 className="text-white font-bold">Sigue actualizado:</h3>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email"
            className="px-3 py-2 w-full text-black rounded-md"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white p-1  rounded-md flex items-center gap-2">
            ENVIAR
          </button>
        </div>
      </div>
    </footer>
  );
}


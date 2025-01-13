import Image from 'next/image';

export default function Contacto() {
  return (
    <div>
     

      {/* Contact Section */}
      <section className="flex flex-wrap justify-around items-center bg-gray-100 p-10 gap-6">
        <Image
          src="/Recurso 10.png"
          alt="Paisaje de contacto"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h3 className="text-2xl font-bold mb-4">Siempre mantente en contacto con nosotros</h3>
          <form>
            <label htmlFor="name" className="block mb-2 text-sm">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre completo"
              required
              className="w-full p-2 mb-4 rounded text-black"
            />

            <label htmlFor="email" className="block mb-2 text-sm">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
              className="w-full p-2 mb-4 rounded text-black"
            />

            <label htmlFor="phone" className="block mb-2 text-sm">Teléfono</label>
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
              Acepto las Condiciones del servicio y la Política de privacidad de Google
            </label>

            <button
              type="submit"
              className="bg-yellow-400 text-black py-2 px-4 rounded font-bold hover:bg-yellow-500"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>


    </div>
  );
}

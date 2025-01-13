import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <header className="bg-green-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center bg-white rounded-md p-1">
          <Image src="/LOGOTIPO.png" alt="Logo" width={50} height={50} className="rounded-md" />
          <span className='text-green-600'>Arroz el Piuranito</span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          {[
            { href: '/', label: 'Inicio' },
            { href: '/nosotros', label: 'Nosotros' },
            { href: '/servicios', label: 'Servicios' },
            { href: '/contacto', label: 'Contacto' },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="text-white font-semibold hover:text-green-300 hover:underline transition-all duration-200">
                {item.label}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

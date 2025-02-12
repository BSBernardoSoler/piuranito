'use client';

import Image from 'next/image';
import Link from 'next/link';
import {  LogOut, Menu, X } from 'lucide-react';

import { useState } from 'react';

 // Asegúrate de ajustar la ruta según tu estructura.







export const Nav = () => {

  
  const [showSidebar, setShowSidebar] = useState(false);
  const [showUserPopover, setShowUserPopover] = useState(false);
 





  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const closeSidebar = () => setShowSidebar(false);
  const toggleUserPopover = () => setShowUserPopover(!showUserPopover);
 


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={'/images/Logo.png'}
                width={150}
                height={40}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className="text-green-600 p-2 rounded-md focus:outline-none"
            >
              {showSidebar ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8 ">
            <NavLink textColor="green-600"href="/">Inicio</NavLink>
            <NavLink  textColor="green-600"href="/nosotros">Nosotros</NavLink>
            <NavLink  textColor="green-600"href="/servicios">Servicios</NavLink>
            <NavLink  textColor="green-600"href="/contacto">Contacto</NavLink>
            
          </div>

          <div className="relative flex items-center space-x-3">
            
              <div className='hidden'>
                <button
                  onClick={toggleUserPopover}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800/50 hover:bg-slate-800 transition-colors"
                >
                  <div className="relative w-6 h-6 rounded-full overflow-hidden bg-slate-700">
                    <Image
                      src={ '/placeholder.svg'}
                      alt={'User avatar'}
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="hidden sm:inline text-sm font-medium text-white">
                    asfsadfasdf
                  </span>
                </button>

                {showUserPopover && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#020817] border border-slate-800 rounded-lg shadow-lg">
                    <ul className="divide-y divide-slate-700">
                  
                        <li
                          onClick={() => {}}
                          className="flex items-center px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                        >
                          <LogOut className="mr-2 w-5 h-5" />
                          Cerrar sesión
                        </li>
                      
                    </ul>
                  </div>
                )}
              </div>
           
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-y-0 left-0 bg-white transform ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 w-64`}
      >
        <div className="flex flex-col h-full p-4 space-y-4">
          <NavLink textColor="green-600"href="/" onClick={closeSidebar}>
            Inicio
          </NavLink>
          <NavLink  textColor="green-600" href="/nosotros" onClick={closeSidebar}>
            Nosotros
          </NavLink>
          <NavLink textColor="green-600" href="/servicios" onClick={closeSidebar}>
            Servicios
          </NavLink>
          <NavLink textColor="green-600" href="/contacto" onClick={closeSidebar}>
            Contacto
          </NavLink>
         

          <button
            onClick={closeSidebar}
            className="text-green-600 hover:text-white mt-auto"
          >
            Cerrar menú
          </button>
        </div>
      </div>
 
    
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  comingSoon?: boolean;
  onClick?: () => void;
  textColor: string;
}

function NavLink({ href, children, onClick,textColor }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center text-md px-3 py-2 text-${textColor}  font-semibold hover:text-yellow-200 transition-colors`}
    >
      {children}
    </Link>
  );
}

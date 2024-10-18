import React, { useState, useEffect } from 'react';
import { ChartPieIcon, ShoppingCartIcon, EnvelopeIcon, ChatBubbleBottomCenterIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Escuchar cambios en el tamaño de la ventana para ajustar la visibilidad de la sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false); // Oculta la sidebar en pantallas pequeñas
      } else {
        setIsOpen(true); // Muestra la sidebar en pantallas grandes
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llama a handleResize al montar el componente para establecer el estado inicial

    return () => window.removeEventListener('resize', handleResize); // Limpiar el event listener al desmontar el componente
  }, []);

  return (
    <div
      id="sideBar"
      className={`relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl transition-all duration-300 ${isOpen ? '' : 'hidden'}`}
    >
      <div className="flex flex-col">
        <div className="text-right hidden md:block mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-500 hover:text-red-600 transition-colors duration-300"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">Homes</p>

        <a href="./index.html" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500 flex items-center">
          <ChartPieIcon className="h-5 w-5 text-gray-400 mr-2" />
          Analytics dashboard
        </a>
        <a href="./index-1.html" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500 flex items-center">
          <ShoppingCartIcon className="h-5 w-5 text-gray-400 mr-2" />
          Ecommerce dashboard
        </a>

        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Apps</p>

        <a href="./email.html" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500 flex items-center">
          <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
          Email
        </a>
        <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500 flex items-center">
          <ChatBubbleBottomCenterIcon className="h-5 w-5 text-gray-400 mr-2" />
          Chat
        </a>
        <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500 flex items-center">
          <ShieldCheckIcon className="h-5 w-5 text-gray-400 mr-2" />
          Todo
        </a>
      </div>
    </div>
  );
};

export default Sidebar;


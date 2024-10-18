import React, { useState } from 'react';
import { 
  ChartPieIcon, 
  ShoppingCartIcon, 
  EnvelopeIcon, 
  ChatBubbleBottomCenterIcon, 
  ShieldCheckIcon, 
  Bars3Icon, 
  AcademicCapIcon, // Icono para Docentes
  InboxIcon, // Icono para Bandeja de Entrada
  CreditCardIcon, // Icono para Gestión de Pagos
} from '@heroicons/react/24/solid';

const Sidebar = ({ setActivePage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Icono de hamburguesa para pantallas pequeñas */}
      <button 
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-purple-600 text-white rounded-full focus:outline-none" 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div 
        id="sideBar" 
        className={`fixed z-10 top-0 left-0 h-full bg-white border-r border-gray-300 p-6 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:translate-x-0 md:w-64 lg:w-72 xl:w-80 shadow-xl`}
      >
        <div className="flex flex-col h-full">
          <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">Gestionar</p>

          {/* Enlaces del Sidebar */}
          <button 
            onClick={() => setActivePage('courses')} 
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 flex items-center"
          >
            <ChartPieIcon className="h-5 w-5 text-gray-400 mr-2" />
            Gestionar Cursos
          </button>

          <button 
            onClick={() => setActivePage('admins')} 
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 flex items-center"
          >
            <ShoppingCartIcon className="h-5 w-5 text-gray-400 mr-2" />
            Gestionar Administradores
          </button>

          <button 
            onClick={() => setActivePage('users')} 
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 flex items-center"
          >
            <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
            Usuarios
          </button>

          <button 
            onClick={() => setActivePage('scholarships')} 
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 flex items-center"
          >
            <ChatBubbleBottomCenterIcon className="h-5 w-5 text-gray-400 mr-2" />
            Gestión de Becas
          </button>

          <button 
            onClick={() => setActivePage('certificates')} 
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 flex items-center"
          >
            <ShieldCheckIcon className="h-5 w-5 text-gray-400 mr-2" />
            Gestión de Certificados
          </button>

          <button 
            onClick={() => setActivePage('statistics')} 
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 flex items-center"
          >
            <ChartPieIcon className="h-5 w-5 text-gray-400 mr-2" />
            Estadísticas
          </button>

          {/* Nueva opción: Gestión de Docentes */}
          <button 
            onClick={() => setActivePage('teachers')} 
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 flex items-center"
          >
            <AcademicCapIcon className="h-5 w-5 text-gray-400 mr-2" />
            Gestión de Docentes
          </button>

          {/* Nueva opción: Bandeja de Entrada */}
          <button 
            onClick={() => setActivePage('inbox')} 
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 flex items-center"
          >
            <InboxIcon className="h-5 w-5 text-gray-400 mr-2" />
            Bandeja de Entrada
          </button>

          {/* Nueva opción: Gestión de Pagos */}
          <button 
            onClick={() => setActivePage('payments')} 
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 flex items-center"
          >
            <CreditCardIcon className="h-5 w-5 text-gray-400 mr-2" />
            Gestión de Pagos
          </button>
        </div>
      </div>

      {/* Background overlay cuando el sidebar esté abierto en pantallas pequeñas */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)} 
        />
      )}
    </>
  );
};

export default Sidebar;

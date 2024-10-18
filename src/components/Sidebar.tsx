import React from 'react';
import DropdownButton from './DropMenu';
import {
  HomeIcon,
  InboxIcon,
  UserGroupIcon, 
  AcademicCapIcon,
  BookOpenIcon, 
  DocumentTextIcon, 
  CreditCardIcon
} from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      {/* Logo Area - Fijo */}
      <div className="flex items-center justify-start h-24 pl-4">
        <img src="/path-to-your-logo/logo.png" alt="ADMIN" className="h-8 w-8" />
        <span className="text-xl font-semibold ml-2">ADMINISTRACIÓN</span>
      </div>

      {/* Scrollable Menu Items */}
      <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-4">
        <p className="text-xs uppercase text-gray-400">MENU</p>        
        {/* Pantalla principal con estadísticas */}
        <div className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          <HomeIcon className="h-6 w-6" />
          <span>Principal</span>
        </div>

        {/* Bandeja de entrada */}
        <div className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          <InboxIcon className="h-6 w-6" />
          <span>Bandeja de entrada</span>
        </div>

        <p className="text-xs uppercase text-gray-400">OTORGAR PERMISOS</p>

        {/* Administradores */}
        <div className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          <UserGroupIcon className="h-6 w-6" />
          <span>Administradores</span>
        </div>

        {/* Docentes */}
        <div className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          <AcademicCapIcon className="h-6 w-6" />
          <span>Docentes</span>
        </div>

        <DropdownButton />

        <p className="text-xs uppercase text-gray-400">CONTENIDO</p>

        {/* Cursos */}
        <div className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          <BookOpenIcon className="h-6 w-6" />
          <span>Cursos</span>
        </div>

        {/* Certificados */}
        <div className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          <DocumentTextIcon className="h-6 w-6" />
          <span>Certificados</span>
        </div>

        <p className="text-xs uppercase text-gray-400">GESTION</p>

        {/* Pagos */}
        <div className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
          <CreditCardIcon className="h-6 w-6" />
          <span>Pagos</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
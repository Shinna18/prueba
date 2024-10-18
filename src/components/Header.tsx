import React from 'react';
<<<<<<< HEAD

// Definición del tipo de los props
interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <div className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-700">Panel de Administración</h1>
      <div className="flex items-center space-x-4">
        <p className="text-gray-600">Bienvenido, {username}</p>
        <button className="bg-gray-300 px-4 py-2 rounded-md">Cerrar sesión</button>
      </div>
    </div>
=======
import { BellIcon, ChatBubbleOvalLeftEllipsisIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import DarkModeSwitcher from './DarkMode';
import UserMenu from './UserMenu';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-white border-b-4 border-gray-200">

      {/* Search Bar */}
      <div className="relative flex items-center">
        <MagnifyingGlassIcon className="absolute left-1 h-6 w-6 text-gray-500" />
        <input
          type="text"
          placeholder="Escribe para buscar..."
          className="pl-10 pr-4 py-2 text-lg w-80 focus:outline-none"  
        />
      </div>

      {/* Icons and User Area */}
      <div className="flex items-center gap-6">
        
        <DarkModeSwitcher />

        {/* Notifications */}
        <button className="relative p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <BellIcon className="h-6 w-6 text-gray-600" />
        </button>

        {/* Messages */}
        <button className="relative p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-gray-600" />
        </button>

        <UserMenu nombre="Lenner" cargo="SUPERADMIN" imageSrc=''/>

      </div>
    </header>
>>>>>>> 62852edd8e999b1238fb33d97f6089d7bfbdf300
  );
};

export default Header;
<<<<<<< HEAD
=======

>>>>>>> 62852edd8e999b1238fb33d97f6089d7bfbdf300

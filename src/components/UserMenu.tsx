import React, { useState, useEffect, useRef } from 'react';
import { UserIcon, Cog6ToothIcon, BookOpenIcon, ArrowRightOnRectangleIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface DropdownButtonProps {
  nombre: string;
  imageSrc: string;
  cargo: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ nombre, imageSrc, cargo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Función para cerrar el menú cuando se hace clic fuera
  const handleClickOutside = (event: MouseEvent) => {
    // Si el clic no fue en el botón o en el menú, cerrar el menú
    if (
      menuRef.current && 
      !menuRef.current.contains(event.target as Node) && 
      buttonRef.current && 
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen (false)
    }
  };

  // Añadir listener para detectar clics fuera del menú
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Botón principal con imagen, texto e ícono */}
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 p-2 bg-white focus:outline-none w-40"
      >
        <div className="flex-1 text-left">
          <p className="text-sm font-semibold">{nombre}</p>
          <p className="text-xs text-gray-500">{cargo}</p>
        </div>
        <img src={imageSrc} alt="User Avatar" className="h-10 w-10 rounded-full border" />
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-600" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-600" />
        )}
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute right-0 mt-6 w-64 rounded-b-lg border border-t-0 border-gray-300 bg-white shadow-lg z-10">
          <div className="p-2 space-y-2">
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <UserIcon className="h-5 w-5 text-gray-600" />
              <span>My Profile</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <BookOpenIcon className="h-5 w-5 text-gray-600" />
              <span>My Contacts</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <Cog6ToothIcon className="h-5 w-5 text-gray-600" />
              <span>Account Settings</span>
            </div>
            <div className="border-t border-gray-200"></div> {/* Separador */}
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-600" />
              <span>Log Out</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

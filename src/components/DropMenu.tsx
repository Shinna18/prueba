import React, { useState } from 'react';
import { UserIcon, ChevronDownIcon, ChevronUpIcon, AcademicCapIcon, CreditCardIcon } from '@heroicons/react/24/outline';

const UserDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      {/* Botón principal */}
      <button
        onClick={toggleMenu}
        className="flex justify-between items-center w-full p-2 pl-2 pr-4 text-white hover:bg-gray-700 rounded-md"
      >
        <div className="flex items-center gap-2">
          <UserIcon className="h-6 w-6" />
          <span>Usuario</span>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-300" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-300" />
        )}
      </button>

      {/* Menú desplegable debajo del botón */}
      {isOpen && (
        <div className="mt-2 w-full rounded-md bg-gray-800 text-white">
          <div className="py-1">
            {/* Botón Activar Plan */}
            <button
              className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-700"
              onClick={() => alert('Activar Plan')}
            >
              <CreditCardIcon className="h-5 w-5 text-gray-300" />
              Activar Plan
            </button>

            {/* Botón Activar Beca */}
            <button
              className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-700"
              onClick={() => alert('Activar Beca')}
            >
              <AcademicCapIcon className="h-5 w-5 text-gray-300" />
              Activar Beca
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;

import React from 'react';

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
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const DarkModeSwitcher: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative flex items-center h-8 w-16 rounded-full p-1 transition-colors duration-300 ${
        darkMode ? 'bg-gray-600' : 'bg-gray-300'
      }`}
    >
      {/* Círculo deslizante */}
      <div
        className={`h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          darkMode ? 'translate-x-8' : 'translate-x-0'
        }`}
      >
        {/* Mostrar icono de sol o luna según el estado */}
        {darkMode ? (
          <MoonIcon className="h-4 w-4 text-gray-500 mx-auto mt-1" />
        ) : (
          <SunIcon className="h-4 w-4 text-yellow-500 mx-auto mt-1" />
        )}
      </div>
    </button>
  );
};

export default DarkModeSwitcher;

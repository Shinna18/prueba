import React, { useState } from 'react';

const TeacherManagement = () => {
  // Estado para manejar la visibilidad del formulario
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    username: '',
    password: '',
  });

  // Función para alternar la visibilidad del formulario
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="teacher-management">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-purple-800">Gestión de Docentes</h2>
        {/* Botón para mostrar/ocultar el formulario */}
        <button 
          onClick={toggleFormVisibility} 
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          {isFormVisible ? 'Cerrar' : 'Agregar Docente'}
        </button>
      </div>

      {/* Formulario para agregar docente */}
      {isFormVisible && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4 text-purple-700">Agregar Nuevo Docente</h3>
          <form>
            {/* Nombre y Teléfono */}
            <div className="mb-4 flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-purple-600 mb-1">Nombre Completo</label>
                <input
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-md border py-2 px-3 text-gray-700 focus:border-purple-500"
                  type="text"
                  placeholder="Nombre completo"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-purple-600 mb-1">Número de Teléfono</label>
                <input
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full rounded-md border py-2 px-3 text-gray-700 focus:border-purple-500"
                  type="text"
                  placeholder="Número de teléfono"
                />
              </div>
            </div>

            {/* Correo y Nombre de Usuario */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-purple-600 mb-1">Correo Electrónico</label>
              <input
                value={formData.emailAddress}
                onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                className="w-full rounded-md border py-2 px-3 text-gray-700 focus:border-purple-500"
                type="email"
                placeholder="Correo electrónico"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-purple-600 mb-1">Nombre de Usuario</label>
              <input
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full rounded-md border py-2 px-3 text-gray-700 focus:border-purple-500"
                type="text"
                placeholder="Nombre de usuario"
              />
            </div>

            {/* Contraseña */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-purple-600 mb-1">Contraseña</label>
              <input
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full rounded-md border py-2 px-3 text-gray-700 focus:border-purple-500"
                type="password"
                placeholder="Contraseña"
              />
            </div>

            {/* Botones de acción */}
            <div className="flex justify-end gap-4">
              <button 
                onClick={toggleFormVisibility} 
                className="rounded-md border border-gray-300 py-2 px-6 text-gray-700 hover:bg-gray-200"
              >
                Cancelar
              </button>
              <button className="rounded-md bg-purple-500 py-2 px-6 text-white hover:bg-purple-600">
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tabla de docentes */}
      <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
        <h3 className="text-lg font-semibold text-purple-800 mb-4">Lista de Docentes</h3>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-purple-100 text-left">
              <th className="py-3 px-4 text-purple-800">#</th>
              <th className="py-3 px-4 text-purple-800">Nombre</th>
              <th className="py-3 px-4 text-purple-800">Correo Electrónico</th>
              <th className="py-3 px-4 text-purple-800">Estado</th>
              <th className="py-3 px-4 text-purple-800">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Ejemplo de un docente en la tabla */}
            <tr className="border-t">
              <td className="py-3 px-4">1</td>
              <td className="py-3 px-4">Juan García</td>
              <td className="py-3 px-4">juangarcia@example.com</td>
              <td className="py-3 px-4">
                <span className="bg-green-100 text-green-500 rounded-full py-1 px-3 text-sm">Activo</span>
              </td>
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  <button className="bg-yellow-400 text-white py-1 px-3 rounded hover:bg-yellow-500">Editar</button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">Desactivar</button>
                  <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">Ver Detalles</button>
                </div>
              </td>
            </tr>
            {/* Aquí se agregarán más docentes */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherManagement;

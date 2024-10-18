import React, { useState } from 'react';

// Tipado para el formulario de administrador
interface AdminFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  username: string;
  password: string;
}

// Tipado para cada administrador
interface Admin {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

const AdminManagement: React.FC = () => {
  const [formData, setFormData] = useState<AdminFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    username: '',
    password: '',
  });

  const [admins, setAdmins] = useState<Admin[]>([
    { id: 1, name: 'Juan Pérez', email: 'juanperez@example.com', active: true },
    { id: 2, name: 'Ana Gómez', email: 'anagomez@example.com', active: false },
  ]);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);

  // Manejar envío del formulario de nuevo admin
  const handleAddAdmin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newAdmin: Admin = {
      id: admins.length + 1,
      name: formData.fullName,
      email: formData.emailAddress,
      active: true, // Se activa por defecto
    };
    setAdmins([...admins, newAdmin]);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      username: '',
      password: '',
    });
    setShowForm(false);
  };

  // Manejar edición de permisos o desactivación de cuenta
  const handleToggleActive = (index: number) => {
    const updatedAdmins = [...admins];
    updatedAdmins[index].active = !updatedAdmins[index].active;
    setAdmins(updatedAdmins);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleViewDetails = (admin: Admin) => {
    setSelectedAdmin(admin);
  };

  const handleCloseDetails = () => {
    setSelectedAdmin(null);
  };

  return (
    <div className="admin-management grid grid-cols-5 gap-8">
      {/* Botón para mostrar/ocultar formulario de nuevo administrador */}
      <div className="col-span-5 mb-6">
        <button
          onClick={handleShowForm}
          className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          {showForm ? 'Ocultar Formulario' : 'Agregar Administrador'}
        </button>
      </div>

      {/* Formulario para agregar nuevo administrador */}
      {showForm && (
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-lg border border-stroke bg-white shadow-lg p-6">
            <h3 className="font-semibold text-xl mb-6 text-gray-800">Agregar Nuevo Administrador</h3>
            <form onSubmit={handleAddAdmin}>
              {/* Nombre y teléfono */}
              <div className="mb-6 flex flex-col gap-5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">Nombre Completo</label>
                  <input
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-4 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                    type="text"
                    placeholder="Nombre Completo"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">Número de Teléfono</label>
                  <input
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-4 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                    type="text"
                    placeholder="+990 3343 7865"
                  />
                </div>
              </div>

              {/* Correo */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  className="w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-4 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                  type="email"
                  placeholder="Correo Electrónico"
                  required
                />
              </div>

              {/* Nombre de usuario */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">Nombre de Usuario</label>
                <input
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-4 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Nombre de Usuario"
                  required
                />
              </div>

              {/* Crear contraseña */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">Contraseña</label>
                <input
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-4 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                  type="password"
                  placeholder="Crear Contraseña"
                  required
                />
              </div>

              {/* Botones */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-md border border-gray-300 py-2 px-6 text-gray-700 hover:bg-gray-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-purple-500 py-2 px-6 text-white hover:bg-purple-600"
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Tabla de administradores */}
      <div className="col-span-5 mt-6">
        <h3 className="font-semibold text-xl mb-6 text-gray-800">Lista de Administradores</h3>
        <div className="rounded-lg overflow-x-auto shadow-lg">
          <table className="w-full table-auto">
            <thead className="bg-purple-200 text-left">
              <tr>
                <th className="py-4 px-4 font-medium text-purple-900">#</th>
                <th className="py-4 px-4 font-medium text-purple-900">Nombre</th>
                <th className="py-4 px-4 font-medium text-purple-900">Correo</th>
                <th className="py-4 px-4 font-medium text-purple-900">Estado</th>
                <th className="py-4 px-4 font-medium text-purple-900">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-4 px-4">{admin.id}</td>
                  <td className="py-4 px-4">{admin.name}</td>
                  <td className="py-4 px-4">{admin.email}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                        admin.active ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
                      }`}
                    >
                      {admin.active ? 'Activo' : 'Desactivado'}
                    </span>
                  </td>
                  <td className="py-4 px-4 flex space-x-2">
                    <button
                      onClick={() => handleViewDetails(admin)}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
                    >
                      Ver Detalles
                    </button>
                    <button
                      onClick={() => handleToggleActive(index)}
                      className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600"
                    >
                      {admin.active ? 'Desactivar' : 'Activar'}
                    </button>
                    <button className="px-3 py-1 bg-purple-500 text-white text-sm rounded-md hover:bg-purple-600">
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de detalles del administrador */}
      {selectedAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h3 className="text-lg font-bold mb-4">Detalles del Administrador</h3>
            <p><strong>Número:</strong> {selectedAdmin.id}</p>
            <p><strong>Nombre:</strong> {selectedAdmin.name}</p>
            <p><strong>Correo:</strong> {selectedAdmin.email}</p>
            <p><strong>Estado:</strong> {selectedAdmin.active ? 'Activo' : 'Desactivado'}</p>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleCloseDetails}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminManagement;

import React, { useState } from 'react';

const UserList = () => {
  // Estado para gestionar los detalles del usuario seleccionado
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para gestionar el modal de nuevo usuario
  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    username: '',
    package: 'Plan Individual',
    price: '200 soles',
    course: '',
    status: 'Pendiente',
    photo: null,
  });

  // Datos de los usuarios con los planes y precios actualizados
  const users = [
    { 
      name: 'Juan Pérez', 
      email: 'juanperez@example.com', 
      package: 'Plan Individual', 
      price: '200 soles', 
      invoiceDate: 'Ene 13, 2025', 
      status: 'Pagado', 
      course: 'Curso de Programación' 
    },
    { 
      name: 'Ana Gómez', 
      email: 'anagomez@example.com', 
      package: 'Plan Duo', 
      price: '250 soles', 
      invoiceDate: 'Ene 13, 2025', 
      status: 'Pagado', 
      course: 'Curso de Diseño Gráfico' 
    },
    { 
      name: 'Carlos Díaz', 
      email: 'carlosdiaz@example.com', 
      package: 'Plan Familiar', 
      price: '500 soles', 
      invoiceDate: 'Ene 13, 2025', 
      status: 'No Pagado', 
      course: 'Curso de Fotografía' 
    },
    { 
      name: 'María García', 
      email: 'mariagarcia@example.com', 
      package: 'Curso Individual', 
      price: '5 soles', 
      invoiceDate: 'Ene 13, 2025', 
      status: 'Pendiente', 
      course: 'Curso de Marketing Digital' 
    },
  ];

  // Función para seleccionar un usuario y mostrar sus detalles
  const viewDetails = (user) => {
    setSelectedUser(user);
  };

  // Función para abrir el modal de nuevo usuario
  const openNewUserModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeNewUserModal = () => {
    setIsModalOpen(false);
  };

  // Función para manejar el cambio en el formulario de nuevo usuario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Función para manejar la subida de archivos
  const handleFileChange = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };

  // Función para agregar un nuevo usuario
  const handleAddUser = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para agregar el usuario a la lista o enviarlo a la API
    console.log('Nuevo usuario:', newUser);
    closeNewUserModal();
  };

  return (
    <div className="rounded-lg border border-purple-400 bg-white px-4 pt-6 pb-2.5 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-purple-900">Gestión de Usuarios</h2>
        {/* Botón para abrir el modal de nuevo usuario */}
        <button
          onClick={openNewUserModal}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Agregar Nuevo Usuario
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-purple-100 text-left">
              <th className="min-w-[220px] py-4 px-2 md:px-4 font-medium text-purple-900">Usuario</th>
              <th className="min-w-[150px] py-4 px-2 md:px-4 font-medium text-purple-900">Correo</th>
              <th className="min-w-[150px] py-4 px-2 md:px-4 font-medium text-purple-900">Plan</th>
              <th className="min-w-[150px] py-4 px-2 md:px-4 font-medium text-purple-900">Precio</th>
              <th className="min-w-[150px] py-4 px-2 md:px-4 font-medium text-purple-900">Fecha de Factura</th>
              <th className="min-w-[120px] py-4 px-2 md:px-4 font-medium text-purple-900">Estado</th>
              <th className="py-4 px-2 md:px-4 font-medium text-purple-900">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="py-5 px-2 md:px-4">
                  <h5 className="font-medium text-purple-800">{user.name}</h5>
                </td>
                <td className="py-5 px-2 md:px-4">
                  <p className="text-purple-700">{user.email}</p>
                </td>
                <td className="py-5 px-2 md:px-4">
                  <p className="text-purple-700">{user.package}</p>
                </td>
                <td className="py-5 px-2 md:px-4">
                  <p className="text-purple-700">{user.price}</p>
                </td>
                <td className="py-5 px-2 md:px-4">
                  <p className="text-purple-700">{user.invoiceDate}</p>
                </td>
                <td className="py-5 px-2 md:px-4">
                  <span
                    className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
                      user.status === 'Pendiente'
                        ? 'bg-yellow-100 text-yellow-500'
                        : user.status === 'No Pagado'
                        ? 'bg-red-100 text-red-500'
                        : 'bg-green-100 text-green-500'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-5 px-2 md:px-4">
                  <div className="flex items-center space-x-3.5">
                    {/* Botón para ver detalles */}
                    <button onClick={() => viewDetails(user)} className="hover:text-purple-600">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de detalles del usuario */}
      {selectedUser && (
        <div className="mt-8 p-6 bg-purple-100 rounded-lg">
          <h3 className="text-lg font-bold text-purple-900">Detalles del Usuario</h3>
          <p><strong>Nombre:</strong> {selectedUser.name}</p>
          <p><strong>Correo:</strong> {selectedUser.email}</p>
          <p><strong>Plan:</strong> {selectedUser.package}</p>
          <p><strong>Precio:</strong> {selectedUser.price}</p>
          <p><strong>Curso:</strong> {selectedUser.course}</p>
          <p><strong>Estado de Pago:</strong> {selectedUser.status}</p>
          <button onClick={() => setSelectedUser(null)} className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
            Cerrar
          </button>
        </div>
      )}

      {/* Modal para agregar nuevo usuario */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Agregar Nuevo Usuario</h2>
            <form onSubmit={handleAddUser}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                <input
                  type="text"
                  name="fullName"
                  value={newUser.fullName}
                  onChange={handleInputChange}
                  className="w-full mt-1 border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  className="w-full mt-1 border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={newUser.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full mt-1 border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nombre de Usuario</label>
                <input
                  type="text"
                  name="username"
                  value={newUser.username}
                  onChange={handleInputChange}
                  className="w-full mt-1 border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Plan</label>
                <select
                  name="package"
                  value={newUser.package}
                  onChange={handleInputChange}
                  className="w-full mt-1 border rounded-md px-3 py-2"
                >
                  <option value="Plan Individual">Plan Individual - 200 soles</option>
                  <option value="Plan Duo">Plan Duo - 250 soles</option>
                  <option value="Plan Familiar">Plan Familiar - 500 soles</option>
                  <option value="Curso Individual">Curso Individual - 5 soles</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Curso</label>
                <input
                  type="text"
                  name="course"
                  value={newUser.course}
                  onChange={handleInputChange}
                  className="w-full mt-1 border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Subir Foto</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full mt-1 border rounded-md px-3 py-2"
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={closeNewUserModal}
                  className="px-4 py-2 border border-gray-400 rounded-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md"
                >
                  Agregar Usuario
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;




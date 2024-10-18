import React from 'react';

const AdminList = () => {
  const admins = [
    { id: 1, name: 'Admin 1', email: 'admin1@example.com' },
    { id: 2, name: 'Admin 2', email: 'admin2@example.com' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Administradores</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Nombre</th>
            <th className="py-2">Correo Electrónico</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td className="border px-4 py-2">{admin.name}</td>
              <td className="border px-4 py-2">{admin.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;

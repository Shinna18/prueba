import React from 'react';

const UserTable = ({ users }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Nombre</th>
          <th className="py-2">Correo Electrónico</th>
          <th className="py-2">Plan</th>
          <th className="py-2">Estado</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-t">
            <td className="py-2 text-center">{user.name}</td>
            <td className="py-2 text-center">{user.email}</td>
            <td className="py-2 text-center">{user.plan}</td>
            <td className="py-2 text-center">{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

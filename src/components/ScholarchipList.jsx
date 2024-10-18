import React, { useState } from 'react';

const ScholarshipList = () => {
  // Datos de los usuarios con becas
  const scholarships = [
    { 
      name: 'Juan Pérez', 
      email: 'juanperez@example.com', 
      examStatus: 'Aprobado', 
      documents: ['documento1.pdf', 'documento2.pdf'], 
      status: 'Aceptada' 
    },
    { 
      name: 'Ana Gómez', 
      email: 'anagomez@example.com', 
      examStatus: 'No Aprobado', 
      documents: ['documento3.pdf'], 
      status: 'Denegada' 
    },
    { 
      name: 'Carlos Díaz', 
      email: 'carlosdiaz@example.com', 
      examStatus: 'Aprobado', 
      documents: ['documento4.pdf', 'documento5.pdf'], 
      status: 'Media Beca' 
    },
  ];

  const [selectedScholarship, setSelectedScholarship] = useState(null); // Para el usuario seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla la apertura del modal de documentos

  // Función para manejar la apertura del modal de detalles
  const handleViewDetails = (scholarship) => {
    setSelectedScholarship(scholarship);
    setIsModalOpen(false); // Cierra la vista de documentos cuando se abren los detalles
  };

  // Función para abrir el modal de documentos
  const handleViewDocuments = () => {
    setIsModalOpen(true); // Abre el modal
  };

  // Función para cerrar el modal de documentos
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para cambiar el estado de la beca
  const handleChangeStatus = (newStatus) => {
    setSelectedScholarship((prev) => ({
      ...prev,
      status: newStatus,
    }));
  };

  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-purple-200 text-left">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black">Usuario</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">Correo</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">Estado del Examen</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black">Estado de Beca</th>
              <th className="py-4 px-4 font-medium text-black">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((scholarship, index) => (
              <tr key={index} className="border-t">
                <td className="py-5 px-4">
                  <h5 className="font-medium text-black">{scholarship.name}</h5>
                </td>
                <td className="py-5 px-4">
                  <p className="text-black">{scholarship.email}</p>
                </td>
                <td className="py-5 px-4">
                  <span
                    className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
                      scholarship.examStatus === 'Aprobado'
                        ? 'bg-green-100 text-green-500'
                        : 'bg-red-100 text-red-500'
                    }`}
                  >
                    {scholarship.examStatus}
                  </span>
                </td>
                <td className="py-5 px-4">
                  <span
                    className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
                      scholarship.status === 'Aceptada'
                        ? 'bg-green-100 text-green-500'
                        : scholarship.status === 'Denegada'
                        ? 'bg-red-100 text-red-500'
                        : 'bg-yellow-100 text-yellow-500'
                    }`}
                  >
                    {scholarship.status}
                  </span>
                </td>
                <td className="py-5 px-4">
                  <button
                    className="hover:text-purple-600 text-sm font-medium"
                    onClick={() => handleViewDetails(scholarship)}
                  >
                    <svg
                      className="w-5 h-5 text-purple-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12l-4-4m0 0l-4 4m4-4v12"
                      />
                    </svg>
                    <span>Ver Detalles</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedScholarship && (
        <div className="mt-6 bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-purple-700 mb-4">Detalles de Beca</h3>
          <p><strong>Usuario:</strong> {selectedScholarship.name}</p>
          <p><strong>Correo:</strong> {selectedScholarship.email}</p>
          <p><strong>Estado del Examen:</strong> {selectedScholarship.examStatus}</p>
          <p><strong>Estado de Beca:</strong> {selectedScholarship.status}</p>

          {/* Botón para abrir el modal de documentos */}
          <button
            className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md"
            onClick={handleViewDocuments}
          >
            Ver Documentos
          </button>

          {/* Botones para aceptar, denegar o media beca */}
          <div className="mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={() => handleChangeStatus('Aceptada')}
            >
              Aceptar Beca
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={() => handleChangeStatus('Media Beca')}
            >
              Media Beca
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => handleChangeStatus('Denegada')}
            >
              Denegar Beca
            </button>
          </div>
        </div>
      )}

      {/* Modal de documentos */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Documentos de {selectedScholarship.name}</h2>
            {selectedScholarship.documents.map((doc, index) => (
              <button
                key={index}
                className="text-sm text-purple-600 hover:text-purple-400 underline block mb-2"
                onClick={() => handleViewDocument(doc)}
              >
                {doc}
              </button>
            ))}
            <div className="mt-4 flex justify-end">
              <button
                className="bg-purple-500 text-white px-4 py-2 rounded-md"
                onClick={closeModal}
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

export default ScholarshipList;

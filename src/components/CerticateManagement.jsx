import React, { useState } from 'react';

const CertificateManagement = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const certificates = [
    {
      id: '001',
      name: 'Juan Pérez',
      course: 'Curso de Programación',
      completionDate: '2023-10-15',
    },
    {
      id: '002',
      name: 'Ana Gómez',
      course: 'Curso de Diseño Gráfico',
      completionDate: '2023-09-21',
    },
    {
      id: '003',
      name: 'Carlos Díaz',
      course: 'Curso de Fotografía',
      completionDate: '2023-11-05',
    },
    {
      id: '004',
      name: 'María García',
      course: 'Curso de Marketing Digital',
      completionDate: '2023-08-30',
    },
  ];

  const courses = [
    'Curso de Programación',
    'Curso de Diseño Gráfico',
    'Curso de Fotografía',
    'Curso de Marketing Digital',
  ];

  const viewDetails = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleDownloadCertificate = () => {
    // Lógica para descargar el certificado
    alert(`Descargando el certificado para ${selectedCertificate.name}`);
  };

  const filteredCertificates = certificates.filter(
    (cert) =>
      (cert.id.includes(searchId) || searchId === '') &&
      (cert.course === selectedCourse || selectedCourse === '')
  );

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Gestión de Certificados</h2>

      {/* Filtros */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Buscar por ID"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full lg:w-1/2"
        />

        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full lg:w-1/2"
        >
          <option value="">Seleccionar curso</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      {/* Tabla de certificados */}
      <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-purple-100 text-left">
            <th className="px-4 py-2 text-purple-900">ID</th>
            <th className="px-4 py-2 text-purple-900">Usuario</th>
            <th className="px-4 py-2 text-purple-900">Curso</th>
            <th className="px-4 py-2 text-purple-900">Fecha de Finalización</th>
            <th className="px-4 py-2 text-purple-900">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredCertificates.map((cert) => (
            <tr key={cert.id} className="border-t">
              <td className="px-4 py-2">{cert.id}</td>
              <td className="px-4 py-2">{cert.name}</td>
              <td className="px-4 py-2">{cert.course}</td>
              <td className="px-4 py-2">{cert.completionDate}</td>
              <td className="px-4 py-2">
                <button
                  className="text-purple-600 hover:underline"
                  onClick={() => viewDetails(cert)}
                >
                  Ver Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de detalles del certificado */}
      {selectedCertificate && (
        <div className="mt-6 p-6 bg-purple-100 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-purple-900 mb-4">
            Detalles del Certificado
          </h3>
          <p>
            <strong>ID del Certificado:</strong> {selectedCertificate.id}
          </p>
          <p>
            <strong>Nombre del Usuario:</strong> {selectedCertificate.name}
          </p>
          <p>
            <strong>Curso Completado:</strong> {selectedCertificate.course}
          </p>
          <p>
            <strong>Fecha de Finalización:</strong> {selectedCertificate.completionDate}
          </p>

          {/* Botón para descargar el certificado */}
          <button
            onClick={handleDownloadCertificate}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500"
          >
            Descargar Certificado
          </button>

          {/* Botón para cerrar el cuadro de detalles */}
          <button
            onClick={() => setSelectedCertificate(null)}
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 ml-4"
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

export default CertificateManagement;


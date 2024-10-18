import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Importa el Sidebar
import Header from './Header'; // Importa el Header
import AdminManagement from './AdminManagement'; // Importa el componente de gestionar administradores
import Statistics from './Statistics'; // Importa el componente de estadísticas
import UserList from './UserList'; // Importa el componente de gestionar usuarios
import ScholarshipList from './ScholarchipList'; // Importa el componente de gestionar becas
import CertificateManagement from './CerticateManagement'; // Importa el componente de gestionar certificados
import RutaManagement from './RutaManagement'; // Importa el componente de gestión de rutas
import TeacherManagement from './TeacherManagement'; // Importa el componente de gestionar docentes
import InboxManagement from './InboxManagement'; // Importa la bandeja de entrada
import PaymentManagement from './PaymentManagement'; // Importa el componente de gestionar pagos

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('courses');

  const renderContent = () => {
    switch (activePage) {
      case 'admins':
        return <AdminManagement />;
      case 'courses':
        return <RutaManagement />;
      case 'users':
        return <UserList />;
      case 'scholarships':
        return <ScholarshipList />;
      case 'certificates':
        return <CertificateManagement />;
      case 'teachers':
        return <TeacherManagement />;
      case 'inbox':
        return <InboxManagement />;
      case 'payments':
        return <PaymentManagement />; // Renderiza la gestión de pagos
      case 'statistics':
        return <Statistics />;
      default:
        return <h2>Página no encontrada</h2>;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Sidebar fijo a la izquierda, ocupando toda la altura de la pantalla */}
      <div className="w-full lg:w-1/5 lg:min-h-screen bg-gray-200">
        <Sidebar setActivePage={setActivePage} />
      </div>

      {/* Contenido principal ajustado */}
      <div className="w-full lg:w-4/5 flex-1">
        <Header username="Admin" />

        {/* Contenedor del contenido */}
        <div className="p-4 sm:p-6 lg:p-8">
          {renderContent()} {/* Renderiza el contenido de acuerdo a la página activa */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

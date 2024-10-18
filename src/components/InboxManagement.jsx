import React, { useState } from 'react';

const InboxManagement = () => {
  const [search, setSearch] = useState('');
  const [messages] = useState([
    {
      id: 1,
      sender: 'Mohamed',
      subject: 'Consulta sobre curso',
      content: 'Tengo algunas dudas sobre el curso de programación...',
      time: '05:09 AM',
      image: 'https://via.placeholder.com/40',
    },
    {
      id: 2,
      sender: 'Ana Gómez',
      subject: 'Problema de acceso',
      content: 'No puedo acceder a mi cuenta desde hace un tiempo...',
      time: '06:15 AM',
      image: 'https://via.placeholder.com/40',
    },
  ]);

  const [isComposeOpen, setComposeOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleComposeClick = () => {
    setComposeOpen(true);
  };

  const handleReplyClick = (message) => {
    setSelectedMessage(message);
    setComposeOpen(true);
  };

  const filteredMessages = messages.filter((message) =>
    message.sender.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Sidebar con opciones de bandeja */}
      <div className="col-span-1 bg-white border rounded p-6">
        <button
          className="btn-bs-dark uppercase tracking-wider mb-6 bg-purple-600 text-white px-4 py-2 rounded-md"
          onClick={handleComposeClick}
        >
          <i className="fad fa-layer-plus mr-2"></i> Redactar
        </button>

        <ul>
          <li className="my-5">
            <a
              href="#"
              className="btn-indigo text-left block bg-purple-600 text-white rounded-md px-4 py-2"
            >
              <i className="text-xs fad fa-inbox mr-1"></i> Bandeja de Entrada
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-left text-gray-800 hover:bg-gray-100 hover:text-gray-900 rounded-md px-4 py-2"
            >
              <i className="text-xs fad fa-paper-plane mr-1"></i> Enviados
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-left text-gray-800 hover:bg-gray-100 hover:text-gray-900 rounded-md px-4 py-2"
            >
              <i className="text-xs fad fa-star mr-1"></i> Marcados
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-left text-gray-800 hover:bg-gray-100 hover:text-gray-900 rounded-md px-4 py-2"
            >
              <i className="text-xs fad fa-trash mr-1"></i> Papelera
            </a>
          </li>
        </ul>
      </div>

      {/* Mensajes en la bandeja de entrada */}
      <div className="col-span-2 bg-white border rounded p-6">
        {/* Barra de búsqueda */}
        <div className="px-3 border-b">
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              className="p-3 flex-1 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="text"
              placeholder="Buscar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="p-3 text-black bg-purple-600 hover:bg-purple-700 rounded-lg ml-2"
            >
              <i className="fad fa-search"></i>
            </button>
          </form>
        </div>

        {/* Lista de mensajes */}
        <div className="flex-1 flex flex-col overflow-y-auto mt-4">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className="flex items-center shadow-xs transition-all duration-300 ease-in-out p-5 hover:shadow-md hover:bg-gray-100 cursor-pointer"
              onClick={() => handleReplyClick(message)}
            >
              <div className="w-10 h-10 overflow-hidden rounded-md">
                <img
                  className="img-responsive object-cover"
                  src={message.image}
                  alt={message.sender}
                />
              </div>
              <h1 className="ml-3 font-bold text-purple-600">{message.sender}</h1>
              <p className="ml-6 flex-1 text-xs">{message.content}</p>
              <p className="font-bold text-gray-500">{message.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de redacción */}
      {isComposeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-red-600"
              onClick={() => setComposeOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
            <h2 className="text-lg font-bold mb-4">Redactar Mensaje</h2>
            {selectedMessage && (
              <div className="mb-4">
                <p>Respondiendo a: {selectedMessage.sender}</p>
                <p className="text-xs text-gray-600">{selectedMessage.subject}</p>
              </div>
            )}
            <textarea
              className="w-full p-2 mb-4 border rounded-md focus:ring-2 focus:ring-purple-600"
              rows="5"
              placeholder="Escribe tu mensaje..."
            ></textarea>
            <button
              className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
              onClick={() => setComposeOpen(false)}
            >
              Enviar Mensaje
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InboxManagement;

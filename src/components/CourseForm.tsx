import React, { useState } from 'react';

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Curso enviado:', { title, description, file });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Título del Curso</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          placeholder="Introduce el título"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          placeholder="Introduce una descripción"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Archivo de Video</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mt-1 block w-full"
        />
      </div>
      <button type="submit" className="bg-teal-600 text-white py-2 px-4 rounded-md">Guardar Curso</button>
    </form>
  );
};

export default CourseForm;


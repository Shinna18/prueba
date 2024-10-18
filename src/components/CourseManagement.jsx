import React, { useState } from 'react';

const CourseManagement = ({ ruta, addCourseToRuta }) => {
  const [courseName, setCourseName] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [description, setDescription] = useState('');

  const handleAddCourse = () => {
    if (courseName && youtubeLink && description) {
      addCourseToRuta(ruta.name, {
        name: courseName,
        youtubeLink,
        description,
      });
      setCourseName('');
      setYoutubeLink('');
      setDescription('');
    } else {
      alert('Debes llenar todos los campos del curso.');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-semibold mb-4">Agregar Curso a la Ruta {ruta.name}</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Nombre del Curso</label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Enlace de Video de YouTube</label>
        <input
          type="text"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Descripción del Curso</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        />
      </div>
      <button
        onClick={handleAddCourse}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg"
      >
        Agregar Curso
      </button>
    </div>
  );
};

export default CourseManagement;

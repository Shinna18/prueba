import React from 'react';

const CourseOrdering = ({ ruta, reorderCourses }) => {
  const handleMoveUp = (index) => {
    if (index > 0) {
      const reorderedCourses = [...ruta.courses];
      [reorderedCourses[index - 1], reorderedCourses[index]] = [reorderedCourses[index], reorderedCourses[index - 1]];
      reorderCourses(ruta.name, reorderedCourses);
    }
  };

  const handleMoveDown = (index) => {
    if (index < ruta.courses.length - 1) {
      const reorderedCourses = [...ruta.courses];
      [reorderedCourses[index + 1], reorderedCourses[index]] = [reorderedCourses[index], reorderedCourses[index + 1]];
      reorderCourses(ruta.name, reorderedCourses);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-semibold mb-4">Ordenar Cursos de la Ruta {ruta.name}</h2>
      <ul>
        {ruta.courses.map((course, index) => (
          <li key={index} className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium">{course.name}</p>
              <p className="text-sm text-gray-600">{course.description}</p>
            </div>
            <div className="flex">
              <button onClick={() => handleMoveUp(index)} className="mr-2 px-2 py-1 bg-gray-300 rounded">↑</button>
              <button onClick={() => handleMoveDown(index)} className="px-2 py-1 bg-gray-300 rounded">↓</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOrdering;

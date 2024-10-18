import React, { useState } from 'react';

const RutaManagement = () => {
  const [ruta, setRuta] = useState('');
  const [area, setArea] = useState('');
  const [rutaDescripcion, setRutaDescripcion] = useState('');
  const [rutaCreada, setRutaCreada] = useState(false); // Verifica si se ha creado una ruta
  const [cursos, setCursos] = useState([]); // Cursos dentro de la ruta
  const [cursoNombre, setCursoNombre] = useState('');
  const [cursoDescripcion, setCursoDescripcion] = useState('');
  const [cursoVideo, setCursoVideo] = useState('');
  const [cursoArchivos, setCursoArchivos] = useState([]);
  const [cursoOrden, setCursoOrden] = useState(1);
  const [videoSubiendo, setVideoSubiendo] = useState(false); // Estado de carga de video
  const [progresoCarga, setProgresoCarga] = useState(0); // Progreso de la barra de carga
  const [examen, setExamen] = useState([]); // Preguntas del examen
  const [pregunta, setPregunta] = useState('');
  const [tipoPregunta, setTipoPregunta] = useState('opcion_multiple'); // Tipo de pregunta
  const [opciones, setOpciones] = useState(['', '']); // Opciones para preguntas de opción múltiple
  const [mostrarExamen, setMostrarExamen] = useState(false); // Mostrar sección de crear examen

  // Crear la ruta de estudio
  const handleCrearRuta = (e) => {
    e.preventDefault();
    if (ruta && area && rutaDescripcion) {
      setRutaCreada(true); // Indica que se ha creado la ruta
    }
  };

  // Simulación de subida de video
  const handleVideoUpload = (e) => {
    setVideoSubiendo(true);
    setCursoVideo(e.target.value); // Simula el enlace del video
    let progreso = 0;
    const interval = setInterval(() => {
      progreso += 10;
      setProgresoCarga(progreso);
      if (progreso === 100) {
        clearInterval(interval);
        setVideoSubiendo(false);
      }
    }, 500); // Simulación de subida en pasos de 10 cada medio segundo
  };

  // Agregar un nuevo curso a la ruta
  const handleAgregarCurso = (e) => {
    e.preventDefault();
    const nuevoCurso = {
      nombre: cursoNombre,
      descripcion: cursoDescripcion,
      video: cursoVideo,
      archivos: cursoArchivos,
      orden: cursoOrden,
    };
    setCursos([...cursos, nuevoCurso]);
    // Resetear los campos del formulario de curso
    setCursoNombre('');
    setCursoDescripcion('');
    setCursoVideo('');
    setCursoArchivos([]);
    setCursoOrden(cursoOrden + 1); // Incrementa el orden del curso
  };

  // Manejar subida de archivos complementarios
  const handleArchivosChange = (e) => {
    const archivos = Array.from(e.target.files);
    setCursoArchivos(archivos);
  };

  // Reordenar los cursos
  const handleReordenarCurso = (index, direccion) => {
    const nuevosCursos = [...cursos];
    const cursoMovido = nuevosCursos.splice(index, 1)[0];
    const nuevoIndex = direccion === 'arriba' ? index - 1 : index + 1;

    if (nuevoIndex >= 0 && nuevoIndex < nuevosCursos.length + 1) {
      nuevosCursos.splice(nuevoIndex, 0, cursoMovido);
      setCursos(nuevosCursos);
    }
  };

  // Finalizar la ruta
  const handleFinalizarRuta = () => {
    setRuta('');
    setArea('');
    setRutaDescripcion('');
    setCursos([]);
    setRutaCreada(false);
  };

  // Agregar pregunta al examen
  const handleAgregarPregunta = (e) => {
    e.preventDefault();
    const nuevaPregunta = {
      pregunta,
      tipo: tipoPregunta,
      opciones: tipoPregunta === 'opcion_multiple' ? opciones : [],
    };
    setExamen([...examen, nuevaPregunta]);
    setPregunta(''); // Resetea la pregunta
    setOpciones(['', '']); // Resetea las opciones
  };

  // Manejar cambio de opción
  const handleOpcionChange = (index, value) => {
    const nuevasOpciones = [...opciones];
    nuevasOpciones[index] = value;
    setOpciones(nuevasOpciones);
  };

  // Agregar opción para opción múltiple
  const handleAgregarOpcion = () => {
    setOpciones([...opciones, '']);
  };

  // Mostrar u ocultar sección de examen
  const toggleExamen = () => {
    setMostrarExamen(!mostrarExamen);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Gestionar Rutas de Estudio</h2>

      {/* Formulario para crear la ruta */}
      {!rutaCreada && (
        <form onSubmit={handleCrearRuta} className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nombre de la Ruta</label>
            <input
              type="text"
              value={ruta}
              onChange={(e) => setRuta(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Área de Estudio</label>
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Descripción de la Ruta</label>
            <textarea
              value={rutaDescripcion}
              onChange={(e) => setRutaDescripcion(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>

          <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-lg">
            Crear Ruta
          </button>
        </form>
      )}

      {/* Formulario para agregar cursos a la ruta */}
      {rutaCreada && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Agregar Cursos a la Ruta: {ruta}</h3>

          <form onSubmit={handleAgregarCurso} className="mb-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nombre del Curso</label>
              <input
                type="text"
                value={cursoNombre}
                onChange={(e) => setCursoNombre(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Simulación de subida de video */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Video del Curso</label>
              <input
                type="text"
                value={cursoVideo}
                onChange={handleVideoUpload}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Pega el enlace de YouTube aquí"
                required
              />
              {videoSubiendo && (
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">Subiendo Video...</label>
                  <div className="relative h-4 bg-gray-200 rounded">
                    <div
                      className="absolute top-0 left-0 h-4 bg-purple-600 rounded"
                      style={{ width: `${progresoCarga}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Descripción del curso */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Descripción del Curso</label>
              <textarea
                value={cursoDescripcion}
                onChange={(e) => setCursoDescripcion(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>

            {/* Archivos complementarios */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Archivos Complementarios</label>
              <input
                type="file"
                multiple
                onChange={handleArchivosChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg">
              Agregar Curso
            </button>
          </form>

          {/* Mostrar Cursos Agregados */}
          <h3 className="text-lg font-semibold mb-4">Cursos en la Ruta</h3>
          <ul className="list-disc pl-5">
            {cursos.map((curso, index) => (
              <li key={index} className="mb-4">
                <strong>Curso:</strong> {curso.nombre}
                <br />
                <strong>Descripción:</strong> {curso.descripcion}
                <br />
                <strong>Video:</strong> {curso.video}
                <br />
                <strong>Archivos:</strong> {curso.archivos.length > 0 ? (
                  <ul>
                    {curso.archivos.map((archivo, i) => (
                      <li key={i}>{archivo.name}</li>
                    ))}
                  </ul>
                ) : (
                  'No hay archivos'
                )}

                {/* Botones para reordenar cursos */}
                <div className="mt-2">
                  <button
                    onClick={() => handleReordenarCurso(index, 'arriba')}
                    className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2"
                  >
                    Subir
                  </button>
                  <button
                    onClick={() => handleReordenarCurso(index, 'abajo')}
                    className="px-2 py-1 bg-blue-500 text-white rounded-md"
                  >
                    Bajar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Botón para crear examen */}
          <button onClick={toggleExamen} className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg">
            {mostrarExamen ? 'Ocultar Examen' : 'Crear Examen para la Ruta'}
          </button>

          {/* Formulario para crear examen */}
          {mostrarExamen && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Crear Examen</h3>
              <form onSubmit={handleAgregarPregunta}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Pregunta</label>
                  <input
                    type="text"
                    value={pregunta}
                    onChange={(e) => setPregunta(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Tipo de Pregunta</label>
                  <select
                    value={tipoPregunta}
                    onChange={(e) => setTipoPregunta(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  >
                    <option value="opcion_multiple">Opción Múltiple</option>
                    <option value="abierta">Abierta</option>
                  </select>
                </div>

                {tipoPregunta === 'opcion_multiple' && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Opciones</label>
                    {opciones.map((opcion, index) => (
                      <input
                        key={index}
                        type="text"
                        value={opcion}
                        onChange={(e) => handleOpcionChange(index, e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md mb-2"
                        placeholder={`Opción ${index + 1}`}
                      />
                    ))}
                    <button
                      type="button"
                      onClick={handleAgregarOpcion}
                      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                      Agregar Opción
                    </button>
                  </div>
                )}

                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg">
                  Agregar Pregunta
                </button>
              </form>

              {/* Mostrar preguntas agregadas */}
              {examen.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold mb-4">Preguntas del Examen</h4>
                  <ul className="list-disc pl-5">
                    {examen.map((pregunta, index) => (
                      <li key={index} className="mb-4">
                        <strong>Pregunta {index + 1}:</strong> {pregunta.pregunta}
                        {pregunta.tipo === 'opcion_multiple' && (
                          <ul className="list-disc pl-5">
                            {pregunta.opciones.map((opcion, i) => (
                              <li key={i}>{opcion}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Finalizar la ruta */}
          <button onClick={handleFinalizarRuta} className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg">
            Finalizar y Crear Nueva Ruta
          </button>
        </div>
      )}
    </div>
  );
};

export default RutaManagement;


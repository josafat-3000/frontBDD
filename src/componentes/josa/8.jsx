import React, { useState } from 'react';

const App = () => {
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizSubmit = (event) => {
    event.preventDefault();
    let score = 0;
    const form = event.target;
    if (form.q1.value === 'option2') score++;
    if (form.q2.value === 'option3') score++;
    if (form.q3.value === 'option1') score++;
    setScore(score);
    setQuizSubmitted(true);
  };

  return (
    <div>
      <h1>Chat sobre Fragmentación de Bases de Datos</h1>
      <div>
        <p><strong>Usuario:</strong> requiero que analices esta base de datos</p>
        <p><strong>Asistente:</strong> Claro, para poder analizar tu base de datos necesito que me proporciones el archivo correspondiente. Puedes subir el archivo de la base de datos en un formato como CSV, SQL, Excel, etc. Una vez que lo hayas subido, procederé a analizarlo y proporcionarte la información que necesites.</p>
        <p><strong>Usuario:</strong> (esquema de la base de datos)</p>
        <p><strong>Asistente:</strong> (análisis del esquema de la base de datos)</p>
        <p><strong>Usuario:</strong> (PDF sobre fragmentación)</p>
        <p><strong>Asistente:</strong> (análisis del PDF sobre fragmentación)</p>
      </div>
      <h2>Test de Opción Múltiple</h2>
      {!quizSubmitted ? (
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. ¿Qué es la fragmentación horizontal?</p>
            <label>
              <input type="radio" name="q1" value="option1" /> Proyección de columnas
            </label>
            <label>
              <input type="radio" name="q1" value="option2" /> Selección de filas
            </label>
            <label>
              <input type="radio" name="q1" value="option3" /> Combinación de proyección y selección
            </label>
          </div>
          <div>
            <p>2. ¿Cuál es un beneficio de la fragmentación vertical?</p>
            <label>
              <input type="radio" name="q2" value="option1" /> Distribuir la carga de lectura entre diferentes nodos
            </label>
            <label>
              <input type="radio" name="q2" value="option2" /> Reducir la redundancia de datos
            </label>
            <label>
              <input type="radio" name="q2" value="option3" /> Acceso independiente a columnas específicas
            </label>
          </div>
          <div>
            <p>3. ¿Qué tipo de índice se recomienda para mejorar el rendimiento de las consultas con JOIN?</p>
            <label>
              <input type="radio" name="q3" value="option1" /> Índices en columnas usadas en WHERE y JOIN
            </label>
            <label>
              <input type="radio" name="q3" value="option2" /> Índices solo en columnas de proyección
            </label>
            <label>
              <input type="radio" name="q3" value="option3" /> No usar índices para consultas JOIN
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div>
          <h3>Resultados</h3>
          <p>Tu puntuación: {score} / 3</p>
        </div>
      )}
    </div>
  );
};

export default App;
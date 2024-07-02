import React, { useState } from 'react';

const AlgebraRelacionalDistribuida = () => {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newScore = 0;

    if (answers.q1 === 'a') newScore++;
    if (answers.q2 === 'b') newScore++;
    if (answers.q3 === 'a') newScore++;
    if (answers.q4 === 'b') newScore++;
    if (answers.q5 === 'a') newScore++;
    if (answers.q6 === 'b') newScore++;
    if (answers.q7 === 'a') newScore++;
    if (answers.q8 === 'b') newScore++;

    setScore(newScore);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Operaciones del Álgebra Relacional en Bases de Datos Distribuidas</h1>
      <p>
        El álgebra relacional es la base teórica para la manipulación y consulta de datos en sistemas de bases de datos, tanto centralizados como distribuidos. En un entorno distribuido, las operaciones deben adaptarse para gestionar eficazmente la distribución de datos entre múltiples nodos, optimizando la transferencia y procesamiento de información. A continuación, se detallan las principales operaciones del álgebra relacional y su aplicación en bases de datos distribuidas:
      </p>

      <h2>1. Selección (σ)</h2>
      <p>
        La operación de selección extrae las filas que cumplen con una condición específica.
      </p>
      <p><strong>Ejemplo en base de datos distribuida:</strong></p>
      <p>
        Cada nodo realiza la operación de selección de manera local, reduciendo la cantidad de datos transferidos entre nodos. Los resultados locales se combinan posteriormente.
      </p>
      <pre>{`σ_{condición}(Relación)`}</pre>

      <h2>2. Proyección (π)</h2>
      <p>
        La operación de proyección selecciona columnas específicas de una relación, eliminando duplicados.
      </p>
      <p><strong>Ejemplo en base de datos distribuida:</strong></p>
      <p>
        Cada nodo efectúa la proyección localmente, y luego los resultados se combinan si es necesario.
      </p>
      <pre>{`π_{columnas}(Relación)`}</pre>

      <h2>3. Unión (∪)</h2>
      <p>
        La unión combina los resultados de dos relaciones, eliminando duplicados.
      </p>
      <p><strong>Ejemplo en base de datos distribuida:</strong></p>
      <p>
        Cada nodo ejecuta la unión localmente. Los resultados de los nodos se combinan y los duplicados se eliminan a nivel global.
      </p>
      <pre>{`Relación1 ∪ Relación2`}</pre>

      <h2>4. Intersección (∩)</h2>
      <p>
        La intersección retorna las filas presentes en ambas relaciones.
      </p>
      <p><strong>Ejemplo en base de datos distribuida:</strong></p>
      <p>
        Cada nodo calcula la intersección localmente, y los resultados se combinan para obtener la intersección global.
      </p>
      <pre>{`Relación1 ∩ Relación2`}</pre>

      <h2>5. Diferencia (−)</h2>
      <p>
        La diferencia devuelve las filas que están en la primera relación pero no en la segunda.
      </p>
      <p><strong>Ejemplo en base de datos distribuida:</strong></p>
      <p>
        Cada nodo realiza la operación de diferencia localmente. Luego, los resultados se combinan para formar la diferencia global.
      </p>
      <pre>{`Relación1 − Relación2`}</pre>

      <h2>6. Producto Cartesiano (×)</h2>
      <p>
        El producto cartesiano genera todas las combinaciones posibles de filas de dos relaciones.
      </p>
      <p><strong>Ejemplo en base de datos distribuida:</strong></p>
      <p>
        El producto cartesiano puede ser costoso debido a la gran cantidad de datos generados. Se deben aplicar técnicas de reducción de datos antes de transferir información entre nodos.
      </p>
      <pre>{`Relación1 × Relación2`}</pre>

      <h2>7. Join (⨝)</h2>
      <p>
        El join combina filas de dos relaciones basándose en una condición de coincidencia.
      </p>
      <p><strong>Ejemplo en base de datos distribuida:</strong></p>
      <p>
        Existen varias estrategias para realizar joins en bases de datos distribuidas:
        <ul>
          <li>
            <strong>Broadcast Join:</strong> Una tabla pequeña se envía a todos los nodos para combinarse con las particiones de la tabla grande.
          </li>
          <li>
            <strong>Partitioned Join:</strong> Ambas tablas se particionan y redistribuyen según las claves de join, asegurando que las filas coincidentes estén en el mismo nodo.
          </li>
        </ul>
      </p>
      <pre>{`Relación1 ⨝_{condición} Relación2`}</pre>

      <h2>8. Renombrar (ρ)</h2>
      <p>
        La operación de renombrar cambia el nombre de una relación o de sus atributos.
      </p>
      <p><strong>Ejemplo en base de datos distribuida:</strong></p>
      <p>
        El renombrado se realiza localmente en cada nodo, sin necesidad de transferir datos entre nodos.
      </p>
      <pre>{`ρ_{nuevoNombre}(Relación)`}</pre>

      <h2>Consideraciones en Bases de Datos Distribuidas</h2>
      <h3>Minimización de Transferencia de Datos</h3>
      <p>
        Las operaciones deben diseñarse para minimizar la transferencia de datos entre nodos, ya que la comunicación inter-nodos puede ser costosa en términos de tiempo y recursos.
      </p>
      <h3>Estrategias de Particionamiento</h3>
      <p>
        Elegir una estrategia adecuada de particionamiento de datos (horizontal, vertical o mixta) es crucial para optimizar el rendimiento del sistema. Por ejemplo:
      </p>
      <ul>
        <li><strong>Particionamiento Horizontal:</strong> Divide las filas de una tabla en diferentes nodos.</li>
        <li><strong>Particionamiento Vertical:</strong> Divide las columnas de una tabla en diferentes nodos.</li>
        <li><strong>Particionamiento Mixto:</strong> Combina ambos métodos para aprovechar sus ventajas.</li>
      </ul>
      <h3>Consistencia y Disponibilidad</h3>
      <p>
        Mantener el equilibrio entre consistencia y disponibilidad según el teorema CAP (Consistency, Availability, Partition tolerance) es fundamental. Las bases de datos distribuidas deben manejar la latencia de red y posibles fallos de nodos de manera eficiente.
      </p>

      <h2>Conclusión</h2>
      <p>
        Implementar de manera eficiente las operaciones del álgebra relacional en bases de datos distribuidas requiere una comprensión profunda de la distribución de datos y técnicas de optimización. Adaptar estas operaciones para minimizar la latencia y maximizar el rendimiento es clave para el éxito de los sistemas de bases de datos distribuidas, garantizando así consultas rápidas y eficientes.
      </p>

      <h1 style={styles.header}>Cuestionario</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.question}>
          <p>1. ¿Qué operación del álgebra relacional extrae las filas que cumplen con una condición específica?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="a"
              checked={answers.q1 === 'a'}
              onChange={handleChange}
            />
            a) Selección (σ)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="b"
              checked={answers.q1 === 'b'}
              onChange={handleChange}
            />
            b) Proyección (π)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="c"
              checked={answers.q1 === 'c'}
              onChange={handleChange}
            />
            c) Unión (∪)
          </label>
        </div>

        <div style={styles.question}>
          <p>2. ¿Qué operación del álgebra relacional selecciona columnas específicas de una relación?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="a"
              checked={answers.q2 === 'a'}
              onChange={handleChange}
            />
            a) Selección (σ)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="b"
              checked={answers.q2 === 'b'}
              onChange={handleChange}
            />
            b) Proyección (π)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="c"
              checked={answers.q2 === 'c'}
              onChange={handleChange}
            />
            c) Unión (∪)
          </label>
        </div>

        <div style={styles.question}>
          <p>3. ¿Qué operación del álgebra relacional combina los resultados de dos relaciones, eliminando duplicados?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="a"
              checked={answers.q3 === 'a'}
              onChange={handleChange}
            />
            a) Unión (∪)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="b"
              checked={answers.q3 === 'b'}
              onChange={handleChange}
            />
            b) Intersección (∩)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="c"
              checked={answers.q3 === 'c'}
              onChange={handleChange}
            />
            c) Diferencia (−)
          </label>
        </div>

        <div style={styles.question}>
          <p>4. ¿Qué operación del álgebra relacional retorna las filas presentes en ambas relaciones?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="a"
              checked={answers.q4 === 'a'}
              onChange={handleChange}
            />
            a) Unión (∪)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="b"
              checked={answers.q4 === 'b'}
              onChange={handleChange}
            />
            b) Intersección (∩)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="c"
              checked={answers.q4 === 'c'}
              onChange={handleChange}
            />
            c) Diferencia (−)
          </label>
        </div>

        <div style={styles.question}>
          <p>5. ¿Qué operación del álgebra relacional genera todas las combinaciones posibles de filas de dos relaciones?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="a"
              checked={answers.q5 === 'a'}
              onChange={handleChange}
            />
            a) Producto Cartesiano (×)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="b"
              checked={answers.q5 === 'b'}
              onChange={handleChange}
            />
            b) Join (⨝)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="c"
              checked={answers.q5 === 'c'}
              onChange={handleChange}
            />
            c) Renombrar (ρ)
          </label>
        </div>

        <div style={styles.question}>
          <p>6. ¿Qué operación del álgebra relacional combina filas de dos relaciones basándose en una condición de coincidencia?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="a"
              checked={answers.q6 === 'a'}
              onChange={handleChange}
            />
            a) Producto Cartesiano (×)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="b"
              checked={answers.q6 === 'b'}
              onChange={handleChange}
            />
            b) Join (⨝)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="c"
              checked={answers.q6 === 'c'}
              onChange={handleChange}
            />
            c) Renombrar (ρ)
          </label>
        </div>

        <div style={styles.question}>
          <p>7. ¿Qué operación del álgebra relacional cambia el nombre de una relación o de sus atributos?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q7"
              value="a"
              checked={answers.q7 === 'a'}
              onChange={handleChange}
            />
            a) Renombrar (ρ)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q7"
              value="b"
              checked={answers.q7 === 'b'}
              onChange={handleChange}
            />
            b) Proyección (π)
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q7"
              value="c"
              checked={answers.q7 === 'c'}
              onChange={handleChange}
            />
            c) Selección (σ)
          </label>
        </div>

        <div style={styles.question}>
          <p>8. ¿Qué estrategia de join en bases de datos distribuidas envía una tabla pequeña a todos los nodos para combinarse con las particiones de la tabla grande?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q8"
              value="a"
              checked={answers.q8 === 'a'}
              onChange={handleChange}
            />
            a) Partitioned Join
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q8"
              value="b"
              checked={answers.q8 === 'b'}
              onChange={handleChange}
            />
            b) Broadcast Join
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q8"
              value="c"
              checked={answers.q8 === 'c'}
              onChange={handleChange}
            />
            c) Inner Join
          </label>
        </div>

        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      {score !== null && <p>Tu puntuación es: {score}/8</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
  },
  question: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AlgebraRelacionalDistribuida;
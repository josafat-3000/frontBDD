import React, { useState } from 'react';
import correctAnswers from './answers.json';

const Quiz = () => {
    const [answers, setAnswers] = useState({
        p1: '',
        p2: '',
        p3: '',
        p4: '',
        p5: '',
    });

    const [score, setScore] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
            ...answers,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let correctCount = 0;
        Object.keys(correctAnswers).forEach((question) => {
            if (answers[question] === correctAnswers[question]) {
                correctCount += 1;
            }
        });

        const calculatedScore = (correctCount / Object.keys(correctAnswers).length) * 10;
        setScore(calculatedScore);

        // Convierte las respuestas a JSON
        const answersJSON = JSON.stringify(answers);
        console.log(answersJSON);

        // Aquí podrías enviar las respuestas a un servidor, almacenarlas localmente, etc.
    };

    return (
        <div className="quiz">
            <h1>Operación JOIN</h1>
            <h2>Introducción</h2>
            <p>
                La función JOIN en SQL se utiliza para combinar filas de dos o más tablas basadas en una columna relacionada entre ellas. Es una operación fundamental 
                en bases de datos relacionales que permite extraer datos combinados de múltiples tablas de manera eficiente. Existen varios tipos de JOIN, cada uno 
                con su propia lógica para la combinación de datos.
            </p>
            
            <h3>INNER JOIN</h3>
            <p>
                Es uno de los tipos de combinaciones más utilizados en SQL. Su objetivo es devolver todas las filas de las tablas involucradas en la combinación que 
                tienen valores coincidentes en las columnas especificadas. En otras palabras, se utiliza para combinar filas de dos o más tablas cuando existe una 
                relación entre ellas.
            </p>
            <h4>Descripción del Funcionamiento</h4>
            <div>    
                <ul>    
                    <li>
                        Identificación de Columnas Relacionadas: Primero se deben seleccionar las columnas que tienen una relación entre las tablas. Estas 
                        tablas son comúnmente claves primarias y foráneas.      
                    </li>
                    <li>
                        Comparación de Valores: Compara los valores de las columnas especificadas en las tablas involucradas. Solo las filas donde los valores 
                        de estas columnas coinciden, serán incluídas en el resultado.
                    </li>
                    <li>
                        Combinación de Filas: Una vez identificadas las coincidencias, las filas correspondientes de ambas tablas se combinan en una sola fila 
                        de resultado. 
                    </li>
                </ul>
            </div>
            <h4>Representación en Álgebra Relacional</h4>
            <p>
                Se representa mediante el operador de 'Unión natural' u operador de combinación.
            </p>
            <img src="inner_join.png" alt="INNER JOIN" />

            <h4>Ejemplo práctico</h4>
            <p>
                Se definen dos tablas: Empleados (nombre y departamento) y Departamentos (ID y Nombre).
            </p>
            <div className="inline-images">
                <img src="empleados.png" alt="Empleados" width="245" height="115" />
                <img src="departamentos.png" alt="Departamentos" width="245" height="115" />
            </div>

            <p>
                Al realizar el JOIN entre ambas tablas, donde existe relación entre Id y Departamentoid da como resultado:
            </p>
            <p><strong>SELECT</strong> * <strong>FROM</strong> Empleados E <strong>JOIN</strong> Departamentos D <strong>ON</strong> E.DepartamentoId = D.Id</p>
            <img src="join_resultado.png" alt="Resultado JOIN" width="245" height="115" />


            <h3>LEFT JOIN</h3>
            <p>
                El LEFT JOIN (o LEFT OUTER JOIN) es una operación de combinación en SQL que devuelve todas las filas de la tabla de la izquierda y las filas 
                coincidentes de la tabla de la derecha. Si no hay coincidencia, las columnas de la tabla de la derecha en el resultado contendrán valores NULL.    
            </p>
            <h4>Descripción del Funcionamiento</h4>
            <div>    
                <ul>    
                    <li>
                        Identificación de Columnas Relacionadas: Similar al INNER JOIN, se deben identificar las columnas que tienen una relación entre las 
                        tablas.    
                    </li>
                    <li>
                        Comparación de Valores: El LEFT JOIN: Compara los valores de las columnas especificadas en las tablas involucradas. Sin embargo, a 
                        diferencia del INNER JOIN, todas las filas de la tabla de la izquierda se incluyen en el resultado. 
                    </li>
                    <li>
                        Combinación de Filas: Si hay coincidencias entre las columnas relacionadas, las filas se combinan. Si no hay coincidencia, las filas 
                        de la tabla de la izquierda se combinan con valores NULL en las columnas de la tabla de la derecha. 
                    </li>
                </ul>
            </div>
            <h4>Representación en Álgebra Relacional</h4>
            <p>
                A diferencia de un INNER JOIN, donde se busca una intersección respetada por ambas tablas, con LEFT JOIN damos prioridad a la tabla de la izquierda, 
                y buscamos en la tabla derecha. Se representa con el operador de combinación externa izquierda.
            </p>
            <p>
                Si no existe ninguna coincidencia para alguna de las filas de la tabla de la izquierda, de igual forma todos los resultados de la primera tabla se 
                muestran.
            </p>
            <img src="left.png" alt="LEFT JOIN" />
            <h4>Ejemplo práctico</h4>
            <p>
                La tabla Empleados es la primera tabla en aparecer en la consulta (en el FROM), por lo tanto ésta es la tabla LEFT (izquierda), y todas sus filas 
                se mostrarán en los resultados.
            </p>
            <p>
                La tabla Departamentos es la tabla de la derecha (aparece luego del LEFT JOIN). Por lo tanto, si se encuentran coincidencias, se mostrarán los 
                valores correspondientes, pero sino, aparecerá NULL en los resultados.
            </p>
            <div className="inline-images">
                <img src="empleados.png" alt="Empleados" width="245" height="115" />
                <img src="departamentos.png" alt="Departamentos" width="245" height="115" />
            </div>
            <p><strong>SELECT</strong> E.Nombre <strong>as</strong> 'Empleado', D.Nombre <strong>as</strong> 'Departamento' <strong>FROM</strong> Empleados E 
            <strong>LEFT JOIN</strong> Departamentos D <strong>ON</strong> E.DepartamentoId = D.Id</p>
            <img src="left_resultado.png" alt="Resultado LEFT JOIN" width="245" height="115" />


            <h3>RIGHT JOIN</h3>    
            <p>
                El RIGHT JOIN (o RIGHT OUTER JOIN) es una operación de combinación en SQL que devuelve todas las filas de la tabla de la derecha y las 
                filas coincidentes de la tabla de la izquierda. Si no hay coincidencia, las columnas de la tabla de la izquierda en el resultado contendrán 
                valores NULL.    
            </p>
            <h4>Descripción del Funcionamiento</h4>
            <div>    
                <ul>    
                    <li>
                        Identificación de Columnas Relacionadas: Al igual que con otros tipos de JOIN, se deben identificar las columnas que tienen una 
                        relación entre las tablas.
                    </li>
                    <li>
                        Comparación de Valores: El RIGHT JOIN compara los valores de las columnas especificadas en las tablas involucradas. A diferencia del INNER JOIN, todas las 
                        filas de la tabla de la derecha se incluyen en el resultado.
                    </li>
                    <li>
                        Combinación de Filas: Si hay coincidencias entre las columnas relacionadas, las filas se combinan. Si no hay coincidencia, las 
                        filas de la tabla de la derecha se combinan con valores NULL en las columnas de la tabla de la izquierda.
                    </li>
                </ul>
            </div>
            <h4>Representación en Álgebra Relacional</h4>
            <p>
                Se representa mediante el operador de combinación externa derecha. En el RIGHT JOIN, se da prioridad a la tabla de la derecha, y buscamos 
                en la tabla izquierda.
            </p>
            <img src="right.png" alt="RIGHT JOIN" />
            <h4>Ejemplo práctico</h4>
            <p>
                La tabla Empleados es la tabla de la derecha y todas sus filas se mostrarán en los resultados.
            </p>
            <p>
                La tabla Departamentos es la tabla de la izquierda (aparece luego del RIGHT JOIN). Si se encuentran coincidencias, se mostrarán los 
                valores correspondientes, pero sino, aparecerá NULL en los resultados.
            </p>
            <div className="inline-images">
                <img src="empleados.png" alt="Empleados" width="245" height="115" />
                <img src="departamentos.png" alt="Departamentos" width="245" height="115" />
            </div>
            <p><strong>SELECT</strong> E.Nombre <strong>as</strong> 'Empleado', D.Nombre <strong>as</strong> 'Departamento' <strong>FROM</strong> Empleados E 
            <strong>RIGHT JOIN</strong> Departamentos D <strong>ON</strong> E.DepartamentoId = D.Id</p>
            <img src="right_resultado.png" alt="Resultado RIGHT JOIN" width="245" height="115" />

            <h3>Referencias</h3>
            <ul>
                <li>Elmasri, Ramez. Sistemas de bases de datos. Pearson Educación, 2015.</li>
                <li>Connolly, Thomas M., y Carolyn E. Begg. Database systems: A practical approach to design, implementation, and management. Pearson education, 2005.</li>
                <li>Navathe, Shamkant B., y Elmasri, Ramez. Fundamentos de Sistemas de Bases de Datos. Pearson Educación, 2015.</li>
            </ul>

            <h1>Preguntas de Opción Múltiple</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    1. ¿Cuál es el propósito principal del comando INNER JOIN?
                    <select name="p1" value={answers.p1} onChange={handleChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="a">Combinar filas de dos tablas, devolviendo todas las filas de la tabla izquierda y las filas coincidentes de la tabla derecha.</option>
                        <option value="b">Combinar filas de dos tablas, devolviendo todas las filas de la tabla derecha y las filas coincidentes de la tabla izquierda.</option>
                        <option value="c">Combinar filas de dos tablas, devolviendo solo las filas que tienen valores coincidentes en las columnas especificadas.</option>
                    </select>
                </label>
                <br />

                <label>
                    2. ¿Qué tipo de JOIN devolverá todas las filas de la tabla de la izquierda, y las filas coincidentes de la tabla de la derecha?
                    <select name="p2" value={answers.p2} onChange={handleChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="a">INNER JOIN</option>
                        <option value="b">LEFT JOIN</option>
                        <option value="c">RIGHT JOIN</option>
                    </select>
                </label>
                <br />

                <label>
                    3. ¿Qué tipo de JOIN devolverá todas las filas de la tabla de la derecha, y las filas coincidentes de la tabla de la izquierda?
                    <select name="p3" value={answers.p3} onChange={handleChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="a">INNER JOIN</option>
                        <option value="b">LEFT JOIN</option>
                        <option value="c">RIGHT JOIN</option>
                    </select>
                </label>
                <br />

                <label>
                    4. En un LEFT JOIN, ¿qué sucede si no hay coincidencia para alguna fila de la tabla izquierda?
                    <select name="p4" value={answers.p4} onChange={handleChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="a">La fila se descarta.</option>
                        <option value="b">La fila se combina con valores NULL en las columnas de la tabla derecha.</option>
                        <option value="c">La fila se combina con valores NULL en las columnas de la tabla izquierda.</option>
                    </select>
                </label>
                <br />

                <label>
                    5. En un RIGHT JOIN, ¿qué sucede si no hay coincidencia para alguna fila de la tabla derecha?
                    <select name="p5" value={answers.p5} onChange={handleChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="a">La fila se descarta.</option>
                        <option value="b">La fila se combina con valores NULL en las columnas de la tabla izquierda.</option>
                        <option value="c">La fila se combina con valores NULL en las columnas de la tabla derecha.</option>
                    </select>
                </label>
                <br />

                <button type="submit">Enviar</button>
            </form>

            {score !== null && <p>Tu puntuación es: {score.toFixed(2)}</p>}
        </div>
    );
};

export default Quiz;

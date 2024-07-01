import React, { useState } from 'react';

const Mike = () => {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: [],
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setAnswers((prevAnswers) => {
        const updatedAnswers = prevAnswers[name].includes(value)
          ? prevAnswers[name].filter((answer) => answer !== value)
          : [...prevAnswers[name], value];
        return { ...prevAnswers, [name]: updatedAnswers };
      });
    } else {
      setAnswers({
        ...answers,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newScore = 0;

    if (answers.q1 === 'c') newScore++;
    if (answers.q2 === 'b') newScore++;
    if (JSON.stringify(answers.q3.sort()) === JSON.stringify(['a', 'c'])) newScore++;

    setScore(newScore);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Cuestionario</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.question}>
          <p>1. ¿Cuál es la capital de Francia?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="a"
              checked={answers.q1 === 'a'}
              onChange={handleChange}
            />
            a) Berlín
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="b"
              checked={answers.q1 === 'b'}
              onChange={handleChange}
            />
            b) Madrid
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="c"
              checked={answers.q1 === 'c'}
              onChange={handleChange}
            />
            c) París
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="d"
              checked={answers.q1 === 'd'}
              onChange={handleChange}
            />
            d) Roma
          </label>
        </div>

        <div style={styles.question}>
          <p>2. ¿Cuál es el elemento químico con el símbolo H?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="a"
              checked={answers.q2 === 'a'}
              onChange={handleChange}
            />
            a) Helio
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="b"
              checked={answers.q2 === 'b'}
              onChange={handleChange}
            />
            b) Hidrógeno
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="c"
              checked={answers.q2 === 'c'}
              onChange={handleChange}
            />
            c) Hierro
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="d"
              checked={answers.q2 === 'd'}
              onChange={handleChange}
            />
            d) Heladio
          </label>
        </div>

        <div style={styles.question}>
          <p>3. Selecciona los planetas más grandes del sistema solar:</p>
          <label style={styles.label}>
            <input
              type="checkbox"
              name="q3"
              value="a"
              checked={answers.q3.includes('a')}
              onChange={handleChange}
            />
            a) Júpiter
          </label>
          <label style={styles.label}>
            <input
              type="checkbox"
              name="q3"
              value="b"
              checked={answers.q3.includes('b')}
              onChange={handleChange}
            />
            b) Marte
          </label>
          <label style={styles.label}>
            <input
              type="checkbox"
              name="q3"
              value="c"
              checked={answers.q3.includes('c')}
              onChange={handleChange}
            />
            c) Saturno
          </label>
          <label style={styles.label}>
            <input
              type="checkbox"
              name="q3"
              value="d"
              checked={answers.q3.includes('d')}
              onChange={handleChange}
            />
            d) Tierra
          </label>
        </div>

        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      {score !== null && <p>Tu puntuación es: {score}/3</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
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
  buttonHover: {
    backgroundColor: '#45a049',
  },
};

export default Mike;

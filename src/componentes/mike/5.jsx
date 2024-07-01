import React from 'react';

const ConsultasSQLCentralizadas = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Consultas SQL Centralizadas</h1>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Seleccionar todos los registros de una tabla</h2>
        <pre style={styles.code}>
          SELECT * FROM Cliente;
        </pre>
        <p style={styles.description}>
          Esta consulta recupera todas las filas y columnas de la tabla <code>Cliente</code>.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Seleccionar registros con una condición específica</h2>
        <pre style={styles.code}>
          SELECT * FROM Producto WHERE Categoría = 'Electrónica';
        </pre>
        <p style={styles.description}>
          Esta consulta selecciona todos los productos que pertenecen a la categoría 'Electrónica'.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Insertar un nuevo registro</h2>
        <pre style={styles.code}>
          {`INSERT INTO Cliente (ID_Cliente, Nombre, Dirección, Teléfono)\nVALUES (1, 'Juan Pérez', '123 Calle Principal', '555-1234');`}
        </pre>
        <p style={styles.description}>
          Esta consulta inserta un nuevo cliente en la tabla <code>Cliente</code> con los valores especificados.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Actualizar un registro existente</h2>
        <pre style={styles.code}>
          {`UPDATE Producto\nSET Precio = 299.99\nWHERE ID_Producto = 101;`}
        </pre>
        <p style={styles.description}>
          Esta consulta actualiza el precio del producto con <code>ID_Producto</code> 101 a 299.99.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Eliminar un registro específico</h2>
        <pre style={styles.code}>
          DELETE FROM Pedido WHERE ID_Pedido = 5001;
        </pre>
        <p style={styles.description}>
          Esta consulta elimina el pedido con <code>ID_Pedido</code> 5001 de la tabla <code>Pedido</code>.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Realizar una unión entre dos tablas</h2>
        <pre style={styles.code}>
          {`SELECT Pedido.ID_Pedido, Pedido.Fecha, Cliente.Nombre\nFROM Pedido\nINNER JOIN Cliente ON Pedido.ID_Cliente = Cliente.ID_Cliente;`}
        </pre>
        <p style={styles.description}>
          Esta consulta realiza una unión entre las tablas <code>Pedido</code> y <code>Cliente</code>, y selecciona el ID del pedido, la fecha del pedido y el nombre del cliente.
        </p>
      </section>
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
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  subheader: {
    fontSize: '1.2em',
    marginBottom: '10px',
  },
  code: {
    background: '#f4f4f4',
    padding: '10px',
    borderRadius: '5px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  },
  description: {
    marginTop: '10px',
  },
};

export default ConsultasSQLCentralizadas;
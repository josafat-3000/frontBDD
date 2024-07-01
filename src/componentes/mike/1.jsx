import React from 'react';

const ModeloEntidadRelacion = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Modelo Entidad-Relación</h1>
      <p>
        Un modelo de entidad-relación (ER) es una herramienta conceptual utilizada para representar la estructura de una base de datos de una manera gráfica. Permite definir las entidades relevantes, sus atributos y las relaciones entre ellas. A continuación se presenta un ejemplo de un modelo ER básico.
      </p>

      <h2>Ejemplo de Diagrama ER</h2>
      <div style={styles.diagram}>
        <img
          src="ruta_a_tu_imagen_diagrama_er.png"
          alt="Diagrama Entidad-Relación"
          style={styles.image}
        />
      </div>

      <h2>Componentes del Modelo ER</h2>

      <h3>1. Entidades</h3>
      <p>
        Las entidades representan objetos o conceptos del mundo real que tienen una existencia independiente en la base de datos.
      </p>
      <ul>
        <li><strong>Cliente:</strong> Representa a los clientes de la empresa.</li>
        <li><strong>Producto:</strong> Representa los productos que la empresa vende.</li>
        <li><strong>Pedido:</strong> Representa los pedidos realizados por los clientes.</li>
      </ul>

      <h3>2. Atributos</h3>
      <p>
        Los atributos son las propiedades o características de una entidad.
      </p>
      <ul>
        <li><strong>Cliente:</strong> ID Cliente, Nombre, Dirección, Teléfono.</li>
        <li><strong>Producto:</strong> ID Producto, Nombre, Precio, Categoría.</li>
        <li><strong>Pedido:</strong> ID Pedido, Fecha, Cantidad, ID Cliente, ID Producto.</li>
      </ul>

      <h3>3. Relaciones</h3>
      <p>
        Las relaciones describen cómo las entidades interactúan entre sí.
      </p>
      <ul>
        <li><strong>Cliente - Pedido:</strong> Un cliente puede realizar muchos pedidos.</li>
        <li><strong>Pedido - Producto:</strong> Un pedido puede incluir múltiples productos.</li>
      </ul>

      <h3>Diagrama ER en Texto</h3>
      <p>
        Aquí se muestra una representación textual del diagrama ER:
      </p>
      <pre>
{`
Entidad Cliente:
  - ID Cliente (Clave primaria)
  - Nombre
  - Dirección
  - Teléfono

Entidad Producto:
  - ID Producto (Clave primaria)
  - Nombre
  - Precio
  - Categoría

Entidad Pedido:
  - ID Pedido (Clave primaria)
  - Fecha
  - Cantidad
  - ID Cliente (Clave foránea)
  - ID Producto (Clave foránea)

Relaciones:
  - Cliente (1) --- (N) Pedido
  - Pedido (1) --- (N) Producto
`}
      </pre>
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
  diagram: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default ModeloEntidadRelacion;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';

const { Title } = Typography;

function Landing() {
  return (
    <div className="landing">
      <Title style={{ fontSize: '30px', padding:'30px' }}>Bienvenido a TeachRoom</Title>
      <Space size={40}> 
        <Button 
          type="primary" shape="round" size='large'
          style={{ 
            backgroundColor: '#001529', 
            borderColor: '#001529', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
            fontSize: '16px',      // Tamaño de la letra
            height: '50px',        // Altura del botón
            width: '150px'         // Anchura del botón
          }}
        >
          <Link to="/login" style={{ color: 'white' }}>Inicia sesión</Link>
        </Button>
        <Button 
          type="default" shape="round" size='large'
          style={{ 
            backgroundColor: '#fff', 
            borderColor: '#fff', 
            color: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
            fontSize: '16px',      // Tamaño de la letra
            height: '50px',        // Altura del botón
            width: '150px'         // Anchura del botón
          }}
        >
          <Link to="/register" style={{ color: 'black' }}>Regístrate</Link>
        </Button>
      </Space>
    </div>
  );
}

export default Landing;

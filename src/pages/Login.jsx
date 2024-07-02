import React, { useState, useContext  } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import axios from 'axios';
import { AuthContext } from "../context/auth";
import { Link, useNavigate } from 'react-router-dom';

const { Title } = Typography;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    axios.post("http://localhost:3000/api/auth/login", values).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        navigate('/home');
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
      <Title level={2}>Inicia Sesión</Title>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[
            { 
              required: true, 
              message: 'Por favor, ingrese su correo electrónico!' 
            },
            {
              type: 'email',
              message: 'El correo electrónico no es válido!',
            }
          ]}
        >
          <Input 
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </Form.Item>
        
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor, ingrese su contraseña!' }]}
        >
          <Input.Password 
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Iniciar Sesión
          </Button>
        </Form.Item>
      </Form>
      <div style={{ marginTop: '20px' }}>
        <Link to="/register">¿No tienes una cuenta? Regístrate</Link>
      </div>
    </div>
  );
}

export default Login;

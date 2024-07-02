




import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Uno from "./componentes/mike/1";
import Dos from "./componentes/adan/2";
import Tres from "./componentes/adan/3";
import Cuatro from "./componentes/erick/4";
import Cinco from "./componentes/mike/5";
import Seis from "./componentes/erick/6/6";
import Siete from "./componentes/mike/7";
import Register from "./pages/Register";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="app">
      <Header className="header"style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
        <div className="logo" />
        <h1 style={{ color: 'white' }}>TeachRoom</h1>
      </Header>
      <Content className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/1" element={<Uno/>} />
            <Route path="/2" element={<Dos/>} />
            <Route path="/3" element={<Tres/>}/> 
            <Route path="/4" element={<Cuatro/>} />
            <Route path="/5" element={<Cinco/>} />
            <Route path="/6" element={<Seis/>} />
            <Route path="/7" element={<Siete/>} />
            <Route path="/8" element={<h1>Events</h1>} />
            <Route path="/9" element={<h1>Events</h1>} />
          </Routes>
        </BrowserRouter>
      </Content>
    </Layout>
  );
}

export default App;

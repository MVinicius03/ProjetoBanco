import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cartao from './pages/Cartao';
import Sobre from './pages/Sobre';
import Container from './components/Container';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/Cartao" element={<Cartao />} />
          <Route path="/Sobre" element={<Sobre />} />
        </Route>

        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
      
    </Router>


  );
}

export default App;
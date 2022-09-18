import React, { useState,useEffect } from 'react';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/src/modal';

import Home from './components/home';
import Paciente from './components/Paciente';
import Medicamento from './components/medicamento';
import Diario from './components/diario';
import Login from './components/Login';
import P_reg from './components/P_reg';
import Reg from './components/Reg';
import './components/App.scss';
import NavBar from './components/Navbar';
import Retype from './components/Retype'
import swDEV from './swDEV';
function App() {
 
  useEffect(() => {
    swDEV();
  }, []);
  
 
  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/reg" element={<Reg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/p_reg" element={<P_reg />} />
        <Route path="/paciente/:cedula" element={<Paciente />} />
        <Route path="/medicamento/:cedula" element={<Medicamento />} />
        <Route path="/diario/:cedula" element={<Diario />} />
        <Route path="/Retype" element={<Retype />} />

      </Routes>
     
      </BrowserRouter>
  </div>

  )
}


export default App;


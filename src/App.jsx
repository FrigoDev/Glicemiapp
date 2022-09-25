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
import RecuperarContraseña from './components/recuperarContraseña';
import RestablecerContraseña from './components/restablecerContraseña';
import Reg from './components/Reg';
import './components/App.scss';
import NavBar from './components/Navbar';
import Retype from './components/Retype'
import swDEV from './swDEV';
import { Outlet } from 'react-router-dom';

const NavLayout = () => (
  <>
    <NavBar />
    <Outlet /> 
  </>
);
function App() {
 
  useEffect(() => {
    swDEV();
  }, []);
  
 
  return (
    
    <div className="App">
      <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<NavLayout />}>
      <Route path="/" element={<Home />} />
        <Route path="/p_reg" element={<P_reg />} />
        <Route path="/paciente/:cedula" element={<Paciente />} />
        <Route path="/medicamento/:cedula" element={<Medicamento />} />
        <Route path="/diario/:cedula" element={<Diario />} />
        <Route path="/Retype" element={<Retype />} />
        </Route>
        <Route path="/reg" element={<Reg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar-contraseña" element={<RecuperarContraseña />} />
        <Route path="/restablecer-contraseña" element={<RestablecerContraseña />} />
     

      </Routes>
     
      </BrowserRouter>
  </div>

  )
}


export default App;


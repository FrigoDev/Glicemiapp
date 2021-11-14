import React, { useState } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/src/modal';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/home';
import paciente from './components/Paciente';
import Login from './components/Login';
import P_reg from './components/P_reg';
import Reg from './components/Reg';
import './components/App.scss';
import NavBar from './components/Navbar';
function App() {
 

  return (
    <div className="App">
    <Router>
    <Switch>
      <Route path="/reg" exact={true} component={Reg}/>
      <Route path="/login" exact={true} component={Login}/>
      <div>
        <NavBar/>
    <Route path="/home" exact={true} component={Home}/>
    <Route path="/p_reg" exact={true} component={P_reg}/>
    <Route path="/paciente" exact={true} component={paciente}/>
     
      </div>

    </Switch>
  </Router>
  </div>

  )
}


export default App;

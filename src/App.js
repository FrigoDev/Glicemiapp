import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/src/modal';
import Sidebar from './components/Sidebar';
import Navbar from './components/NavBar';
import Home from './components/home';
import P_reg from './components/P_reg';
import Reg from './components/Reg';
import './components/App.scss';

function App() {
  return (
    <Router className="App">
      <Navbar/>
      <div className="flex">
      <Sidebar/>
      <div className="content">
      <Route path="/home" exact={true} component={Home}/>
      <Route path="/p_reg" exact={true} component={P_reg}/>
      <Route path="/reg" exact={true} component={Reg}/>
      </div>
      </div>
     
    
    </Router>
  );
}

export default App;

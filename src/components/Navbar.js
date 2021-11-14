import React, {useState} from "react";
import { Navbar , Nav ,NavDropdown , Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import Sidebar from "./Sidebar";
const NavBar = (props) => {

    return(
       
  <Navbar bg="dark" variant="dark">
    <Container>
    <Sidebar/>
  <Navbar.Brand href="#home">GLICDIARY</Navbar.Brand>
    </Container>
  </Navbar>

      

    
    
    )
}
export default NavBar



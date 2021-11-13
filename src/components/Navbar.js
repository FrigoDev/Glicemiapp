import React, {useState} from "react";
import { Navbar , Nav ,NavDropdown , Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import Sidebar from "./Sidebar";

const NavBar = (props) => {

    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Sidebar/>
        <FaIcons.FaBars className=' fa-8x text-black'/>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
      
      

    
    
    )
}
export default NavBar
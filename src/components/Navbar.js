import React, {useState} from "react";
import { Navbar , Nav ,NavDropdown , Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import Sidebar from "./Sidebar";
const NavBar = (props) => {

    return(
        <Navbar className="mb-5" bg="light" expand="lg">
        <Container>
        <Sidebar/>
        <Navbar.Brand as={Link} to="/" className="fw-bold" active="true" >GLICDIARY</Navbar.Brand>
        </Container>
      </Navbar>
    );
}
export default NavBar



import React, {useState} from "react";
import { Navbar , Nav ,NavDropdown , Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import Sidebar from "./Sidebar";

const Togglebutton = (props) => {
 
    return(
       <button  onClick={() => props.Toggle()}><FaIcons.FaBars className=' fa-8x text-black'/></button>
   

     
      
      

    
    
    )
}
export default Togglebutton
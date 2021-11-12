import React from "react";
import './Sidebar.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

class Sidebar extends React.Component{
render(){
    return(  
    <div className='sidebar'>
        <ul>
            <li>
                <Link to="/home" className="btn btn-primary">
                <FaIcons.FaHome/> Paciente
                </Link>
            </li>
            <li>
                <Link to="/p_reg" className="btn btn-primary">
                   Agregar paciente
                </Link>
            </li>
            <li>
                <Link to="/reg" className="btn btn-primary">
                    Cerrar sesion
                </Link>
            </li>
        </ul>
    </div>
    
    )
}
}
export default Sidebar
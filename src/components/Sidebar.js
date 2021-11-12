import React from "react";
import './Sidebar.css';
import { Link } from 'react-router-dom';
class Sidebar extends React.Component{
render(){
    return(  
    <div className='sidebar'>
        <ul>
            <li>
                <Link to="/home">
                   Paciente
                </Link>
            </li>
            <li>
                <Link to="/p_reg">
                   Agregar paciente
                </Link>
            </li>
            <li>
                <Link to="">
                    Cerrar sesion
                </Link>
            </li>
        </ul>
    </div>
    
    )
}
}
export default Sidebar
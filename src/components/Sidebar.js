import React from "react";

import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Sidebar = () => {
    return(  
    <div className='sidebar bg-light'>
        <ul>
            <li>
                <NavLink to="/home"exact className='text-dark rounded py-2 w-100 d-inline-block px-2'activeClassName='active' >
                <FaIcons.FaUser className='me-2'/> Paciente
                </NavLink>
            </li>
            <li>
                <NavLink to="/p_reg"exact className='text-dark rounded py-2 w-100 d-inline-block px-2'activeClassName='active' >
                <FaIcons.FaUserPlus className='me-2c'/> Agregar paciente
                </NavLink>
            </li>
            <li>
                <NavLink to="/reg"exact className='text-dark rounded py-2 w-100 d-inline-block px-2'activeClassName='active' >
                <FaIcons.FaDoorClosed className='me-2c'/>  Cerrar sesion
                </NavLink>
            </li>
        </ul>
    </div>  
    );
}
export default Sidebar
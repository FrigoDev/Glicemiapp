import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Pacientes',
    path: '/',
    icon: <FaIcons.FaUserCircle className=' fa-6x' />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    
  },
  {
    title: 'Registrar paciente',
    path: '/p_reg',
    icon: <FaIcons.FaUserPlus className=' fa-6x ' />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },
  {
    title: 'Cerrar sesion',
    path: '/login',
    icon: <FaIcons.FaDoorClosed className=' fa-6x ' />
  },
  {
    title: 'Test paciente',
    path: '/paciente/:cedula',
    icon: <IoIcons.IoMdPeople />
  },
];
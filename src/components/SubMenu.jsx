import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

const SidebarItem= styled(Link)`
  display: flex;
  color: #FE2472;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    i{ color:#FFFFFF;}
    color:#FFFFFF;
    background:  #FE2472;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffff;
  font-size: 18px;
  &:hover {
    background: #FFFFFF;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const navigate = useNavigate();
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <p onClick={async()=>{
        if (item.foo){
          await item.foo();
        }
        navigate(item.path);
      }}>
        <SidebarItem>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </SidebarItem>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </p>
    </>
  );
};

export default SubMenu;
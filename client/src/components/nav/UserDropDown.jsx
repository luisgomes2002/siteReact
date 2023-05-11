import React from 'react';
import './UserDropDown.css'

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function UserDropDown() {
  return (
    <li className='navbar-icon'>
      <Link to='/login' className='navbar-links--icon' id='singup'><i className='fa-regular fa-user'></i></Link>
      <div className='user-dropdown-content'>
        <NavDropdown.Item><Link to={'/login'}><i className='fa-solid fa-lock'></i>PERFIL</Link></NavDropdown.Item>
        <NavDropdown.Item><i className='fa fa-sign-out'></i> SAIR</NavDropdown.Item>
      </div>
    </li>

  )
}

export default UserDropDown
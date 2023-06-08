import React from 'react';
import './UserDropDown.css'

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function UserDropDown() {
  return ( //criar redirecionamento
    <li className='navbar-icon'>
      <div className='navbar-links--icon' id='singup'><i className='fa-regular fa-user'></i></div>
      <div className='user-dropdown-content'>
        <NavDropdown.Item><Link to='/login'><i className='fa-solid fa-lock'></i>PERFIL</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to='/adminpage'><i className='fa fa-sign-out'></i> SAIR</Link></NavDropdown.Item>
      </div>
    </li>

  )
}

export default UserDropDown
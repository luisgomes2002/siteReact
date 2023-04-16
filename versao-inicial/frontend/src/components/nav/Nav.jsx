import React from 'react';
import UserDropDown from './UserDropDown';
import './Nav.css'

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' id='navbar-logo'>MURASAKI</Link>
        <div className='navbar-toggle' id='mobile-menu'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <ul className='navbar-menu'>
          <li className='navbar-item'>
            <Link to='/categorias' className='navbar-links--categorias' id='categories-page'>CATEGORIAS</Link>
            <div className='categorias-dropdown-content'>
              <NavDropdown.Item> APRENDER </NavDropdown.Item>
              <NavDropdown.Item> MORAR </NavDropdown.Item>
              <NavDropdown.Item> VIAJAR </NavDropdown.Item>
              <NavDropdown.Item> MAIS </NavDropdown.Item>
            </div>
          </li>
          <li className='navbar-item'>
            <Link to='/sobre' className='navbar-links--sobre' id='about-page'>SOBRE</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/compartilhe' className='navbar-links--compartilhe' id='share-page'>COMPARTILHE</Link>
          </li>
          <UserDropDown />
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
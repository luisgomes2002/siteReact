import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Nav.css'

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  const [Login, setLogin] = useState(false)

  const LoginOn = () => {
    return (
      <li className='navbar-icon'>
        <div className='navbar-links--icon' id='singup' style={{ marginTop: '45%' }}><i className='fa-regular fa-user'></i></div>
        <div className='user-dropdown-content'>
          <NavDropdown.Item><Link to='/login'><i className='fa-solid fa-lock'></i>PERFIL</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to='/adminpage'><i className='fa fa-sign-out'></i> SAIR</Link></NavDropdown.Item>
        </div>
      </li>
    )
  }

  const LoginOff = () => {
    return (
      <li className='navbar-icon'>
        <div className='navbar-links--icon' id='singup'><i className='fa-regular fa-user'></i></div>
        <div className='user-dropdown-content'>
          <NavDropdown.Item><Link to='/login'><i className='fa-solid fa-lock'></i>Logar</Link></NavDropdown.Item>
        </div>
      </li>
    )
  }

  useEffect(() => {
    axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setLogin(true)
      } else {
        setLogin(false)
      }
    })
  }, [])

  const dropDown = () => {
    if (Login === true) {
      return LoginOn()
    } else {
      return LoginOff()
    }
  }

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
              <NavDropdown.Item><Link to='/japanese'>APRENDER</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/'> MORAR</Link> </NavDropdown.Item>
              <NavDropdown.Item><Link to='/'> VIAJAR</Link> </NavDropdown.Item>
              <NavDropdown.Item><Link to='/'> MAIS </Link></NavDropdown.Item>
            </div>
          </li>
          <li className='navbar-item'>
            <Link to='/sobre' className='navbar-links--sobre' id='about-page'>SOBRE</Link>
          </li>
          <li className='navbar-item'>
            {/* <Link to='/compartilhe' className='navbar-links--compartilhe' id='share-page'>COMPARTILHE</Link> */}
            <h1 className='navbar-links--disable'>COMPARTILHE</h1>
          </li>
          {dropDown()}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
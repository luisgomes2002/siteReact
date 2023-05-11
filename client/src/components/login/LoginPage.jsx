import React, { useState } from 'react';
import NavBar from '../nav/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import './Register.css';

const Login = () => {

  return (
    <>
      <nav>
        <NavBar />
        <Breadcrumb className='bread-itens-jlpt'>
          <Breadcrumb.Item ><Link to='/'><i className='fa-solid fa-house'></i></Link></Breadcrumb.Item>
          <Breadcrumb.Item >Login</Breadcrumb.Item>
        </Breadcrumb>
      </nav>

      <form>
        <h1>Logar</h1>
        <input
          type='text'
          placeholder='Nome'
        />
        <input
          type='password'
          placeholder='Senha'
        />
        <button className='button-confirm' >Entrar</button>
        <p>
          <Link to='/'>Esqueceu a senha? ・</Link>
          <Link to='/register'> Criar uma conta</Link>
        </p>
      </form>
    </>
  )
}

export default Login
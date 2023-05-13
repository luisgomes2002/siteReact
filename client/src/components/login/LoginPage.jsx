import React, { useState } from 'react';
import NavBar from '../nav/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import './Form.css';

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const getUsers = () => {
    Axios.get('http://localhost:3001/login', {
      name: name,
      password: password,
    }).then((res) => {
      if (res.data.message) {
        setLoginStatus(res.data.message)
      } else {
        setLoginStatus(res.data[0].name)
      }
    })
  }

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
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <input
          type='password'
          placeholder='Senha'
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
        <p>{loginStatus}</p>
        <button className='button-confirm' onClick={getUsers}>Entrar</button>
        <p>
          <Link to='/'>Esqueceu a senha? ・</Link>
          <Link to='/register'> Criar uma conta</Link>
        </p>
      </form>
    </>
  )
}

export default Login
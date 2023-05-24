import React, { useState } from 'react'
import NavBar from '../nav/Nav'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Form.css'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [confirmPassword, setConfirmPassword] = useState('')

  const usersAccount = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register',
      {
        name: name,
        email: email,
        password: password,
        //confirmPassword: confirmPassword
      }).then(() => {
        console.log('success')
      })
  }

  return (
    <>
      <nav>
        <NavBar />
        <Breadcrumb className='bread-itens-jlpt'>
          <Breadcrumb.Item ><Link to='/'><i className='fa-solid fa-house'></i></Link></Breadcrumb.Item>
          <Breadcrumb.Item >Registrar</Breadcrumb.Item>
        </Breadcrumb>
      </nav>

      <form>
        <h1>Criar Conta</h1>
        <input
          type='text'
          placeholder='Nome'
          onChange={(event) => {
            setName(event.target.value)
          }} />
        <input
          type='email'
          placeholder='Email'
          onChange={(event) => {
            setEmail(event.target.value)
          }} />
        <input
          type='password'
          placeholder='Senha'
          onChange={(event) => {
            setPassword(event.target.value)
          }} />
        {/* <input
          type='password'
          placeholder='Confirmar Senha'
          onChange={(event) => {
            setConfirmPassword(event.target.value)
          }} /> */}
        <p>{ }</p>
        <button className='button-confirm' onClick={usersAccount}>Criar</button>
        <p>
          <Link to='/' className='links-form'>Retorna para o início ・</Link>
          <Link to='/login' className='links-form'> Logar</Link>
        </p>
      </form>
    </>
  )
}

export default Register
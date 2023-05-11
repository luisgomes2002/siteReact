import React, { useState } from 'react';
import NavBar from '../nav/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import './Register.css';

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [age, setAge] = useState(0)

  const employee = () => {
    Axios.post('http://localhost:3001/register',
      {
        name: name,
        email: email,
        password: password,
        //age: age
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
        {/* <label>Idade:</label>
        <input
          type='number'
          onChange={(event) => {
            setAge(event.target.value)
          }} /> */}
        <button className='button-confirm' onClick={employee}>CRIAR</button>
        <p><Link to='/'>Retorna para o início</Link></p>
      </form>
    </>
  )
}

export default Register
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
  const [age, setAge] = useState(0)

  const employee = () => {
    Axios.post('http://localhost:3001/register',
      {
        name: name,
        email: email,
        password: password,
        age: age
      }).then(() => {
        console.log('success')
      })
  }

  return (
    <>
      <nav>
        <NavBar />
        <Breadcrumb className='bread-itens-jlpt'>
          <Breadcrumb.Item ><Link to='/'><i className="fa-solid fa-house"></i></Link></Breadcrumb.Item>
          <Breadcrumb.Item >Registrar</Breadcrumb.Item>
        </Breadcrumb>
      </nav>

      <form>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value)
          }} />
        <label>Email:</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value)
          }} />
        <label>Senha:</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value)
          }} />
        <label>Idade:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value)
          }} />
        <button className="button-confirm" onClick={employee}>CRIAR</button>
      </form>
    </>
  )
}

export default Register
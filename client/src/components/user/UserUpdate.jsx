import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../nav/Nav'
import { useNavigate } from 'react-router-dom'

const Update = () => {

  const navigate = useNavigate()

  const [newName, setNewName] = useState('')
  // const [newAge, setNewAge] = useState(0)
  // const [newGender, setNewGender] = useState('opN')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  // const [newJlpt, setNewJlpt] = useState('Default')


  const upUsers = (id) => {
    //e.preventDefault()
    axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        axios.put(`http://localhost:3001/update/${id}`, {
          id: id,
          name: newName,
          email: newEmail,
          password: newPassword,
        }).then((response) => {
          alert('ok')
        })
      } else {
        navigate('/login')
      }
    })

  }


  return (
    <div>
      <input
        type='text'
        autoComplete='username'
        placeholder='Nome'
        onChange={(event) => {
          setNewName(event.target.value)
        }} />
      {/* <input
        type='text'
        placeholder='Idade'
        onChange={(event) => {
          setNewAge(event.target.value)
        }} /> */}
      {/* <label>
        <input
          type='radio'
          name='myRadio'
          value='opM'
          onChange={(e) => setNewGender(e.target.value)} />
        Masculino
      </label>
      <label>
        <input
          type='radio'
          name='myRadio'
          value='opF'
          onChange={(e) => setNewGender(e.target.value)} />
        Feminino
      </label>
      <label>
        <input
          type='radio'
          name='myRadio'
          value='opN'
          onChange={(e) => setNewGender(e.target.value)}
        />
        Não informar
      </label> */}
      <input
        type='text'
        placeholder='Email'
        onChange={(event) => {
          setNewEmail(event.target.value)
        }} />
      <input
        type='password'
        autoComplete='current-password'
        placeholder='Senha'
        onChange={(event) => {
          setNewPassword(event.target.value)
        }}
      />
      {/* <label>
        JLPT Level:
        <select name='JLPT' onChange={(e) => setNewJlpt(e.target.value)}>
          <option value='default'>Default</option>
          <option value='N1'>N1</option>
          <option value='N2'>N2</option>
          <option value='N3'>N3</option>
          <option value='N4'>N4</option>
          <option value='N5'>N5</option>
        </select>
      </label> */}
      <button
        className='button-update'
        onClick={upUsers}>
        Entrar
      </button>
    </div>
  )
}

export default Update
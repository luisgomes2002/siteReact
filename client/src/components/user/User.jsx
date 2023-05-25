import React, { useState, useEffect } from 'react'
import NavBar from '../nav/Nav'
import { Navigate } from 'react-router-dom'
import './User.css'
import Baka from '../../assets/baka/background.jpg'
import axios from 'axios'

const UserPage = () => {

  const [name, setName] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setName(response.data.user.user_name)
        setLoggedIn(true)
      }
    })
  }

  if (!loggedIn) {
    return <Navigate to='/userPage' replace />
  }

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className='profile-user'>
        <div className='user-info'>
          <img src={Baka}></img>
          <div className='user-info-base'>
            <p>Name: {name}</p>
            <p>Age: </p>
            <p>Gender:</p>
            <p>Japanese level:</p>
            <p>Self-introduction:</p>
          </div>
        </div>
        <div className='user-post'>
          <div className='user-info-num'>
            <p>0 Posts</p>
            <p>0 Seguidores</p>
            <p>0 Seguindo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage
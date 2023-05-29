import React, { useState, useEffect, Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import NavBar from '../nav/Nav'
import './User.css'
import Baka from '../../assets/baka/background.jpg'
import axios from 'axios'
import { videoAbout } from '../pages/videos/JlptVideosEx';

class Loop extends Component {
  render() {
    return <div>
      {
        videoAbout.map(dados =>
          <div className='posts-space'>

          </div>
        )
      }
    </div>
  }
}

const UserPage = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  //const [gender, setGender] = useState('')

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setName(response.data.user.user_name)
        setAge(response.data.user.user_age)
        //setGender(response.data.user.user_name)
        //setJapLevel(response.data.user.user_name)
      }
    })
  }

  const PostList = ({ post, emptyHeading }) => {
    post = videoAbout.length
    const count = post;
    let heading = emptyHeading;
    if (count > 0) {
      const noun = count > 1 ? 'Posts' : 'Post';
      heading = count + ' ' + noun;
    }
    return (
      <section>
        <div className='posts-container'>
          <h2>{heading}</h2>
          <Scrollbars style={{ height: 450 }}>
            <Loop />
          </Scrollbars>
        </div>
      </section>
    );
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
            <p>Age: {age ? age : 'Nada informado'}</p>
            <p>Gender: {/*{gender ? gender : 'Nada informado'} */}</p>
            <p>Japanese level: {/*{JapLevel ? JapLevel : 'Nada informado'} */}</p>
            <p>Self-introduction:</p>
          </div>
        </div>
        <div className='user-post'>
          <div className='user-info-num'>
            <p>0 Posts</p>
            <p>0 Seguidores</p>
            <p>0 Seguindo</p>
          </div>
          <div className='posts-area'>
            <PostList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage
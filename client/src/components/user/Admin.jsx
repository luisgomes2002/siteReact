import React, { useState, useEffect, Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import NavBar from '../nav/Nav'
import './User.css'
import Baka from '../../assets/baka/background.jpg'
import axios from 'axios'
import { videoAbout } from '../pages/videos/JlptVideosEx';
import { Link } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

class Loop extends Component {
  render() {
    return <div>
      {
        videoAbout.map(dados =>
          <div className='posts-space'>
            <div></div>
            <div className='link-count'>
              <i className="fa-solid fa-heart fa-xl"></i>
              <p>0</p>
            </div>

          </div>
        )
      }
    </div>
  }
}

const AdminPage = ({ post, emptyHeading }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  //const [gender, setGender] = useState('')
  const [id, setId] = useState('')


  //client
  const [info, setInfo] = useState([])
  const [deleteInfo, setDeleteInfo] = useState([])

  useEffect(() => {
    getUsersForTable()
    getUsers()
  }, [])

  const getUsers = () => {
    axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setName(response.data.user.user_name)
        setAge(response.data.user.user_age)
        setId(response.data.user.user_id)
        //setGender(response.data.user.user_name)
        //setJapLevel(response.data.user.user_name)
      }
    })
  }

  const getUsersForTable = () => {
    axios.get('http://localhost:3001/userfortable').then((response) => {
      setInfo(response.data)
    })
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setDeleteInfo(
        deleteInfo.filter((val) => {
          return val.user_id != id
        })
      )
    })
  }

  post = videoAbout.length
  const count = post;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Posts' : 'Post';
    heading = count + ' ' + noun;
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
            <Link to={`/update/${id}`}><button>Go Update id={id}</button></Link>
            <p>Name: {name}</p>
            <p>Age: {age ? age : 'Nada informado'}</p>
            <p>Gender: {/*{gender ? gender : 'Nada informado'} */}</p>
            <p>Japanese level: {/*{JapLevel ? JapLevel : 'Nada informado'} */}</p>
            <p>Self-introduction:</p>
          </div>
        </div>
        <div className='user-post'>
          <div className='user-info-num'>
            <p>{heading}</p>
            <p>0 Seguidores</p>
            <p>0 Seguindo</p>
          </div>
          <div className='posts-area'>
            <section>
              <div className='posts-container'>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="posts" title="Posts">
                    <Scrollbars style={{ height: 700 }}>
                      <Loop />
                    </Scrollbars>
                  </Tab>
                  <Tab eventKey="users" title="Users">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Age</th>
                          <th>Admin</th>
                        </tr>
                      </thead>
                      <tbody>
                        {info.map((val, key) => {
                          return (
                            <>
                              <tr>
                                <td>{val.user_id}</td>
                                <td>{val.user_name}</td>
                                <td>{val.user_email}</td>
                                <td>{val.user_age}</td>
                                <td>{val.admin} </td>
                                <td>
                                  <button
                                    className='delete-button'
                                    onClick={() => { deleteUser(val.user_id) }}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            </>
                          )
                        })}
                      </tbody>
                    </Table>
                  </Tab>
                </Tabs>

              </div>
            </section>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AdminPage 
import React from "react";
import './JapaneseLearner.css'
import NavBar from "../../../nav/Nav";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

const Learner = () => {
  return (
    <>
      <nav>
        <NavBar />
        <Breadcrumb className='bread-itens-jlpt'>
          <Breadcrumb.Item ><Link to='/'><i className="fa-solid fa-house"></i></Link></Breadcrumb.Item>
          <Breadcrumb.Item ><Link to='/japanese'>Aprender Japonês</Link></Breadcrumb.Item>
          <Breadcrumb.Item >Japonês</Breadcrumb.Item>
        </Breadcrumb>
      </nav>
      <div className="background">
        <h1>Japonês</h1>
      </div>
    </>
  )
}

export default Learner 
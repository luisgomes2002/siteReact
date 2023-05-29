import React from 'react';
import NavBar from '../nav/Nav';
import './HomePage.css'
import './Services.css'
import './About.css'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div className='home' id='home'>
      <div className='home-container'>

        {/* Navbar Section */}
        <NavBar />

        {/* <home Section */}
        <div className='home-imag'>
          <h1 className='home-heading'>Gosta da Cultura Japonesa?</h1>
          <p className='home-description'>Qual é o seu interesse?</p>
          <button className='home-btn'><Link to='/'>Explore</Link></button>
          {/* Criar um pagina com todos os serviços */}
        </div>

      </div>
    </div>
  )
}

function Services() {
  return (
    <div className='categorias' id='categorias' >
      <div className='categorias-wrapper'>

        <div className='categorias-card'>
          <div className='categorias-btns'>
            <Link to='/japanese'>
              <span className='span-btns'>MOSTRE MAIS</span>
              <span className='span-card'><h3>APRENDA JAPONÊS</h3></span>
            </Link>
          </div>
        </div>
        <div className='categorias-card1'>
          <div className='categorias-btns'>
            <Link to='/'>
              <span className='span-btns'>MOSTRE MAIS</span>
              <span className='span-card'><h3>MORE NO JAPÃO</h3></span>
            </Link>
          </div>
        </div>
        <div className='categorias-card2'>
          <div className='categorias-btns'>
            <Link to='/'>
              <span className='span-btns'>MOSTRE MAIS</span>
              <span className='span-card'><h3>VIAJE PARA O JAPÃO</h3></span>
            </Link>
          </div>
        </div>
        <div className='categorias-card3'>
          <div className='categorias-btns'>
            <Link to='/'>
              <span className='span-btns'>MOSTRE MAIS</span>
              <span className='span-card'><h3>VEJA MAIS</h3></span>
            </Link>
          </div>
        </div>
        <div className='categorias-card4'>
          <div className='categorias-btns'>
            <Link to='/'>
              <span className='span-btns'>MOSTRE MAIS</span>
              <span className='span-card'><h3>COMPARTILHE</h3></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className='text'>
      <h1>SOBRE</h1>
      <div className='about-box'>
        <Card style={{ width: '18rem' }} className='m-3'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='m-3'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='m-3'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <Home />
      <Services />
      <About />
    </>
  )
}

export default HomePage
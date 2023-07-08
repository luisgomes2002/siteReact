import React from 'react';
import NavBar from '../nav/Nav';
import './HomePage.css'
import './Services.css'
import './About.css'
import './Novidades.css'
import { Link } from 'react-router-dom';

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
        <img />
        <div>
          <p className='card-title'>Sobre Murasaki</p>
          <p className='card-text'>
            Olá! Seja bem-vindo ao MURASAKI,
            o site definitivo para todos aqueles que desejam embarcar na emocionante jornada de aprender japonês. Sou Luis Gomes, o criador deste projeto apaixonante,
            e estou entusiasmado em compartilhar com você tudo o que o MURASAKI tem a oferecer.
            Junte-se a nós no MURASAKI e comece sua jornada de aprendizado do japonês hoje mesmo.
            Vamos explorar juntos as maravilhas deste idioma único e desbloquear um mundo de oportunidades!
          </p>
          <p className='card-text'>Luis Gomes</p>
          <p className='card-text'>Fundador da MURASAKI</p>
        </div>
      </div>
    </div >
  )
}


const Novidades = () => {
  return (
    <div className='text' style={{ paddingTop: '50px' }}>
      <h1>Novidades</h1>
      <div className='info-area'>
        <div className='info-img'>
          <div className="text-info">
            <p>
              Apresentamos com entusiasmo uma emocionante novidade
              que estamos desenvolvendo exclusivamente para o site MURASAKI!
              Agora, os alunos terão a oportunidade de compartilhar suas dúvidas e
              conhecimentos no estudo de línguas estrangeiras como nunca antes.
              Sabemos o quão crucial é para os alunos de línguas estrangeiras ter um
              espaço onde possam esclarecer suas dúvidas e, ao mesmo tempo,
              contribuir com seu próprio conhecimento para ajudar os outros.
              Com essa nova funcionalidade, queremos criar uma comunidade vibrante e
              interativa, onde todos possam se conectar e aprender juntos.
            </p>
            <p className='come-soon'>EM BREVE</p>
          </div>
          <div className='text-img'>
            <p>COMPARTILHE</p>
          </div>
        </div>
      </div>
    </div >
  )
}

function HomePage() {
  return (
    <>
      <Home />
      <Services />
      <About />
      <Novidades />
    </>
  )
}

export default HomePage
import React from 'react'
import './JapaneseHome.css'
import './Info.css'
import './Alfabeto.css'
import './Dicas.css'
import './Cursos.css'
import NavBar from '../../nav/Nav'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Home() {
  return (
    <div className='hero-japanese' id='home'>
      <div className='hero-container'>
        <NavBar />
        <h1 className='hero-heading'>Interessado em aprender <span>JAPONÊS?</span></h1>
        <p className='hero-description'>Seja para assistir anime sem legenda ou ir para o Japão</p>
      </div>
    </div>
  )
}

function Info() {
  return (
    <div className='main' id='about'>
      <Breadcrumb className='bread-itens-info'>
        <Breadcrumb.Item ><Link to='/'><i className='fa-solid fa-house'></i></Link></Breadcrumb.Item>
        <Breadcrumb.Item >Aprender Japonês</Breadcrumb.Item>
      </Breadcrumb>
      <div className='main-container'>
        <div className='main-content'>
          <h1>Um pouco sobre</h1>
          <p>Na seção a seguir, você encontrará não apenas o básico do japonês, mas também um guia completo para estudar de forma independente, sem depender de cursos.</p>
          <p>Porém, caso você sinta a necessidade de adquirir um curso ou tenha recursos disponíveis, mais adiante compartilharei alguns cursos que conheço, juntamente com os respectivos links do criador.</p>
          <p>Apenas para relembrar, este site não tem como objetivo principal ensinar o japonês, mas sim orientar o estudante. Vamos começar!</p>
        </div>
      </div>
    </div>
  )
}

function TabsJlpt() {
  return (
    <div className='title'>
      <h2>CATEGORIAS</h2>
      <div className='tabs-container'>
        <div className='tabs-wrapper'>
          <Link to='/jlpt' className='box-items'>
            <h1>JLPT</h1>
          </Link>
          <Link to='/learner' className='box-items2' >
            <h1>JAPONÊS</h1>
          </Link>
          <Link to='/jlpt' className='box-items3' >
            <h1>DICAS</h1>
          </Link>
          <Link to='/jlpt' className='box-items4' >
            <h1>CURSOS</h1>
          </Link>
        </div >
      </div >
    </div >
  )
}


function JapaneseHome() {
  return (
    <>
      <Home />
      <Info />
      <TabsJlpt />
    </>
  )
}

function Alfabeto() {
  return (
    <div className='hiragana' id='alfabeto'>
      <div className='hiragana-container'>
        <div className='hiragana-contentabout'>
          <div className='hiragana-wrapper'>
            <div className='card2'>
              <div className='services-btn'><Link to='/'> <button>Aprender</button></Link></div>
            </div>
            <h1>Alfabetos<p>Falar um pouco do ALFABETO</p></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

function Dicas() {
  return (
    <div className='dicas' id='tips'>
      <div className='dicas-container'>
        <div className='dicas-contentabout'>
          <div className='dicas-wrapper'>
            <h1>Dicas<p>Falar um pouco das Dicas</p></h1>
            <div className='card3'>
              <div className='services-btn'><Link to='/'><button>Aprender</button></Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Cursos() {
  return (
    <div className='hiragana' id='alfabeto'>
      <div className='hiragana-container'>
        <div className='hiragana-contentabout'>
          <div className='hiragana-wrapper'>
            <h1>Cursos<p>Falar um pouco das Cursos </p></h1>
            <div className='card5'>
              <div className='services-btn'><Link to='/'><button>Aprender</button></Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JapaneseHome
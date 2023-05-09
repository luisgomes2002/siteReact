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
          <p>Na seção abaixo não ensinarei somente o basico do Japonês, mas também haverá um guia para aprender o japonês sozinho sem depender de cursos.</p>
          <p>Mas se sentir na necessidade de comprar um curso ou tem grana sobrando, mais abaixo deixarei alguns cursos que conheço com um link do criador.</p>
          <p>Só relembrando que esse site não é focado em ensinar o japonês, mas em guiar o estudante. Vamos começar!!!</p>
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
          <Link to='/jlpt' className='box-items' >
            <h1>JAPONÊS</h1>
          </Link>
          <Link to='/jlpt' className='box-items' >
            <h1>DICAS</h1>
          </Link>
          <Link to='/jlpt' className='box-items' >
            <h1>CURSOS</h1>
          </Link>
        </div >
      </div >
      {/* <div className='tabs'>
        <div className='tabs-wrap'>
          <p to='/jlpt' className='box-text' >
            Entenda um pouco mais sobre o JLPT, onde fazer a prova,
            como e quanto o valor de incrição de cada nível.
          </p>
          <p to='/jlpt' className='box-text' >
            Essa seção é um guia dos assutos do N5 até o N1 com explicações
            do tema e um vídeo para complementar o aprendizado.
          </p>
          <p to='/jlpt' className='box-text' >
            Aqui você encontrar dicas como extensões do navegador, apps e sites para facilitar
            e impulsionar seus estudos.
          </p>
          <p to='/jlpt' className='box-text' >
            Quer uma ajuda nos estudos, encontrar materiais de japonês com mais facilidade e tem
            uma grana sobrando? então clique aqui.
          </p>
        </div >
      </div > */}
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
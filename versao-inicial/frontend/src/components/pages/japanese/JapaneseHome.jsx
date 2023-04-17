import React from 'react'
import './JapaneseHome.css'
import './Info.css'
import Jlpt from './jlpt/Jlpt'
import './Alfabeto.css'
import './Dicas.css'
import './Cursos.css'
import NavBar from '../../nav/Nav'
import { Link } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function TabsJlpt() {
  return (
    <Tabs
      defaultActiveKey="JLPT"
      id="fill-tab-example"
      className="mt-4"
      fill
      style={{ color: '#000' }}
    >
      <Tab eventKey="JLPT" title="JLPT">
        <Jlpt />
      </Tab>
      <Tab eventKey="ALFABETO" title="ALFABETO">
        <Alfabeto />
      </Tab>
      <Tab eventKey="DICAS" title="DICAS">
        <Dicas />
      </Tab>
      <Tab eventKey="CURSOS" title="CURSOS" >
        <Cursos />
      </Tab>
    </Tabs>
  );
}

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
    <div className="hiragana" id="alfabeto">
      <div className="hiragana-container">
        <div className="hiragana-contentabout">
          <div className="hiragana-wrapper">
            <div className="card2">
              <div className="services-btn"><Link to="/"> <button>Aprender</button></Link></div>
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
    <div className="dicas" id="tips">
      <div className="dicas-container">
        <div className="dicas-contentabout">
          <div className="dicas-wrapper">
            <h1>Dicas<p>Falar um pouco das Dicas</p></h1>
            <div className="card3">
              <div className="services-btn"><Link to="/"><button>Aprender</button></Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Cursos() {
  return (
    <div className="hiragana" id="alfabeto">
      <div className="hiragana-container">
        <div className="hiragana-contentabout">
          <div className="hiragana-wrapper">
            <h1>Cursos<p>Falar um pouco das Cursos </p></h1>
            <div className="card5">
              <div className="services-btn"><Link to="/"><button>Aprender</button></Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JapaneseHome
import React, { Fragment } from 'react'
import './Jlpt.css'
import NavBar from '../../../nav/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { VideoList } from '../../videos/LoopVideo/Loop';

import Button from 'react-bootstrap/Button';

function JlptHome() {
  return (
    <>
      <nav>
        <NavBar />
        <Breadcrumb className='bread-itens-jlpt'>
          <Breadcrumb.Item ><Link to='/'><i className="fa-solid fa-house"></i></Link></Breadcrumb.Item>
          <Breadcrumb.Item ><Link to='/japanese'>Aprender Japonês</Link></Breadcrumb.Item>
          <Breadcrumb.Item >JLPT</Breadcrumb.Item>
        </Breadcrumb>
      </nav>
      <div className='jlpt-btn-categories'>
        <Link to='/'><Button variant="dark">JAPONÊS </Button></Link>
        <Link to='/'><Button variant="dark">DICAS </Button></Link>
        <Link to='/'><Button variant="dark">CURSOS</Button></Link>
      </div>
      <div className='jlpt-home-img'>
        <h1>JLPT</h1>
      </div>
      <div className='jlpt-home'>
        <p>O JLPT (Avaliação de Proficiência na Língua Japonesa ou 日本語能力試験)
          é uma uma prova de japonês que tem 5 níveis diferentes, atigamente essa prova tinha 4 níveis,
          mas em alguns anos atrás foi adicionado um quinto nível. Esse exame vai do N5 até o N1,
          sendo o N5 o mais baixo e o N1 mais alto. A prova do JLPT é feita 1 ou 2 vezes por ano dependendo da região que é feita.
          Se você é uma pessoa com o interesse de trabalhar no Japão, tenha em mente que a maioria dos trabalhos precisará no mínimo do N2.
          Nessa link você pode encontrar mais informações sobre <Link to='/trabalho' target='_blank'>TRABALHO NO JAPÃO.</Link></p>
        <h2>No link abaixo você poderar encontrar o consulado e o site da sua região.</h2>
        <Link to='https://www.br.emb-japan.go.jp/itpr_pt/enderecos_uteis.html' target='_blank'>SITE DA EMBAIXADA DO JAPÃO NO BARSIL</Link>
        <p>Dê uma boa olhada nessa tabela de cada nível da prova do JLPT:</p>
      </div>
    </>

  )
}

function TableJplt() {
  return (
    <div className='table-jlpt'>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Nível</th>
            <th>Conteúdo da prova</th>
            <th>Tempo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><br />N5</td>
            <td>Vocabulário <br /> Gramática <br /> Leitura Compreensão Oral</td>
            <td>25 minutos <br /> 50 minutos <br /> 30 minutos</td>
          </tr>
          <tr>
            <td><br />N4</td>
            <td>Vocabulário <br />Gramática <br /> Leitura Compreensão Oral</td>
            <td>30 minutos <br /> 60 minutos <br /> 35 minutos</td>
          </tr>
          <tr>
            <td><br />N3</td>
            <td>Vocabulário <br />Gramática <br /> Leitura Compreensão Oral</td>
            <td>30 minutos <br /> 70 minutos <br /> 40 minutos</td>
          </tr>
          <tr>
            <td>N2</td>
            <td>Vocabulário / Gramática e Leitura <br /> Compreensão Oral</td>
            <td>105 minutos <br /> 50 minutos</td>
          </tr>
          <tr>
            <td>N1</td>
            <td>Vocabulário / Gramática e Leitura <br /> Compreensão Oral</td>
            <td>110 minutos <br /> 60 minutos</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

function TabValue() {
  return (
    <div className='jlptlist-content'>
      <div className='value-tab m-4' >
        <h1 className='jlpt-list-title'>Mais algumas informações úteis sobre a prova!</h1>
        <p>Lembrando que a prova não é de graça, e esses são os valores:</p>
        <li> Preço do N5: R$110,00 </li>
        <li> Preço do N4: R$120,00 </li>
        <li> Preço do N3: R$130,00 </li>
        <li> Preço do N2: R$140,00 </li>
        <li> Preço do N1: R$170,00 </li>
      </div>
      <div className='local-tab m-3'>
        <p>Nesse site você pode conferir <Link to='https://www.jlpt.jp/e/application/overseas_list.html'
          target='_blank'>TODAS AS CIDADES DO MUNDO</Link> que a prova é realizada. <br /> No Brasil, pode ser
          realizado nas seguintes cidades:</p>
        <li>São Paulo</li>
        <li>Londrina</li>
        <li>Belém</li>
        <li>Rio de Janeiro</li>
        <li>Porto Alegre</li>
        <li>Brasília</li>
        <li>Salvador</li>
        <li>Manaus</li>
      </div>
    </div>
  )
}

function Info() {
  return (
    <div>
      <div className='show-video-list'>
        {/* <h1 className='info-video'>Aqui em baixo você pode encontrar vídeos sobre a prova do JLPT
          e entender um pouco mais do assunto
        </h1> */}
        <VideoList />
      </div>
    </div>
  )
}


function Jlpt() {
  return (
    <Fragment>
      <JlptHome />
      <TableJplt />
      <TabValue />
      <Info />
    </Fragment>
  )
}

export default Jlpt
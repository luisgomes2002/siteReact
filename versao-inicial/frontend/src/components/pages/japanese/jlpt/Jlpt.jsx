import React from 'react'
import './Jlpt.css'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function TableJplt() {
  return (
    <Table striped bordered hover variant='dark' className='my-5'>
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
  );
}

function JlptHome() {
  return (
    <div className='jlpt-home'>
      <h1>JLPT</h1>
      <p>O JLPT (Avaliação de Proficiência na Língua Japonesa ou 日本語能力試験) é uma uma prova de japonês que tem 5
        níveis diferentes, atigamente essa prova tinha 4 níveis, mas em alguns anos atrás foi adicionado um
        quinto nível. Esse exame vai do N5 até o N1, sendo o N5 o mais baixo e o N1 mais alto. A prova do
        JLPT é feita 1 ou 2 vezes por ano dependendo da região que é feita. Se você é uma pessoa com o
        interesse de trabalhar no Japão, tenha em mente que a maioria dos trabalhos precisará no mínimo do N2. Nessa
        link você pode encontrar mais informações sobre <Link to='/' target='_blank'>trabalhar no Japão.</Link></p>

      <h2>No link abaixo você poderar encontrar o consulado e o site da sua região.</h2>

      <Link to='https://www.br.emb-japan.go.jp/itpr_pt/enderecos_uteis.html' target='_blank'>Site da Embaixada do Japão no Brasil</Link>
      <p>Dê uma boa olhada nessa tabela de cada nível e o tempo de prova:</p>
    </div>
  )
}

function Videos() {
  return (
    <div className='video-container'>
      <div className='video-space'>
        <iframe
          src='https://www.youtube.com/embed/iaOElfrWIo8'
          title='Tudo que você precisa saber sobre o JLPT!'
          width='95%'
          height='80%'
        ></iframe>
        <Link to='https://youtu.be/iaOElfrWIo8' target='_blank'>
          <h3>Tudo que você precisa saber sobre o JLPT!
            <br />
            <p>Em Português</p>
          </h3>
        </Link>
      </div>
      <div className='video-space'>
        <iframe
          src='https://www.youtube.com/embed/sm5cnpDkhuY'
          title='Learn Japanese｜Everything you need to know about JLPT｜How to Prepare for JLPT'
          width='95%'
          height='80%'
        ></iframe>
        <Link to='https://youtu.be/sm5cnpDkhuY' target='_blank'>
          <h3>Learn Japanese｜Everything you need to know about JLPT｜How to Prepare for JLPT<br />
            <p>Em Inglês e Japonês</p>
          </h3>
        </Link>
      </div>
      <div className='video-space'>
        <iframe
          src='https://www.youtube.com/embed/8jW7YAcwbl0'
          title='【日本語教師になるための試験】日本語教育能力検定試験について'
          width='95%'
          height='80%'
        ></iframe>
        <Link to='https://youtu.be/8jW7YAcwbl0' target='_blank' >
          <h3>【日本語教師になるための試験】日本語教育能力検定試験について
            <p>Em Japonês</p>
          </h3>
        </Link>
      </div>
    </div>
  )
}

function Jlpt() {
  return (
    <>
      <JlptHome />
      <TableJplt />
      <Videos />
    </>
  )
}

export default Jlpt
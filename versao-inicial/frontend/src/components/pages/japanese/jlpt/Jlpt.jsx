import React, { Fragment } from 'react'
import './Jlpt.css'
import NavBar from '../../../nav/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { VideoList } from '../../videos/LoopVideo/Loop';
import imgMichi from '../../../../assets/JLPT/michi.jpg'

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

      <div className='background'>
        <div className='config-text'>
          {/* <div className='jlpt-home-img'>
          < h1>JLPT</h1>
          </div> */}
          <div className='jlpt-home'>
            <h3>O JLPT (Avaliação de Proficiência na Língua Japonesa ou 日本語能力試験)
              é uma uma prova de japonês que tem 5 níveis diferentes, atigamente essa prova tinha 4 níveis,
              mas em alguns anos atrás foi adicionado um quinto nível. Esse exame começa no N5 até o N1 mas cada pessoa pode escolher
              qual o nível que deseja fazer. A prova do JLPT é feita 1 ou 2 vezes por ano dependendo da região que é feita.
              Se você é uma pessoa com o interesse de trabalhar no Japão, tenha em mente que a maioria dos trabalhos precisará no mínimo do N2 e geralmente
              trabalho que envolve falar bastante com pessoas requer o N1. Nesse link você pode encontrar mais informações
              sobre <Link to='/trabalho' target='_blank'>TRABALHO NO JAPÃO.</Link></h3>
            <iframe width="559" height="310" src="https://www.youtube.com/embed/VBQSbKnuXQ4"
              title="How did you pass JLPT N1?" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <img src={imgMichi} alt="" style={{ width: 900, height: 570 }} />
          <p className='p-center'>(imagem: Pixabay)</p>
          <h2>No link abaixo você poderar encontrar o site do consulado da sua região.</h2>
          <Link to='https://www.br.emb-japan.go.jp/itpr_pt/enderecos_uteis.html' target='_blank'>SITE DA EMBAIXADA DO JAPÃO NO BARSIL</Link>
          <p>Nessa tabela tem algumas informações básicas de cada nível da prova:</p>
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
          <div>
            <div className='jlptlist-content'>
              <h1>Valores e localizações</h1>
              <h3> A prova do JPLT é realizada no mundo inteiro, sendo a Ásia o local com o maior número de locais de aplicação e em cada país tem o seu
                preço para fazer a inscrição da prova. Olhando nesse <Link to='https://www.jlpt.jp/e/application/overseas_list.html'
                  target='_blank'>SITE</Link>, poderá encontrar o local de realização da prova.
              </h3>
            </div>
            <div className='grid-card'>
              <div className='tabs-config' >
                <h2>Valor</h2>
                <p>Cada nível do JLPT tem o seu valor de inscrição
                  sendo eles respectivamente:
                </p>
                <li> Preço do N5: R$110,00 </li>
                <li> Preço do N4: R$120,00 </li>
                <li> Preço do N3: R$130,00 </li>
                <li> Preço do N2: R$140,00 </li>
                <li> Preço do N1: R$170,00 </li>
              </div>
              <div className='tabs-config'>
                <h2>Localidades</h2>
                <p>No Brasil essas são as únicas cidades que
                  a prova é realizada, e algumas delas são feitas 1 vez por ano
                  e outras 2 vezes.</p>
                <p></p>
                <li>
                  São Paulo /
                  Rio de Janeiro /
                  Porto Alegre /
                  Brasília :
                  2 Provas
                </li>
                <li>
                  Londrina /
                  Belém /
                  Salvador /
                  Curitiba /
                  Manaus :
                  1 Prova
                </li>
              </div>
            </div>
            <div className="jlptlist-content">
              <h3>Para entender um pouco mais e receber dicas sobre o JLPT, assista os vídeos abaixo</h3>
            </div>

          </div>
        </div>
        <div className="video-gird">
          <VideoList />
        </div>
      </div>
    </>
  )
}

function Jlpt() {
  return (
    <Fragment className='background-img'>
      <JlptHome />
    </Fragment>
  )
}

export default Jlpt
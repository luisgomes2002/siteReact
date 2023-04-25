import React, { Fragment } from 'react'
import './Jlpt.css'
import NavBar from '../../../nav/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { VideoList } from '../../videos/LoopVideo/Loop';
import japanCulture from '../../../../assets/JLPT/japanCulture.jpg'

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
          <h1 className='jlpt-logo'>JLPT</h1>
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
          <div className="center-items">
            <h1>Níveis do JLPT</h1>
            <div className="grid-img">
              <div>
                <img src={japanCulture} alt="" style={{ width: 700, height: 470 }} />
                <p className='p-center'>(imagem: Pixabay)</p>
              </div>
              <div className='m-5'>
                <h3>A prova é dividida em 5 níves de proficiência sendo o mais baixo o N5 e o mais alto o N1,
                  para pessoas interessadas em aprender o japonês para visitar o japão, com um N5 ou N4 já
                  consegue ter uma experiências mais confortável como ir ao restaurante, fazer check in no hotel e outras
                  coisas simples. Mas se estiver esperando conversar com nativos, ou ter entender a cultura japonesa
                  mais profundamente, no mínimo ter um nível equivalente ao N3. Qualquer pessoa com o N3 já pode ser considerado
                  um bom falente de japonês, e alguns professores acham que essas pessoas são aptas para ensinar o japonês por
                  já ter uma boa base da língua.</h3>
              </div>
            </div>
            <div className='jlpt-about'>
              <h3 className='mb-5'>Mas talvez você queira ir para trabalhar, se esse for o caso então é bom saber que a maioria das empresas
                pedem no mínimo o N2 comprovado, com exceção de algumas empresas de TI que as vezes só pedem o bom nível de
                inglês. Mas vamos falar a real, se você esta querendo construir uma vida em outro país, o mínimo é aprender
                a língua para o seu próprio bem, seja em resolver as questões burocráticas ou comprar um comida no konbini
                sem depender de ninguém.
              </h3>
              <h1>Pontuação</h1>
              <h3>O sistema de pontuação do JLPT é feito da seguinte forma, a pontuação geral é a mesma para todos
                os níveis, vai de 0 até 180 pontos, o que muda é nota de corte e o pontos a quantidade de pontos ganhos
                em cada área.
              </h3>
              <h3>Nessa tabela tem algumas informações básicas de cada nível da prova:</h3>
            </div>
          </div>
          <div className='table-jlpt'>
            <div className="table-notas">
              <Table striped bordered hover variant='dark'>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'center' }}>Nível</th>
                    <th style={{ textAlign: 'center' }} >Pontuação Global</th>
                    <th style={{ textAlign: 'center' }} colSpan={3}>Pontuação de cada divisão </th>
                    <th style={{ textAlign: 'center' }}>Conteúdo da prova</th>
                    <th style={{ textAlign: 'center' }}>Tempo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><br />N5</td>
                    <td><br />Nota de Corte 80 Pontos</td>
                    <td colSpan={2}>Conhecimento do idioma <br />(escrita, vocabulário,
                      gramática) / Compreensão do texto <br /><b> 0 a 120 pontos / nota de corte
                        de 38 pontos <br /> 0 a 60 pontos / nota de corte
                        de 19 pontos</b></td>
                    <td>Compreensão auditiva <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b></td>
                    <td>Vocabulário <br /> Gramática <br /> Leitura Compreensão Oral</td>
                    <td>25 minutos <br /> 50 minutos <br /> 30 minutos</td>
                  </tr>
                  <tr>
                    <td><br />N4</td>
                    <td><br />Nota de Corte 90 Pontos</td>
                    <td colSpan={2}>Conhecimento do idioma <br />(escrita, vocabulário,
                      gramática) / Compreensão do texto <br /><b> 0 a 120 pontos / nota de corte
                        de 38 pontos <br /> 0 a 60 pontos / nota de corte
                        de 19 pontos</b></td>
                    <td>Compreensão auditiva <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b></td>
                    <td>Vocabulário <br />Gramática <br /> Leitura Compreensão Oral</td>
                    <td>30 minutos <br /> 60 minutos <br /> 35 minutos</td>
                  </tr>
                  <tr>
                    <td><br />N3</td>
                    <td><br />Nota de Corte 95 Pontos</td>
                    <td>Conhecimento
                      do idioma (escrita, vocabulário, gramática) <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b></td>
                    <td>Compreensão do texto <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b></td>
                    <td>Conhecimento
                      Compreensão auditiva <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b></td>
                    <td>Vocabulário <br />Gramática <br /> Leitura Compreensão Oral</td>
                    <td>30 minutos <br /> 70 minutos <br /> 40 minutos</td>
                  </tr>
                  <tr>
                    <td>N2</td>
                    <td>Nota de Corte 90 Pontos</td>
                    <td>Conhecimento
                      do idioma (escrita, vocabulário, gramática) <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b></td>
                    <td>Compreensão do texto <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b></td>
                    <td>Conhecimento
                      Compreensão auditiva <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b></td>
                    <td>Vocabulário / Gramática e Leitura <br /> Compreensão Oral</td>
                    <td>105 minutos <br /> 50 minutos</td>
                  </tr>
                  <tr>
                    <td>N1</td>
                    <td>Nota de Corte 100 Pontos</td>
                    <td>Conhecimento
                      do idioma (escrita, vocabulário, gramática) <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b></td>
                    <td>Compreensão do texto <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b></td>
                    <td>Conhecimento
                      Compreensão auditiva <br /> <b>0 a 60 pontos / nota de corte 19 pontos</b></td>
                    <td>Vocabulário / Gramática e Leitura <br /> Compreensão Oral</td>
                    <td>110 minutos <br /> 60 minutos</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <h3>Todos que prestarem o exame receberão o comunicado de aprovação ou reprovação entre um ou
              dois meses depois da realização da prova. Para aqueles que passarem na prova vão receber um certificado em suas casas.
              Esse certificado pode demorar mais de um mês para ser entregue.
            </h3>
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
            <div className="link-consulado">
              <h3>Para saber qual é o consulado da sua região acesse o link abaixo.</h3>
              <Link to='https://www.br.emb-japan.go.jp/itpr_pt/enderecos_uteis.html' target='_blank'>SITE DA EMBAIXADA DO JAPÃO NO BARSIL</Link>
            </div>
            <div className="jlptlist-content">
              <h1>Vídeos</h1>
              <h3>Entenda um pouco mais sobre o JLPT assistindo os vídeos abaixo.</h3>
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
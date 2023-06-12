import React, { useState } from 'react'
import './Portfolio.css'
import NavBar from '../nav/Nav'
import { itens } from './PortfolioItens'

const Portfolio = () => {
  const [carouselIndices, setCarouselIndices] = useState(itens.map(() => 0))

  const previousImage = (index) => {
    setCarouselIndices((prevIndices) => {
      const newIndices = [...prevIndices]
      newIndices[index] = (newIndices[index] - 1 + itens[index].portfolioImg.length) % itens[index].portfolioImg.length
      return newIndices
    })
  }

  const nextImage = (index) => {
    setCarouselIndices((prevIndices) => {
      const newIndices = [...prevIndices]
      newIndices[index] = (newIndices[index] + 1) % itens[index].portfolioImg.length
      return newIndices
    })
  }

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className='title-name'>
        <h1>Murasaki Produtos</h1>
      </div>
      <div className='main-itens'>
        {itens.map((importPort, index) => (
          <div key={importPort.id} className='card-space'>
            <div className='img-space'>
              <img src={importPort.portfolioImg[carouselIndices[index]]} alt='Imagem do portfólio' />
              <p>{importPort.text}</p>
            </div>
            <p>{importPort.info}</p>
            <button onClick={() => previousImage(index)}>Anterior</button>
            <button onClick={() => nextImage(index)}>Próxima</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio

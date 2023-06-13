import React, { useState } from 'react'

const Merry = () => {
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
      {/* <button onClick={() => previousImage(index)}>Anterior</button>
      <button onClick={() => nextImage(index)}>Próxima</button> */}
    </div>
  )
}

export default Merry

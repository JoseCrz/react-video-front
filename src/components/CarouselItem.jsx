import React from 'react'

import '../assets/sass/components/CarouselItem.scss'

const CarouselItem = () => {
  return (
    <div className="Carousel-item">
      <img className="Carousel-item__img" src="./img/blade-runner-2049.jpg" alt="Blade Runner 2049 poster" />
      <div className="Carousel-item__details">
          <div>
              <img src="./img/play.svg" alt="Play Button" width="30px" />
              <img src="./img/add.svg" alt="Add to list Button" width="30px" />
          </div>
          <p className="Carousel-item__title">Blade Runner 2049</p>
          <p className="Carousel-item__subtitle">2017 | B15 | 163 mins</p>
      </div>
    </div>
  )
}

export default CarouselItem
import React from 'react'

import '../assets/sass/components/CarouselItem.scss'

import playIcon from '../assets/static/play.svg'
import addIcon from '../assets/static/add.svg'
import image from '../assets/static/blade-runner-2049.jpg'

const CarouselItem = () => {
  return (
    <div className="Carousel-item">
      <img className="Carousel-item__img" src={image} alt="Blade Runner 2049 poster" />
      <div className="Carousel-item__details">
          <div>
              <img src={playIcon} alt="Play Button" width="30px" />
              <img src={addIcon} alt="Add to list Button" width="30px" />
          </div>
          <p className="Carousel-item__title">Blade Runner 2049</p>
          <p className="Carousel-item__subtitle">2017 | B15 | 163 mins</p>
      </div>
    </div>
  )
}

export default CarouselItem
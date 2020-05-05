import React from 'react'

import '../assets/sass/components/Carousel.scss'

const Carousel = ({ children }) => {
  return (
    <section id="trending" className="Carousel">
        <h2>Trending</h2>
        <div className="Carousel__container">
          {children}
        </div>
    </section>
  )
}
export default Carousel
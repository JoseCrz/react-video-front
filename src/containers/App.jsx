import React from 'react'

import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/sass/App.scss'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Search />
      <Carousel title="trending">
        <CarouselItem />
      </Carousel>
      <Carousel title="Your favourites">
        <CarouselItem />
      </Carousel>
      <Carousel title="Originals">
        <CarouselItem />
      </Carousel>
      <Footer />
    </React.Fragment>
  )
}

export default App
import React from 'react'

import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/Carousel'

import '../assets/sass/App.scss'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Search />
      <Carousel>
        <h3>Mimi</h3>
      </Carousel>
    </React.Fragment>
  )
}

export default App
import React from 'react'

import Header from '../components/Header'
import Search from '../components/Search'

import '../assets/sass/App.scss'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Search />
    </React.Fragment>
  )
}

export default App
import React from 'react'

import '../assets/sass/components/Search.scss'
const Search = () => {
  return (
    <section className="Search">
        <h2 className="Search__title">What are you going to watch?</h2>
        <input className="Search__input" type="text" placeholder="Search..." />
    </section>
  )
}

export default Search
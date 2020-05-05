import React from 'react'

import '../assets/sass/components/Search.scss'
const Search = () => {
  return (
    <section class="Search">
        <h2 class="Search__title">What are you going to watch?</h2>
        <input class="Search__input" type="text" placeholder="Search..." />
    </section>
  )
}

export default Search
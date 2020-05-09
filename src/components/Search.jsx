import React from 'react'
import { connect } from 'react-redux'

import { filterRequest } from '../actions'

import '../assets/sass/components/Search.scss'
const Search = props => {

  const handleInput = event => {
    props.filterRequest(event.target.value)
  }

  return (
    <section className="Search">
        <h2 className="Search__title">What are you going to watch?</h2>
        <input onChange={handleInput} className="Search__input" type="text" placeholder="Search..." />
    </section>
  )
}

const mapDispatchToProps = {
  filterRequest,
}

export default connect(null, mapDispatchToProps)(Search)
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setFavorite } from '../actions'

import '../assets/sass/components/CarouselItem.scss'
import playIcon from '../assets/static/play.svg'
import addIcon from '../assets/static/add.svg'

const CarouselItem = props => {
  const { title, year, contentRating, duration, cover } = props
  
  const handleSetFavorite = () => {
    props.setFavorite({
      title,
      year,
      contentRating,
      duration,
      cover
    })
  }

  return (
    <div className="Carousel-item">
      <img className="Carousel-item__img" src={cover} alt={title} />
      <div className="Carousel-item__details">
          <div>
              <img src={playIcon} alt="Play Button" width="30px" />
              <img onClick={handleSetFavorite}  src={addIcon} alt="Add to list Button" width="30px" />
          </div>
          <p className="Carousel-item__title">{title}</p>
          <p className="Carousel-item__subtitle">{`${year} | ${contentRating} ${duration} mins`}</p>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string
}

const mapDispatchToProps = {
  setFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)
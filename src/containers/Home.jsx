import React from 'react'
import { connect } from 'react-redux'

import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/sass/App.scss'

const Home = ({ myList, trends, originals }) => {
  
  return (
    <React.Fragment>
      <Search />
      {myList.length > 0 &&
        <Carousel title="myList">
          {myList.map(item => 
            <CarouselItem  key={item.id} {...item}/>
          )}
        </Carousel>
      }

      <Carousel title="trends">
        {trends.map(item => 
          <CarouselItem  key={item.id} {...item}/>
        )}
      </Carousel>

      <Carousel title="originals">
        {originals.map(item => 
          <CarouselItem  key={item.id} {...item}/>
        )}
      </Carousel>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}

export default connect(mapStateToProps, null)(Home)
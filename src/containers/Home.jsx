import React from 'react'

import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import useInitialState from '../hooks/useInitialState'

import '../assets/sass/App.scss'

const Home = () => {
  
  const videos = useInitialState('http://localhost:3001/initialState')

  console.log(videos)
  return (
    <React.Fragment>
      <Header />
      <Search />
      {videos.mylist.length > 0 &&
        <Carousel title="mylist">
          {videos.mylist.map(item => 
            <CarouselItem  key={item.id} {...item}/>
          )}
        </Carousel>
      }

      <Carousel title="trends">
        {videos.trends.map(item => 
          <CarouselItem  key={item.id} {...item}/>
        )}
      </Carousel>

      <Carousel title="originals">
        {videos.originals.map(item => 
          <CarouselItem  key={item.id} {...item}/>
        )}
      </Carousel>

      <Footer />
    </React.Fragment>
  )
}

export default Home
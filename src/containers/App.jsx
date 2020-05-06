import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/sass/App.scss'

const App = () => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  })

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
    .then(response => response.json())
    .then(data => {
      setVideos(data)
    })
  }, [])

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

export default App
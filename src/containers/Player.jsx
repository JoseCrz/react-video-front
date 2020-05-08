import React from 'react'

import '../assets/sass/components/Player.scss'

const Player = () => {
  return (
    <div className="Player">
      <video className="Player__video" controls autoPlay muted>
        <source  src="" type="video/mp4"/>
      </video>
      <div className="Player__button-container">
        <button className="Player__button" type="button">Back</button>
      </div>
    </div>
  )
}

export default Player
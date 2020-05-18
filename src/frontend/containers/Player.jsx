import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NotFound from './NotFound'
import { Redirect } from 'react-router-dom'

import { getVideoSource } from '../actions'

import '../assets/sass/components/Player.scss'

const Player = props => {
  const { id } = props.match.params
  const hasPlaying = Object.keys(props.playing).length > 0

  useEffect(() => {
    props.getVideoSource(id)
  }, [])

  return hasPlaying
    ? (
      <div className="Player">
        <video className="Player__video" controls autoPlay muted>
          <source  src={props.playing.source} type="video/mp4"/>
        </video>
        <div className="Player__button-container">
          <button onClick={() => props.history.goBack()} className="Player__button" type="button">Back</button>
        </div>
      </div>
    )
    : <NotFound />
    // : <Redirect to="/404/" />
}

const mapStateToProps = state => {
  return {
    playing: state.playing
  }
}

const mapDispatchToProps = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
import React, { useEffect } from 'react'
import { combineArtists, getDuration } from '../utils'
import '../Styles/Track.css'

function Track({track}) {



  return (
    <div className='track-panel'>
        <h2>{track?.name}</h2>
        <img className='track-img' src={track?.album.images[2].url} alt="" loading='lazy'/>
        <p>{ combineArtists(track?.artists) }</p>
        <p>{ getDuration(track?.duration_ms) }</p>
    </div>
  )
}

export default Track
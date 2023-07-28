import React, { useEffect } from 'react'
import { combineArtists, getDuration } from '../utils'
import '../Styles/Track.css'

function Track({track}) {



  return (
    <div className='track-panel'>
        <a href={track?.external_urls.spotify} target='_blank'>{track?.name}</a>
        <a href={track?.external_urls.spotify} target="_blank" rel="noopener noreferrer"><img className='track-img' src={track?.album.images[2].url} alt="" loading='lazy'/></a>
        <p>{ combineArtists(track?.artists) }</p>
        <p>{ track?.album.name }</p>
        <p>{ getDuration(track?.duration_ms) }</p>
    </div>
  )
}

export default Track
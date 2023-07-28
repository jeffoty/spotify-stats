import React, { useEffect } from 'react'
import '../Styles/Track.css'

function Track({track}) {



  return (
    <div className='track-panel'>
        <h2>{track?.name}</h2>
        <p>{track?.artists[0].name}</p>
        <img className='track-img' src={track?.album.images[0].url} alt="" loading='lazy'/>
    </div>
  )
}

export default Track
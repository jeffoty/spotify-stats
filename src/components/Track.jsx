import React from 'react'
import '../Styles/Track.css'

function Track({trackID}) {

  const trackLink = `https://open.spotify.com/embed/track/${trackID}?utm_source=generator`

  return (
    <div className='track-panel'><iframe className='panel' style={{backgroundColor: "white"}} src={trackLink} width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
  )
}

export default Track
import React from 'react'

function Track({trackID}) {

  const trackLink = `https://open.spotify.com/embed/track/${trackID}?utm_source=generator`

  return (
    <div><iframe style={{borderRadius: "12px"}} src={trackLink} width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
  )
}

export default Track
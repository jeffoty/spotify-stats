import React from 'react'
import '../Styles/Artist.css'

function Artist({artist}) {
  return (
    <div className='artist'>
      <a href={artist.external_urls.spotify} target='_blank'><img className='artist-img' src={artist.images[0].url} alt="artist profile" /></a>
      <a href={artist.external_urls.spotify} target='_blank'>{ artist.name }</a>
    </div>
  )
}

export default Artist
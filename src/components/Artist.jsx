import React from 'react'
import '../Styles/Artist.css'

function Artist({artist}) {
  return (
    <div className='artist'>
      <img src={artist.images[0].url} alt="artist profile" />
      <h3>{ artist.name }</h3>
    </div>
  )
}

export default Artist
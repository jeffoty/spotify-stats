import React from 'react'

function Artist({artist}) {
  return (
    <div>
      <img src={artist.images[0].url} alt="artist profile" />
      <h3>{artist.name}</h3>
    </div>
  )
}

export default Artist
import React, { useEffect, useState } from 'react'
import { getTopArtists } from '../services'
import Artist from '../components/Artist'

function TopArtists() {
  const [topArtists, setTopArtists] = useState(null)

  useEffect(() => {
    getTopArtists().then(resp => {
      setTopArtists(resp.data.items)
    })
  }, [])

  return (
    <div className='top-tracks'>
      {
        topArtists && topArtists.map(artist => <Artist artist={artist}/>)
      }
    </div>
  )
}

export default TopArtists
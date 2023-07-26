import React, { useEffect, useState } from 'react'
import { getTopArtists } from '../services'
import Artist from '../components/Artist'
import "../Styles/TopArtists.css"

function TopArtists() {
  const [topArtists, setTopArtists] = useState(null)

  useEffect(() => {
    getTopArtists().then(resp => {
      setTopArtists(resp.data.items)
    })
  }, [])

  return (
    <div className='top-artists'>
      {
        topArtists && topArtists.map(artist => <Artist artist={artist}/>)
      }
    </div>
  )
}

export default TopArtists
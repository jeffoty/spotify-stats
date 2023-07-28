import React, { useEffect, useState } from 'react'
import { getTopArtistsLongTerm, getTopArtistsMediumTerm, getTopArtistsShortTerm } from '../services'
import Artist from '../components/Artist'
import "../Styles/TopArtists.css"

function TopArtists() {
  const [topArtists, setTopArtists] = useState(null)

  useEffect(() => {
    getTopArtistsShortTerm().then(resp => {
      setTopArtists(resp.data.items)
    })
  }, [])

  const getShortTerm = () => {
    getTopArtistsShortTerm().then(resp => {
      setTopArtists(resp.data.items)
    })
  }

  const getMediumTerm = () => {
    getTopArtistsMediumTerm().then(resp => {
      setTopArtists(resp.data.items)
    })
  }

  const getLongTerm = () => {
    getTopArtistsLongTerm().then(resp => {
      setTopArtists(resp.data.items)
    })
  }

  return (
    <div className="artists-page">
      <div className="buttons-section">
        <button onClick={e => getShortTerm()}>Short Term</button>
        <button onClick={e => getMediumTerm()}>Medium Term</button>
        <button onClick={e => getLongTerm()}>Long Term</button></div>
    <div className='top-artists'>
      {
        topArtists && topArtists.map(artist => <Artist artist={artist} key={artist.id}/>)
      }
    </div>
      </div>
  )
}

export default TopArtists
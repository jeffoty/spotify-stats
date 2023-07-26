import React, { useEffect, useState } from 'react'
import Track from '../components/Track'
import { getTopTracks } from '../services'
import '../Styles/TopTracks.css'

function TracksPage() {
  const [topTracks, setTopTracks] = useState(null)

  useEffect(() => {
    getTopTracks().then(resp =>{
      console.log(resp.data.items);
      setTopTracks(resp.data.items)
    })
  }, [])

  return (
    <div className="top-tracks">
          {topTracks && topTracks.map((track) => (
            <Track track={track} loading="lazy"/>
          ))}
    </div>
  )
}

export default TracksPage
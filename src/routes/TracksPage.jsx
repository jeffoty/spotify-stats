import React, { useEffect, useState } from 'react'
import Track from '../components/Track'
import { getTopTracks } from '../services'
import '../Styles/TopTracks.css'

function TracksPage() {
  const [topTracks, setTopTracks] = useState(null)

  useEffect(() => {
    getTopTracks().then(resp =>{
      setTopTracks(resp.data.items)
    })
  }, [])

  return (
    <div className="top-tracks">
          {topTracks && topTracks.map((track) => (
            <Track trackID={track.id} loading="lazy"/>
          ))}
    </div>
  )
}

export default TracksPage
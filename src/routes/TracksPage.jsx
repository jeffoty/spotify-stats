import React, { useEffect, useState } from 'react'
import Track from '../components/Track'
import { getTopTracks } from '../services'

function TracksPage() {
  const [topTracks, setTopTracks] = useState(null)

  useEffect(() => {
    getTopTracks().then(resp =>{
      setTopTracks(resp.data.items)
    })
  }, [])

  return (
    <div className="top-tracks">
      <h2>Top Tracks</h2>
      <div className="track-list">
        <div className="track-row">
          {topTracks && topTracks.map((track) => (
            <Track trackID={track.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TracksPage
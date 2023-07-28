import React, { useEffect, useState } from 'react'
import Track from '../components/Track'
import { getTopTracksLongTerm, getTopTracksMediumTerm, getTopTracksShortTerm } from '../services'
import '../Styles/TopTracks.css'

function TracksPage() {
  const [topTracks, setTopTracks] = useState(null)

  useEffect(() => {
    getTopTracksShortTerm().then(resp =>{
      console.log(resp.data.items);
      setTopTracks(resp.data.items)
    })
  }, [])

  const getMediumTerm = () => {
    getTopTracksMediumTerm().then(resp => {
      console.log("medium term");
      setTopTracks(resp.data.items)
    })
  }

  const getLongTerm = () => {
    getTopTracksLongTerm().then(resp => {
      console.log("long term");
      setTopTracks(resp.data.items)
    })
  }

  return (
    <div className="tracks-page">
      <div className="buttons-section">
        <button onClick={e => getMediumTerm()}>Medium Term</button>
        <button onClick={e => getLongTerm()}>Long Term</button>
      </div>
    <div className="top-tracks">
          {
            topTracks && topTracks.map(track => <Track track={track} key={track.id}/>)
          }
    </div>
          </div>
  )
}

export default TracksPage
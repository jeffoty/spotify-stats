import { useEffect, useState } from 'react'
import { getAccessToken, getFollowing, getPlaylists, getTopTracksShortTerm, getUser } from '../services'
import Track from './Track'

function Profile() {
  const [user, setUser] = useState(null)
  const [following, setFollowing] = useState(null)
  const [playlists, setPlaylists] = useState(null)
  const [topTracks, setTopTracks] = useState(null)

  useEffect(() => {
    getUser().then(resp => setUser(resp.data))
    getFollowing().then(resp => setFollowing(resp.data.artists.total))
    getPlaylists().then(resp => setPlaylists(resp.data.total))
    // getTopTracksShortTerm().then(resp => {
    //   // resp.data.items.map(track => console.log(track.id))
    //   console.log(resp.data.items);
    //   setTopTracks(resp.data.items)
    // })
  }, [])
  

  return (
    <div>
      {
        user ? (
          <div className="profile-info">
            <h1>{user.display_name}</h1>
            {/* <span><img src="" alt="" /></span> */}
            <ul>
              <li>Followers: {user.followers.total}</li>
              <li>Following: {following}</li>
              <li>Playlists: {playlists}</li>
            </ul>
          </div>
        ) : (
          <p>Loading.....</p>
        )
      
      }
    </div>
  )
}

export default Profile
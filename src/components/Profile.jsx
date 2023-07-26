import { useEffect, useState } from 'react'
import { getAccessToken, getFollowing, getPlaylists, getTopTracks, getUser } from '../services'
import Track from './Track'

function Profile() {

  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [following, setFollowing] = useState(null)
  const [playlists, setPlaylists] = useState(null)
  const [topTracks, setTopTracks] = useState(null)

  useEffect(() => {
    setToken(getAccessToken)
    getUser().then(resp => setUser(resp.data))
    getFollowing().then(resp => setFollowing(resp.data.artists.total))
    getPlaylists().then(resp => setPlaylists(resp.data.total))
    getTopTracks().then(resp => {
      // resp.data.items.map(track => console.log(track.id))
      setTopTracks(resp.data.items)
    })
    console.log(topTracks);
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
              {
                topTracks && topTracks.map(track => <Track trackID={track.id}/>)
              }
          </div>
        ) : (
          <p>Loading.....</p>
        )
      
      }
    </div>
  )
}

export default Profile
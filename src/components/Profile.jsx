import { useEffect, useState } from 'react'
import { getAccessToken, getFollowing, getPlaylists, getUser } from '../services'

function Profile() {

  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [following, setFollowing] = useState(null)
  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
    setToken(getAccessToken)
    getUser().then(resp => setUser(resp.data))
    getFollowing().then(resp => setFollowing(resp.data.artists.total))
    getPlaylists().then(resp => console.log(resp.data))
  }, [])
  

  return (
    <div>Profile
      {
        user ? (
          <div className="profile-info">
            <h1>{user.display_name}</h1>
            {/* <span><img src="" alt="" /></span> */}
            <ul>
              <li>Followers: {user.followers.total}</li>
              <li>Following: {following}</li>
              <li>Playlists: {playlists}</li>
              <li></li>
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
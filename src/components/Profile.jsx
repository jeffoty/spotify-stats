import React, { useEffect, useState } from 'react'
import { getAccessToken } from '../services'

function Profile() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(getAccessToken)
  }, [])
  

  return (
    <div>Profile
      <p>{token}</p>
    </div>
  )
}

export default Profile
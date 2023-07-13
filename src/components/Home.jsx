import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const clientId = "e84681ad4b994e17968f708870f765b7";
  const redirectUri = "http://localhost:5173/";

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Check if the access token exists in the URL hash
    const params = new URLSearchParams(window.location.hash.substr(1));
    const accessToken = params.get("access_token");

    if (!accessToken) {
      // If access token doesn't exist, redirect to Spotify authorization page
      redirectToAuthCodeFlow(clientId);
    } else {
      // Access token exists, fetch profile data
      fetchProfile(accessToken)
        .then((profile) => {
          setProfile(profile)
          console.log(profile.images[0] ? "something" : "blank");
        })
        .catch((error) => console.error(error));
    }
  }, []);

  function redirectToAuthCodeFlow(clientId) {
    const scopes = ["user-read-private", "user-read-email"];
    const state = generateRandomString(16);

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scopes.join(" "))}&state=${state}`;

    // Redirect the user to the Spotify authorization page
    window.location.href = authUrl;
  }

  function fetchProfile(token) {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    // Make a GET request to the Spotify Web API to fetch user profile data
    return fetch("https://api.spotify.com/v1/me", { headers }).then((response) => response.json());
  }

  function generateRandomString(length) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  return (
    <div className="home">
      <Navbar/>
      <div>
        <h1>Spotify Profile Data</h1>
        {profile ? (
          <section id="profile">
            <h2>Logged in as {profile.display_name}</h2>
            {profile.images.length > 0 && (
              <span id="avatar">
                <img src={profile.images[0].url} alt="Profile" width={200} height={200} />
              </span>
            )}
            <ul>
              <li>User ID: {profile.id}</li>
              <li>Email: {profile.email}</li>
              <li>
                Spotify URI: <a href={profile.uri}>{profile.uri}</a>
              </li>
              <li>
                Link: <a href={profile.external_urls.spotify}>{profile.external_urls.spotify}</a>
              </li>
              {/* <li>Profile Image: {profile.images[0].url}</li>  */}
            </ul>
          </section>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import "../assets/styles/Login.css"
import spotify from "../assets/images/spotify.svg"


const Login = () => {
  const clientId = "e84681ad4b994e17968f708870f765b7";
  const redirectUri = "http://localhost:5173/";

  useEffect(() => {
    // Check if the access token exists in the URL hash
    const params = new URLSearchParams(window.location.hash.substr(1));
    const accessToken = params.get("access_token");

    if (accessToken) {
      // Access token exists, perform further actions
      localStorage.setItem("Access token", JSON.stringify(accessToken))
      console.log("Access token:", accessToken);
      // Add your logic here for handling the access token
    }
  }, []);

  function redirectToAuthCodeFlow() {
    const scopes = ["user-read-private", "user-read-email"];
    const state = generateRandomString(16);

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scopes.join(" "))}&state=${state}`;

    // Redirect the user to the Spotify authorization page
    window.location.href = authUrl;
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
    <div className="container">
        <img className="logo" src={spotify} alt="logo" />
      <h1>Spotify Stats Login</h1>
      <button className="button" onClick={redirectToAuthCodeFlow}>Log in with Spotify</button>
    </div>
  );
};

export default Login;

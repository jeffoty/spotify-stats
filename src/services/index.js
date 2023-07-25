import axios from "axios";

export const setLocalAccessToken = (token) => {
  localStorage.setItem("Access token", JSON.stringify(token));
};

export const getAccessToken = () => {
  return JSON.parse(localStorage.getItem("Access token"));
};

const headers = {
  Authorization: `Bearer ${getAccessToken()}`,
  "Content-Type": "application/json",
};

export const getUser = () =>
  axios.get("https://api.spotify.com/v1/me", { headers });

export const getFollowing = () =>
  axios.get("https://api.spotify.com/v1/me/following?type=artist", { headers });

export const getPlaylists = () =>
  axios.get("https://api.spotify.com/v1/me/playlists", {
    headers,
  });

export const getTopTracks = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/tracks?limit=30&time_range=short_term",
    { headers }
  );

export const getTopArtists = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/artists?limit=30&time_range=short_term",
    { headers }
  );

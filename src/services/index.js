import axios from "axios";

export const setLocalAccessToken = (token) => {
  window.localStorage.setItem("Access token", JSON.stringify(token));
};

export const getAccessToken = () => {
  return JSON.parse(window.localStorage.getItem("Access token"));
};

const headers = {
  Authorization: `Bearer ${getAccessToken()}`,
  "Content-Type": "application/json",
};

export const getUser = () =>
  axios.get("https://api.spotify.com/v1/me", { headers });

export const getFollowing = () =>
  axios.get("https://api.spotify.com/v1/me/following?type=artist", { headers });

// export const getUserId = () => {
//   getUser().then((resp) => {
//     console.log(resp.data.id);
//   });
// };

const user_id = getUserId();

export const getPlaylists = () =>
  axios.get("https://api.spotify.com/v1/me/playlists", {
    headers,
  });

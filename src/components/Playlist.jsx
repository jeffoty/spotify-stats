import React from "react";
// import { combineplaylists, getDuration } from '../utils'
import "../Styles/Playlist.css";

function Playlist({ playlist }) {
  return (
    <div className="playlist-panel">
      <a href={playlist.external_urls.spotify} target="_blank">
        <img
          className="playlist-img"
          src={playlist.images[0].url}
          alt="playlist profile"
        />
      </a>
      <a href={playlist.external_urls.spotify} target="_blank">
        {playlist.name}
      </a>
    </div>
  );
}

export default Playlist;

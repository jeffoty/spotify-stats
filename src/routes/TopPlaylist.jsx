import { useEffect, useState } from "react";
import { getPlaylists } from "../services";
import Playlist from "../components/Playlist";
import "../Styles/TopPlaylist.css"


function TopPlaylist() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    getPlaylists().then((resp) => {
      console.log(resp.data.items);
      setPlaylists(resp.data.items);
    });
  }, []);

  return (
    <div className="top-Playlists">
      {playlists &&
        playlists.map((playlist) => (
          <Playlist playlist={playlist} key={playlist.id} />
        ))}
    </div>
  );
}

export default TopPlaylist;

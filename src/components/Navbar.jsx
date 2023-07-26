// import React from "react";
import { Link } from "react-router-dom";
import { removeLocalAccessToken, getAccessToken } from "../services";

function Navbar() {
  const isLoggedIn = !!getAccessToken();

  function handleLogout() {
    removeLocalAccessToken();
    window.location.href = "/";
  }

  return (
    <ul className="nav nav-tabs nav-fill">
      <li className="nav-item">
        <Link to={"/"} className="nav-link active" aria-current="page">
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/tracks"} className="nav-link">
          Tracks
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/recent-tracks"} className="nav-link">
          Recent Tracks
        </Link>
      </li>
      {isLoggedIn && (
        <li className="nav-item">
          <button className="logout-button" onClick={handleLogout}>
            Log out
          </button>
        </li>
      )}
    </ul>
  );
}

export default Navbar;

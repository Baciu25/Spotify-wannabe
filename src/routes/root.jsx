import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Login from "./notLoggedIn/login";
export default function Root() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          margin: "auto",
          marginLeft: "50px",
        }}
      >
        {" "}
        <div id="sidebar">
          {/* search/whatever_query_here
        track/79eu4LtcyImPe8fpKegEvl ( when clicking on a song )
        playlist/:playlist_id ( playlist page )
        album/:album_id ( album page )
        artist/:artist_id ( artist page )
        show/:show_id ( podcaster page )
        episode/:ep_id ( podcast episode page ) */}
          {/* debug test NavLinks for all these paths: */}

          {/* <NavLink to="/track/79eu4LtcyImPe8fpKegEvl">Track</NavLink>
        <NavLink to="/playlist/:playlist_id">Playlist</NavLink>
        <NavLink to="/album/:album_id">Album</NavLink>
        <NavLink to="/artist/:artist_id">Artist</NavLink>
        <NavLink to="/show/:show_id">Show</NavLink>
        <NavLink to="/episode/:ep_id">Episode</NavLink> */}

          <h1>
            <NavLink to="/">Home</NavLink>
          </h1>
          <h1>
            <NavLink to="/search/whatever_query_here">Search</NavLink>
          </h1>
          <div>
            <button>Create Playlist</button>
          </div>
        </div>
        {/* this is the dynamic box that renders all the different path-content on the right side */}
        <div
          style={{
            border: "2px solid red",
            width: "80%",
            marginLeft: "50px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

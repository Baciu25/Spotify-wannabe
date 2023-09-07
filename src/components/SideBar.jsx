import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      {" "}
      <div id="sidebar" className="bg-black text-white">
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
    </div>
  );
};

export default SideBar;

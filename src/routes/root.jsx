import { BrowserRouter as Router } from "react-router-dom";

import { useEffect, useState } from "react";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </h1>
        <h1>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Search
          </a>
        </h1>
        <div>
          <button>Create Playlist</button>
        </div>
      </div>
      <div id="detail"></div>
    </>
  );
}

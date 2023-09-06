import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import Playlist from "./routes/playlist";
import Artist from "./routes/artist";
import Show from "./routes/show";
import Episode from "./routes/episode";
import Search from "./routes/search";
import Signup from "./routes/notLoggedIn/signup";
import Login from "./routes/notLoggedIn/login";
import Track from "./routes/track";
// import Index from "./routes/index";
import { useRoutes } from "react-router-dom";
import Album from "./routes/album";
import Genre from "./routes/genre";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // loader={rootLoader}
      // action={rootAction}
      // errorElement={<ErrorPage />}
    >
      <Route
        path="playlist/:playlist_id" // ( playlist page )
        element={<Playlist />}
        // loader={playlistLoader}
        // action={playlistAction}
      />

      <Route
        path="artist/:artist_id" // ( artist page )
        element={<Artist />}
        // // loader={contactLoader}
        // action={editAction}
      />
      <Route
        path="show/:show_id" // ( podcaster page )
        element={<Show />}
        // loader={contactLoader}
        // action={editAction}
      />
      <Route
        path="episode/:ep_id" // ( podcast episode page )
        element={<Episode />}
        // loader={contactLoader}
        // action={editAction}
      />
      <Route
        path="track/:track_id" // ( when clicking on a song )
        element={<Track />}
        // // loader={contactLoader}
        // action={editAction}
      />
      <Route
        path="album/:track_id" // ( when clicking on a song )
        element={<Album />}
        // // loader={contactLoader}
        // action={editAction}
      />
      {/* <Route path="contacts/:contactId/destroy" action={destroyAction} /> */}
      <Route
        path="search/:seach_input" // ( search page )
        element={<Search />}
        // loader={playlistLoader}
        // action={playlistAction}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

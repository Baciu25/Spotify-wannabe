import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { NavLink } from "react-router-dom";
export default function Search() {
  return (
    <>
      <form id="search-form" role="search">
        <input
          id="q"
          aria-label="Search "
          placeholder="What do you want to listen to?"
          type="search"
          name="a-z"
        />
        <div id="search-spinner" aria-hidden hidden={true} />
        <div className="sr-only" aria-live="polite"></div>
      </form>
      <ul id="results">
        <li>Example genre</li>
        <li>Example genre</li>
        <li>Example genre</li>
        <li>Example genre</li>
        <li>Example genre</li>
        <li>Example genre</li>
        <li>Example genre</li>
        <li>Example genre</li>
        <li>Example genre</li>
        <li>Example genre</li>
      </ul>
    </>
  );
}

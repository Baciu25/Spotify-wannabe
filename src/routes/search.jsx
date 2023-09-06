import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import playlist from "./playlist";
import library from "./library";

export default function search() {
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

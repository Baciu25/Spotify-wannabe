import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Player from "../components/player";

import Login from "./notLoggedIn/login";
export default function Root() {
  return (
    <>
      {/* // side bar */}
      {/* top bar  */}
      {/* main menu  */}
      {/* footer  */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          margin: "auto",
          marginLeft: "50px",
        }}
      >
        <SideBar />

        <div
          className="bg-red-500"
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

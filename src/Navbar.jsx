import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        height: "66px",
        width: "100%",
        backgroundColor: "aqua",
        marginBottom: "6px",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: "13px",
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <NavLink to="/home">
          <h2>Home</h2>
        </NavLink>
      </div>
      <div>
        <h2>All Members</h2>
      </div>
      <div>
        <NavLink to="/changeBatch">
          <h2>Change Batch</h2>
        </NavLink>
      </div>
      <div>
        <h2>Profile</h2>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";

import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
    <nav class="navbar navbar-light ">
      <Link to={"/inicio"} class="logo-nav navbar-brand fw-bold ms-3">
      </Link>
      <div class="VectorNav">
        <Link
          to={"/"}
          class="btn-out btn"
          type="submit"
        >
          Sign Up ♦️
        </Link>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Nav;

import React from "react";

import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
    <nav class="navbar navbar-light bg-verde  ">
      <Link to={"/"} class="navbar-brand fw-bold fs-2  mx-4">
        Eira Ips
      </Link>
      <div class="">
        <Link
          to={"/login"}
          class="btn bg-white   p-2  mx-5 my-sm-0 fw-bold"
          type="submit"
        >
          Iniciar Sesion 🟢
        </Link>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Nav;

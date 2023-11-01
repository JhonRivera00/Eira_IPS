import React from "react";

import { Link, Outlet } from "react-router-dom";
import logo from '../assets/Imagenes/VectorNav.png'
function Nav() {
  return (
    <>
      <div className="NavContain">
        <img className="Vector" src={logo} alt="" />
        <Link to="/" className="Inicio">
        <span className="LogOut">Cerrar Sesion</span>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;

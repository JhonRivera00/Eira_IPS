import React, { useState } from "react";
import logo from "../assets/Imagenes/logo2.png";
import Inicio from "../Pages/Inicio";
import { Link, Outlet } from "react-router-dom";
import Nav from "./Nav";

function Sidebar() {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggleClick = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <Nav></Nav>
      <nav className={`sidebar ${isToggle ? "close" : ""}`}>
        <header>
          <div className="img-text">
            <span className="image">
              <img src={logo} alt="logo" />
            </span>
            <div className="text header-text">
              <span className="name">Eira Ips </span>
            </div>
          </div>
          <i
            className={`bx ${isToggle ? "bx-chevron-right" : "bx-chevron-left"} toggle`}
            onClick={handleToggleClick}
          ></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-links search-box">
                <Link to="/dashboard">
                  <i className="bx bx-home icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </Link>
              </li>
              <li className="nav-links">
                <Link to="/revenue">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Revenue</span>
                </Link>
              </li>
              <li className="nav-links">
                <Link to="/analytics">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Analytics</span>
                </Link>
              </li>
              <li className="nav-links">
                <Link to="/notifications">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">Notificaciones</span>
                </Link>
              </li>
              <li className="nav-links">
                <Link to="/configuracion">
                  <i className="bx  bx-help-circle icon"></i>
                  <span className="text nav-text">Configuración</span>
                </Link>
              </li>
              <li className="nav-links">
                <Link to="/perfil">
                  <i className="bx bx-user-pin icon"></i>
                  <span className="text nav-text">Perfil</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li className="">
              <Link to="/">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </Link>
            </li>
          </div>
        </div>
      </nav>
    <section className="home">
        <Inicio className="text"/>
      </section>
      <Outlet/>
    </>
  );
}

export default Sidebar;
import React from "react";
import logo from "../assets/Imagenes/logo2.png";
function Sidebar() {
  return (
    <body className="body_inicio">
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="logo" />
            </span>
            <div className="text header-text">
              <span className="name">Eira Ips</span>
              <span className="profesion">Soluciones Medicas</span>
            </div>
          </div>
        </header>
      </nav>
    </body>
  );
}

export default Sidebar;

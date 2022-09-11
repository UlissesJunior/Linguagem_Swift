import React from "react";
import Apple from "../../assets/img/apple.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="container-nav">
        <Link to="/">
          <img src={Apple} alt="" srcset="" />
        </Link>
        <ul>
          <Link to="/swift">
            <li>Swift</li>
          </Link>
          <Link to="/aulas">
            <li>Aulas</li>
          </Link>
          <Link to="/docs">
            <li>Documentação</li>
          </Link>
          <Link to="/membros">
            <li>Membros</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

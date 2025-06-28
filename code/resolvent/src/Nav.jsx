import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css"; 

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);
  const closeSidebar = () => setOpen(false);

  return (
    <>
      <div className="nav-toggle" onClick={toggleSidebar}>
        &#9776;
      </div>
      {open && <div className="overlay" onClick={closeSidebar}></div>}

      <nav className={`navbar ${open ? "open" : ""}`}>
        <ul onClick={closeSidebar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Usighn">User</Link>
          </li>
          <li>
            <Link to="/Asighn">Admin</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

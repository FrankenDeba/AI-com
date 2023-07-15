import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav_bar">
      <ul>
        <li>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <p>Orders</p>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <p>Cart</p>
          </Link>
        </li>
        <li>
          <Link to="/account">
            <p>Account</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

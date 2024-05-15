import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import mo from "../../img/mo.png";
import { LuSearch } from "react-icons/lu";
function Navbar() {
  return (
    <div>
      <div className="Navbar continer">
        <div className="nav">
          <div className="nav1">
            <Link to={"/"}>
              <p>Home</p>
            </Link>
            <Link to={"/main"}>
              <p>Bot</p>
            </Link>
            <p>Shop All</p>
            <p>Blog</p>
          </div>
          <div className="nav1">
            <img src={mo} alt="" />
          </div>
          <div className="nav2">
            <p>About Us</p>
            <div className="serach_product">
              <input type="text" placeholder="Search Product" />
              <LuSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

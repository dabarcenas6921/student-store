import React, { useEffect } from "react";
import "./SubNavbar.css";
import { useState } from "react";

function SubNavbar({
  searchInput,
  setSearchInput,
  setCategory,
  openState,
  setOpenState,
}) {
  const [active, setActive] = useState("1");

  const handleClick = (event) => {
    setCategory(event.target.name);
    setActive(event.target.id);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setOpenState((s) => !s);
  };

  return (
    <nav className="content">
      <div className="row">
        <div className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchInput}
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
          <i className="material-icons">search</i>
        </div>
        <div className="links">
          <span className="help">
            <i className="material-icons">help</i>Help
          </span>
          <button className="cart" onClick={handleCartClick}>
            <a href="/">
              My Cart<i className="material-icons">shopping_cart</i>
            </a>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="hamburger-menu">
          <i className="material-icons">menu</i>
        </div>
        <ul className="category-menu">
          <li className={active === "1" ? "active" : ""}>
            <button onClick={handleClick} id={"1"} name={""}>
              All Categories
            </button>
          </li>
          <li className={active === "2" ? "active" : ""}>
            <button onClick={handleClick} id={"2"} name={"clothing"}>
              Clothing
            </button>
          </li>
          <li className={active === "3" ? "active" : ""}>
            <button onClick={handleClick} id={"3"} name={"food"}>
              Food
            </button>
          </li>
          <li className={active === "4" ? "active" : ""}>
            <button onClick={handleClick} id={"4"} name={"accessories"}>
              Accessories
            </button>
          </li>
          <li className={active === "5" ? "active" : ""}>
            <button onClick={handleClick} id={"5"} name={"tech"}>
              Tech
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SubNavbar;

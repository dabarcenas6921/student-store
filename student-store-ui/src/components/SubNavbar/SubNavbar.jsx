import React, { useEffect } from "react";
import "./SubNavbar.css";

function SubNavbar({ searchInput, setSearchInput }) {
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
          <div className="cart">
            <a href="/">
              My Cart<i className="material-icons">shopping_cart</i>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="hamburger-menu">
          <i className="material-icons">menu</i>
        </div>
        <ul className="category-menu">
          <li className="is-active">
            <button>All Categories</button>
          </li>
          <li className="">
            <button>Clothing</button>
          </li>
          <li className="">
            <button>Food</button>
          </li>
          <li className="">
            <button>Accessories</button>
          </li>
          <li className="">
            <button>Tech</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SubNavbar;

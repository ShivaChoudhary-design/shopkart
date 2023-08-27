import React, { useState } from "react";
import hamburger from "./images/hamburger menu.png";
import { navbar } from "../constants";
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navigation">
      <ul className="nav-items">
        {navbar.map((nav) => (
          <li
            className={`nav-item ${
              nav.id === "product" ? "products-border" : ""
            }`}
            key={nav.id}
          >
            {nav.name}
            {nav.id === "product" && (
              <ul className="products">
                {nav.child.map((product) => (
                  <li className="product" key={product.id}>
                    {product.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="sm-sc-header">
        <p>ShopKart</p>
        <img src={hamburger} onClick={toggleMenu} />
        {menuOpen && (
          <div className="menu">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>OUR PRODUCTS</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;

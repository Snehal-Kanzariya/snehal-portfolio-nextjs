import React from "react";
import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <section className="main-width px-5">
      <header className="flex justify-between items-center flex-wrap py-10">
        <div className="logo cursor-pointer z-10">
          <h1>Snehal.</h1>
        </div>
        <nav>
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav-list flex items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li className="btn">Contact Me</li>
          </ul>
        </nav>
      </header>
      <Banner />
    </section>
  );
};

export default Header;

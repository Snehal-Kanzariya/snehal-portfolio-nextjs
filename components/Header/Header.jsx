import React from "react";

const Header = () => {
  return (
    <section>
      <header className="flex justify-between items-center flex-wrap py-10 px-5">
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
    </section>
  );
};

export default Header;

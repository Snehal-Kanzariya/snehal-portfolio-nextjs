import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Banner from "../Banner/Banner";

const Header = () => {
  const handleClick = () => {
    const hamburger = document.querySelector(".menu-icon");
    const navlist = document.querySelector(".nav-list");
    hamburger.classList.toggle("click");
    navlist.classList.toggle("open");
  };

  return (
    <section className="main-width px-5">
      <header className="flex justify-between items-center flex-wrap py-10">
        <div className="logo cursor-pointer z-10">
          <h1>Snehal.</h1>
        </div>
        <nav>
          <div className="menu-icon" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav-list lg:flex items-center">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="cursor-pointer"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li className="btn">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={27}
                duration={500}
                className="cursor-pointer"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Banner />
    </section>
  );
};

export default Header;

import React, { useRef, useState,useEffect } from "react";
import { FaBars } from "react-icons/fa";

import logo from "../logo.svg";
import { links, social } from "../data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);
  const toggleIcons = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if(showLinks){
        linksContainerRef.current.style.height = `${linksHeight}px`
    }else{
        linksContainerRef.current.style.height= `0px`
    }

  }, [showLinks])

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" className="logo" />
            <button className="nav-toggle" onClick={toggleIcons}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link, index) => {
                const { id, url, text } = link;
                return (
                  <li key={index}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="social-icons">
              {social.map((icons, index) => {
                const { url, icon } = icons;
                return (
                  <li key={index}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

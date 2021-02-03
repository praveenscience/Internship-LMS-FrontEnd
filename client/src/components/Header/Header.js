import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import "../../styles/Header/Header.scss";
function Header() {
  const [show, setShow] = useState(null);
  const handleClick = () => {
    console.log("clicked");
    if (show === null) setShow("show");
    else setShow(null);
  };
  return (
    <nav className={show}>
      <div className="nav-content">
        <FaApple size={25} color=" white" className="icon" />
        <div className="nav-icon" onClick={handleClick}>
          <div className="bar one"></div>
          <div className="bar two"></div>
        </div>

        <div className="nav-links">
          <a href="#">Mac</a>
          <a href="#">iPad</a>
          <a href="#">iPhone</a>
          <a href="#">Watch</a>
          <a href="#">TV</a>
          <a href="#">Music</a>
          <a href="#">Support</a>
        </div>

        <AiOutlineSearch size={23} color="white" className="search-icon" />
        <IoBagOutline color="white" size={23} className="search-bag" />
      </div>
    </nav>
  );
}

export default Header;

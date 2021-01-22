import React, {useEffect } from 'react'
import {FaApple} from "react-icons/fa";
import {AiOutlineSearch } from "react-icons/ai";
 import { IoBagOutline } from "react-icons/io5";
 import "../../styles/Header/Header.scss"
function Header() {
  useEffect(() => {
    const navIcon = document.querySelector(".nav-icon");
    const nav = document.querySelector("nav");
    navIcon.onclick = function () {
        nav.classList.toggle('show');
    }
  }, [])
    return (
      <nav> 
      <div className="nav-content">
          <FaApple size={25} color=" white" className="icon"/>
          
          <div className="nav-icon">
              <div className="bar one"></div>
              <div className="bar two"></div>
          </div>

          <div className="nav-links">
              <a href="#">Mac</a>
              <a href="#">iPad</a>
              <hr className="hra"></hr>
              <a href="#">iPhone</a>
              <a href="#">Watch</a>
              <a href="#">TV</a>
              <a href="#">Music</a>
              <a href="#">Support</a>
          </div>

          <AiOutlineSearch size={23} color="white" className="search" />
        <IoBagOutline color="white" size={23} className="search1" />
      </div>
  </nav>
    )
}

export default Header

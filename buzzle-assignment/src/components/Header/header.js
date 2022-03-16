import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="search-box">
        <div className="searchcontent">
          <input type="search" placeholder="Search" className="search-bar" />
          <div className="searchlogo">
            <img src="/search.svg" alt="search" width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="button">
        <button className="header-btn1">Login</button>
        <button className="header-btn2">SignUp</button>
      </div>
    </div>
  );
};

export default Header;

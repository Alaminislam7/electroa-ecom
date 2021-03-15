import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderTop = () => {
  return (
    <div className="header">
      <div id="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <ul className="header-links pull-left">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon='phone' /> +8801303525827
                  </a>
                </li>
                <li>
                  <a href="#">
                  <FontAwesomeIcon icon='envelope' /> wdevalamin@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon='map-marker-alt' /> 147/5 khataikhana kushtia
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="header-links pull-right">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon='user'/> My Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="header-logo">
                <a href="#" className="logo">
                  <img src="./img/logo.png" alt="" />
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="input-select">
                    <option value="0">All Categories</option>
                    <option value="1">SHIRT</option>
                    <option value="1">T-SHIRT</option>
                    <option value="1">SHOWS</option>
                    <option value="1">COURT</option>
                  </select>
                  <input className="input" placeholder="Search here" />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import { Button } from "react-bootstrap";

const HeaderTop = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <div id="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ul className="header-links pull-left">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon="phone" /> +8801303525827
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon="envelope" /> wdevalamin@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon="map-marker-alt" /> 147/5 khataikhana
                    kushtia
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              {userInfo && (
                <ul className="header-links pull-right">
                  <li>
                    <Link href="/signup">
                      <a>{userInfo.name}'s Dashboard </a>
                    </Link>
                  </li>
                  <li>
                    <a>
                      <Button
                        onClick={() =>
                          logoutHandler(() => Router.replace(`/signin`))
                        }
                        variant="outline-danger"
                      >
                        Logout
                      </Button>
                    </a>
                  </li>
                  {userInfo && userInfo.isAdmin && (
                    <li>
                      <Link href="/admin-panel">
                        <a>Admin Panel</a>
                      </Link>
                    </li>
                  )}
                </ul>
              )}
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

            <div class="col-md-3 clearfix">
              {userInfo ? (
                <div class="header-ctn">
                  <div>
                    <a href="#">
                      <i class="fa fa-heart-o"></i>
                      <span>Your Wishlist</span>
                      <div class="qty lng">2</div>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <i class="fa fa-heart-o"></i>
                      <span>Your Cart</span>
                      <div class="qty">3</div>
                    </a>
                  </div>
                </div>
              ) : (
                <div class="header-ctn">
                  <div>
                    <Link href="/signup">
                      <Button variant="outline-secondary">SignUp</Button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/signin">
                      <Button variant="outline-secondary">SignIn</Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

import React from "react";
import { StyledLayoutNavbar } from "../Style/LayoutStyle";
import { NavLink } from "react-router-dom";
// import burger from "../Assets/homePage.jpg"

export default function LayoutNavbar() {
  return (
    <>
      {/* <div className="wrapper"> */}
      <StyledLayoutNavbar>
        {/* <div className="photo-data">
            <img src={burger} alt="burger" id="burger" /> */}
        <div className="container">
          <div className="top-menu">
            <div className="app-name">
              <NavLink>
                <h2>Food App</h2>
              </NavLink>
            </div>
            <div className="login-modal">
              <h2>
                <NavLink to="/login">Login</NavLink>
              </h2>
            </div>
          </div>
          <div className="banner-content">
            <h1 className="banner-content-head">Food App</h1>
            <p className="banner-content-para">
              Where every flavour tells a story
            </p>
            <input
              type="search"
              className="search"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
        {/* </div> */}
      </StyledLayoutNavbar>
    </>
  );
}

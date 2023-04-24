import React from "react";
import { StyledLayoutNavbar } from "../Style/LayoutStyle";
import { NavLink } from "react-router-dom";

export default function LayoutNavbar() {
  return (
    <>
      <div className="wrapper">
        <StyledLayoutNavbar>
          <div className="container">
            <div className="top-menu">
              <div className="app-name">
                <NavLink>
                  <h2>Food App</h2>
                </NavLink>
              </div>
              <div className="login-modal">
                <h2>
                  <NavLink to="/login">
                    Login
                  </NavLink>
                </h2>
              </div>
            </div>
          </div>
        </StyledLayoutNavbar>
      </div>
    </>
  );
}

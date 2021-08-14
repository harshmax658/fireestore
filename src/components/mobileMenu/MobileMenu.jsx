import React from "react";
import "./mobileMenu.scss";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const MobileMenu = ({ user, click, setClick }) => {
  return (
    <div
      className="mobile_menu"
      // id={`${click ? "left0" : "left530"}`}
      style={{ left: `${click ? "0px" : "530px"}` }}
      onClick={(e) => setClick(false)}
    >
      <div className="mobile_menu_option">
        <NavLink className="border" to="/" onClick={() => setClick(false)}>
          Home
        </NavLink>
        <hr />
        <NavLink
          exact
          activeClassName="ActiveNavLink"
          className="border"
          to="/shop"
          onClick={() => setClick(false)}
        >
          shop
        </NavLink>
        <hr />
        {user ? (
          <div className="border" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <NavLink
            exact
            activeClassName="ActiveNavLink"
            className="border"
            to="/signin"
            onClick={() => setClick(false)}
          >
            Sign IN
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;

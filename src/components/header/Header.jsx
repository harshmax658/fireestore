import React from "react";
import "./header.scss";
import "./headerStyle.css";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartdrop-down/CartDropDown";
import { Link, NavLink } from "react-router-dom";
import { GiFireBowl } from "react-icons/gi";
import { auth } from "../../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { toogleCardHandle } from "../../redux/cart/action";
import HamBurgerMenu from "../hamBurgerMenu/HamBurgerMenu";
const Header = ({ user, click, setClick }) => {
  const state = useSelector((state) => state.cartReducer);

  const { hidden, totalCartItem } = state;

  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="hamBurger" onClick={() => setClick(!click)}>
        <HamBurgerMenu click={click} />
      </div>

      <div className="logo_container">
        <Link to="/">
          <GiFireBowl />
        </Link>
      </div>
      <div className="menu_option">
        <div className="links">
          <NavLink className="option" to="/">
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName="ActiveNavLink"
            className="option"
            to="/shop"
          >
            shop
          </NavLink>
          {user ? (
            <div className="option" onClick={() => auth.signOut()}>
              Sign Out
            </div>
          ) : (
            <NavLink
              exact
              activeClassName="ActiveNavLink"
              className="option"
              to="/signin"
            >
              Sign IN
            </NavLink>
          )}
        </div>
        <CartIcon
          totalCartItem={totalCartItem}
          onClick={() => dispatch(toogleCardHandle())}
        />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

export default Header;

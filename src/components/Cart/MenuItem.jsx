import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./menuItem.scss";
import "./menuItem.css";

const MenuItem = ({ title, imageUrl, size }) => {
  const location = useLocation();

  const history = useHistory();

  return (
    <>
      <div
        className={`menu_item ${size}`}
        onClick={() => history.push(`${location.pathname}shop/${title}`)}
      >
        <div
          className="backgroundImage"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </>
  );
};

export default MenuItem;

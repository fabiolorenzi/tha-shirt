import React from "react";
import { NavLink } from "react-router-dom";
import "./stylesheets/HorizontalMenu.css";

function HorizontalMenu() {
    return(
        <div className="horizontalMenuContainer" data-testid="horizontalMenuContainer">
            <NavLink to="/" className="horiMenu1" activeClassName="activeHoriMenu">HOME</NavLink>
            <NavLink to="/shop" className="horiMenu1" activeClassName="activeHoriMenu">SHOP</NavLink>
            <NavLink to="/aboutus" className="horiMenu1" activeClassName="activeHoriMenu">ABOUT US</NavLink>
            <NavLink to="/contacts" className="horiMenu1" activeClassName="activeHoriMenu">CONTACTS</NavLink>
            <NavLink to="/managment" className="horiMenu1" activeClassName="activeHoriMenu">MANAGMENT</NavLink>
        </div>
    );
};

export default HorizontalMenu;
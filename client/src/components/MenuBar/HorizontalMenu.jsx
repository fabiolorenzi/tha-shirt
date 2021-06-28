import React from "react";
import { NavLink } from "react-router-dom";
import "./stylesheets/HorizontalMenu.css";

function HorizontalMenu() {
    const pass = localStorage.getItem("pass") ? "" : "reservedHoriMenu";

    return(
        <div className="horizontalMenuContainer" data-testid="horizontalMenuContainer">
            <NavLink to="/" exact className="horiMenu1" activeClassName="activeHoriMenu" data-testid="link1">HOME</NavLink>
            <NavLink to="/shop" className="horiMenu1" activeClassName="activeHoriMenu" data-testid="link2">SHOP</NavLink>
            <NavLink to="/aboutus" className="horiMenu1" activeClassName="activeHoriMenu" data-testid="link3">ABOUT US</NavLink>
            <NavLink to="/contacts" className="horiMenu1" activeClassName="activeHoriMenu" data-testid="link4">CONTACTS</NavLink>
            <NavLink to="/managment" className="horiMenu1" activeClassName="activeHoriMenu" id={pass} data-testid="link5">MANAGMENT</NavLink>
        </div>
    );
};

export default HorizontalMenu;
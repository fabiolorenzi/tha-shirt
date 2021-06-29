import React from "react";
import { NavLink } from "react-router-dom";
import "./stylesheets/HiddenMenu.css";

function HiddenMenu() {
    const pass = localStorage.getItem("pass") ? "" : "reservedHiddenMenu";

    return(
        <div className="hiddenMenuContainer" data-testid="hiddenMenuContainer">
            <NavLink to="/" exact className="hiddenMenu1" activeClassName="activeHiddenMenu" data-testid="link1">HOME</NavLink>
            <NavLink to="/shop" className="hiddenMenu1" activeClassName="activeHiddenMenu" data-testid="link2">SHOP</NavLink>
            <NavLink to="/aboutus" className="hiddenMenu1" activeClassName="activeHiddenMenu" data-testid="link3">ABOUT US</NavLink>
            <NavLink to="/contacts" className="hiddenMenu1" activeClassName="activeHiddenMenu" data-testid="link4">CONTACTS</NavLink>
            <NavLink to="/managment" className="hiddenMenu1" activeClassName="activeHiddenMenu" id={pass} data-testid="link5">MANAGMENT</NavLink>
        </div>
    );
};

export default HiddenMenu;
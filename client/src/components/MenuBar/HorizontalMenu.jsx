import React from "react";
import { NavLink } from "react-router-dom";

function HorizontalMenu() {
    return(
        <div className="horizontalMenuContainer" data-testid="horizontalMenuContainer">
            <NavLink to="/" className="horiMenu1" activeClassMenu="activeHoriMenu">HOME</NavLink>
            <NavLink to="/shop" className="horiMenu1" activeClassMenu="activeHoriMenu">SHOP</NavLink>
            <NavLink to="/aboutus" className="horiMenu1" activeClassMenu="activeHoriMenu">ABOUT US</NavLink>
            <NavLink to="/contacts" className="horiMenu1" activeClassMenu="activeHoriMenu">CONTACTS</NavLink>
            <NavLink to="/managment" className="horiMenu1" activeClassMenu="activeHoriMenu">MANAGMENT</NavLink>
        </div>
    );
};

export default HorizontalMenu;
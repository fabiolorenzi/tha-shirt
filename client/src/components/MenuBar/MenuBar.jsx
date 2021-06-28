import React from "react";
import "./stylesheets/MenuBar.css";
import HorizontalMenu from "./HorizontalMenu.jsx";
import BurgerButton from "./BurgerButton.jsx";

function MenuBar() {
    return(
        <div className="menuBarContainer" data-testid="menuBarContainer">
            <HorizontalMenu />
            <BurgerButton />
        </div>
    );
};

export default MenuBar;
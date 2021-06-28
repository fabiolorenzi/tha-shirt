import React from "react";
import "./stylesheets/MenuBar.css";
import HorizontalMenu from "./HorizontalMenu.jsx";

function MenuBar() {
    return(
        <div className="menuBarContainer" data-testid="menuBarContainer">
            <HorizontalMenu />
        </div>
    );
};

export default MenuBar;
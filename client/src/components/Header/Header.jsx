import React from "react";
import "./stylesheets/Header.css";

import LoginButton from "./LoginButton.jsx";

function Header() {
    return(
        <div className="header" data-testid="headerContainer">
            <LoginButton />
        </div>
    );
};

export default Header;
import React, { useState } from "react";
import "./stylesheets/BurgerButton.css";

function BurgerButton() {
    const [open, setOpen] = useState(false);

    function opener(e) {
        e.preventDefault();
        setOpen(!open);
    };

    return(
        <div className="burgerButton" data-testid="burgerButton" onClick={opener} id={open ? "burgerOpen" : "burgerClosed"}>
            <div className="burgerLine" data-testid="fBurgerLine"></div>
            <div className="burgerLine" data-testid="sBurgerLine"></div>
            <div className="burgerLine" data-testid="tBurgerLine"></div>
        </div>
    );
};

export default BurgerButton;
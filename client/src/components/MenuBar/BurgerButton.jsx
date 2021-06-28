import React, { useState } from "react";
import "./stylesheets/BurgerButton.css";

function BurgerButton() {
    const [open, setopen] = useState(false);

    function opener(e) {
        e.preventDefault();
        setopen(!open);
    };

    return(
        <div className="burgerButton" data-testid="burgerButton" onClick={opener}>
            <div className="burgerLine" data-testid="fBurgerLine"></div>
            <div className="burgerLine" data-testid="sBurgerLine"></div>
            <div className="burgerLine" data-testid="tBurgerLine"></div>
        </div>
    );
};

export default BurgerButton;
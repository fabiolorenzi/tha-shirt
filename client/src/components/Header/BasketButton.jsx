import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import basketIcon from "../../img/basket-icon.png";
import "./stylesheets/BasketButton.css";

function BasketButton() {
    const [itemCounter, setItemCounter] = useState(0);
    const position = localStorage.getItem("basket");

    useEffect(() => {
        if (localStorage.getItem("basket")) {
            setItemCounter(position.length)
        };
    }, [position]);

    return(
        <div className="basketButtonContainer" data-testid="basketButtonContainer">
            <Link to="/checkout">
                <div className="basket_button" data-testid="basket_button">
                    <h3 data-testid="itemCounter">{itemCounter}</h3>
                    <img src={basketIcon} alt="basket icon" />
                </div>
            </Link>
        </div>
    );
};

export default BasketButton;
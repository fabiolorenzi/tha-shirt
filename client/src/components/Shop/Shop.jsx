import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "./stylesheets/Shop.css";

import Logo from "../../img/tha-shirt-logo.png";

function Shop() {
    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openShop" : "closedShop";

    return(
        <div className="shopContainer" id={openBurger} data-testid="shopContainer">
            <Helmet htmlAttributes={{lang: localStorage.getItem("lang") || "en"}}>
                <title>THA SHIRT | SHOP</title>
            </Helmet>
            <div className="shopBody" data-testid="shopBody">
                <h1 data-testid="shopTitle">Shop</h1>
                <div className="shopLogo" data-testid="shopLogo">
                    <img src={Logo} alt="logo of tha shirt" />
                </div>
            </div>
            <div className="searchBar" data-testid="searchBar">
            </div>
            <div className="shopList" data-testid="shopList">
            </div>
        </div>
    );
};

export default Shop;
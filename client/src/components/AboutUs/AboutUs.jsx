import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "./stylesheets/AboutUs.css";

import Logo from "../../img/tha-shirt-logo.png";

function AboutUs() {
    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openAbout" : "closedAbout";

    return(
        <div className="aboutUsContainer" id={openBurger} data-testid="aboutUsContainer">
            <Helmet htmlAttributes={{lang: localStorage.getItem("lang") || "en"}}>
                <title>THA SHIRT | ABOUT US</title>
            </Helmet>
            <div className="aboutUsBody" data-testid="aboutUsBody">
                <h1 data-testid="aboutUsTitle">ERROR</h1>
                <div className="aboutUsLeft" data-testid="aboutUsLeft">
                    <img src={Logo} alt="logo of tha shirt" />
                </div>
                <div className="aboutUsRight" data-testid="aboutUsRight">
                    <h1 data-testid="aboutUsRightTitle">About us</h1>
                    <h3 data-testid="aboutUsRightUndertitle">text</h3>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
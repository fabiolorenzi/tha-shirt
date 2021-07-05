import React from "react";
import { useSelector } from "react-redux";
import { open_close } from "../../redux/actions/open_closeAction.js";
import { Helmet } from "react-helmet";
import "./stylesheets/Error.css";

import Logo from "../../img/tha-shirt-logo.png";

function Error() {
    const burgerButtonState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerButtonState ? "openError" : "";

    return(
        <div className="homeContainer" id={openBurger} data-testid="errorContainer">
            <Helmet htmlAttributes={{lang: localStorage.getItem("lang") || "en"}}>
                <title>THA SHIRT | ERROR</title>
            </Helmet>
            <div className="errorBody" data-testid="errorBody">
                <h1 data-testid="fTitle">ERROR!</h1>
                <div className="errorLeft" data-testid="errorLeft">
                    <img src={Logo} alt="logo of tha shirt" />
                </div>
                <div className="errorRight" data-testid="errorRight">
                    <h1 data-testid="rightTitle">ERROR</h1>
                    <h3 data-testid="rightUndertitle">Page not found. Please return to the <a href="/">Homepage</a></h3>
                </div>
            </div>
        </div>
    );
};

export default Error;
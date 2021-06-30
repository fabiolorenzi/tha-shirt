import React from "react";
import { useSelector } from "react-redux";
import "./stylesheets/Footer.css";

function Footer() {
    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openFooter" : "";

    return(
        <div className="footerContainer" data-testid="footerContainer" id={openBurger}>
            <div>
                <p data-testid="footerText">Developed by F. Lorenzi</p>
                <p id="footerRights" data-testid="footerRights">All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "./stylesheets/Contacts.css";

import Logo from "../../img/tha-shirt-logo.png";

function Contacts() {
    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openContacts" : "closedContacts";

    return(
        <div className="contactsContainer" id={openBurger} data-testid="contactsContainer">
            <Helmet htmlAttributes={{lang: localStorage.getItem("lang") || "en"}}>
                <title>THA SHIRT | CONTACTS</title>
            </Helmet>
            <div className="contactsBody" data-testid="contactsBody">
                <h1 data-testid="contactsTitle">Contacts</h1>
                <div className="contactsLeft" data-testid="contactsLeft">
                    <img src={Logo} alt="logo of tha shirt" />
                </div>
                <div className="contactsRight" data-testid="contactsRight">
                    <h3 data-testid="contactsRightUndertitle">Contacts us on:</h3>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "./stylesheets/Contacts.css";

import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

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
                    <h3 data-testid="contactsRightTitle">Contacts us on:</h3>
                    <div className="contactsLinks" data-testid="contactsLinks">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagramSquare /></a>
                        <a href="mailto:fabiolorenzi13975@gmail.com" target="_blank" rel="noreferrer"><MdEmail /></a>
                        <a href="https://www.linkedin.com/in/fabio-lorenzi-6901421b3/" target="_blank" rel="noreferrer"><ImLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
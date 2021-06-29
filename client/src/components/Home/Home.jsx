import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./stylesheets/Home.css";

import ImageRoller from "./ImageRoller.jsx";

function Home() {
    const burgerButtonState = useSelector(state => state.burgerButtonState);
    const [delThr, setDelThr] = useState();
    const currency = localStorage.getItem("currency") || "£";

    useEffect(() => {
        if (currency === "£") {
            setDelThr(50);
        } else if (currency === "€") {
            setDelThr(58);
        } else {
            setDelThr(70);
        };
    }, [currency]);

    const openBurger = burgerButtonState ? "openHome" : "";

    return(
        <div className="homeContainer" id={openBurger}>
            <h3>Free delivery from {currency}{delThr}!</h3>
            <ImageRoller />
        </div>
    );
};

export default Home;
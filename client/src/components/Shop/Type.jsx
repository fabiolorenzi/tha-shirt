import React from "react";

import "./stylesheets/Type.css";

function Type({type}) {
    return(
        <div className="typeContainer">
            <h2>{type}</h2>
        </div>
    );
};

export default Type;
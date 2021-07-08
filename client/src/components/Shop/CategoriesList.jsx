import React from "react";

import "./stylesheets/CategoriesList.css";

function CategoriesList(props) {
    return(
        <div className="clContainer">
            <h1>{props.match.params.type + "s"}</h1>
        </div>
    );
};

export default CategoriesList;
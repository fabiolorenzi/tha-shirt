import React from "react";
import "./stylesheets/LanguageSelection.css";

function LanguageSelection() {
    const langSel = e => {
        e.preventDefault();
        localStorage.setItem("lang", e.target.value);
    };

    return(
        <div className="languageSelectionContainer">
            <select onChange={langSel} defaultValue={localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"}>
                <option value="eng">English</option>
                <option value="ita">Italiano</option>
            </select>
        </div>
    );
};

export default LanguageSelection;
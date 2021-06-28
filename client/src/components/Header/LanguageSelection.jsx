import React from "react";
import "./stylesheets/LanguageSelection.css";

function LanguageSelection() {
    const langSel = e => {
        e.preventDefault();
        localStorage.setItem("lang", e.target.value);
    };

    return(
        <div className="languageSelectionContainer" data-testid="languageSelectionContainer">
            <select
                onChange={langSel}
                className="languageSelector"
                data-testid="selector"
                defaultValue={localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"}
            >
                <option data-testid="option1" value="eng">English</option>
                <option data-testid="option2" value="ita">Italiano</option>
            </select>
        </div>
    );
};

export default LanguageSelection;
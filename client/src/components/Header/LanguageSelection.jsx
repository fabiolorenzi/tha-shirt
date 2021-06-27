import React, { useEffect, useState } from "react";
import "./stylesheets/LanguageSelection.css";

function LanguageSelection() {
    const [lang, setLang] = useState("eng");

    const langSel = e => {
        e.preventDefault();
        setLang(e.target.value)
    };

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    return(
        <div className="languageSelectionContainer">
            <select onChange={langSel} defaultValue="eng">
                <option value="eng">English</option>
                <option value="ita">Italiano</option>
            </select>
        </div>
    );
};

export default LanguageSelection;
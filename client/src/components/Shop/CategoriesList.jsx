import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./stylesheets/CategoriesList.css";
import Category from "./Category.jsx";

function CategoriesList(props) {
    const [catRendered, setCatRendered] = useState();
    let catType = "";
    const [titleType, setTitleType] = useState("");
    let cats = [];

    function compiler() {
        const html = cats.map(category => {
            return(
                <div>
                    <Link to={`/shop/${props.match.params.type}/${category.toLowerCase()}`}>
                        <Category typeKey={catType} catKey={category} />
                    </Link>
                </div>
            );
        });
        setCatRendered(html);
    };

    useEffect(() => {
        
        axios.get("http://localhost:8082/api/products/")
            .then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].type.toLowerCase() === props.match.params.type && !cats.includes(res.data[i].category)) {
                        cats.push(res.data[i].category);
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        catType = res.data[i].type;
                    }
                }
                compiler();
                setTitleType(catType);
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="clContainer" data-testid="clContainer">
            <Link to="/shop"><button data-testid="buttonReturn">Back</button></Link>
            <h1 data-testid="clTitle">Our categories of {titleType.slice(-1) === "s" ? titleType : titleType + "s"}</h1>
            <div className="slBody" data-testid="slBody">
                {catRendered}
            </div>
        </div>
    );
};

export default CategoriesList;
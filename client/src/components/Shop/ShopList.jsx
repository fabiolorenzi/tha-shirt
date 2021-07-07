import React, { useEffect } from "react";
import axios from "axios";

import "./stylesheets/ShopList.css";

function ShopList() {
    let types = [];

    useEffect(() => {
        axios.get("http://localhost:8082/api/products/")
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if (!types.includes(res.data[i].type)) {
                        types.push(res.data[i].type);
                    }
                }
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="slContainer" data-testid="slContainer">
            <h1 data-testid="slTitle">Clothes types</h1>
            <div className="slBody" data-testid="slBody"></div>
        </div>
    );
};

export default ShopList
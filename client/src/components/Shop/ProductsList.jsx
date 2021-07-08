import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import "./stylesheets/ProductsList.css";

function ProductsList(props) {
    const [prodRendered, setProdRendered] = useState();
    let prodUndCat = "";
    const [titleType, setTitleType] = useState("");
    let products = [];

    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openUCL" : "";

    function compiler() {
        const html = products.map(product => {
            return(
                <div>
                    <Link to={`/shop/${props.match.params.type}/${props.match.params.category}/${props.match.params.underCategory}/${product.id}`}>
                    </Link>
                </div>
            );
        });
        setProdRendered(html);
    };

    useEffect(() => {      
        axios.get("http://localhost:8082/api/products/")
            .then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].type.toLowerCase() === props.match.params.type
                        && res.data[i].category.toLowerCase() === props.match.params.category
                        && res.data[i].underCategory.toLowerCase() === props.match.params.underCategory
                        && !products.includes(res.data[i].underCategory))
                    {
                        products.push(res.data[i]);
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        prodUndCat = res.data[i].underCategory;
                    }
                }
                compiler();
                setTitleType(prodUndCat);
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="uclContainer" data-testid="uclContainer" id={openBurger}>
            <Link to={`/shop/${props.match.params.type}/${props.match.params.category}`}><button data-testid="buttonReturn">Back</button></Link>
            <h1 data-testid="uclTitle">{titleType}</h1>
            <div className="uclBody" data-testid="uclBody">
                {prodRendered}
            </div>
        </div>
    );
};

export default ProductsList;
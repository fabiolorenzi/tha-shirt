import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./stylesheets/SingleProduct.css";

function SingleProduct(props) {
    const history = useHistory();
    const [product, setProduct] = useState({
        name: "",
        type: "",
        category: "",
        underCategory: "",
        colour: "",
        description: "",
        price: "",
        published_date: "",
        update_date: "",
        image: "",
        id: ""
    });
    const [price, setPrice] = useState("");
    const [counter, setCounter] = useState(1);

    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openSingleProduct" : "";

    useEffect(() => {
        axios.get("http://localhost:8082/api/products/" + props.match.params.id)
            .then(res => setProduct({
                name: res.data.name,
                type: res.data.type,
                category: res.data.category,
                underCategory: res.data.underCategory,
                colour: res.data.colour,
                description: res.data.description,
                price: res.data.price,
                published_date: res.data.published_date,
                update_date: res.data.update_date,
                image: res.data.image,
                id: res.data._id
            }))
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (localStorage.getItem("currency" === "£")) {
            setPrice(product.price + "£");
        } else if (localStorage.getItem("currency") === "$") {
            setPrice((parseInt(product.price) * 1.38) + "$");
        } else if (localStorage.getItem("currency") === "€") {
            setPrice((parseInt(product.price) * 1.16) + "€");
        } else {
            setPrice(product.price + "£");
        };
    }, [product]);

    function handleChange(e) {
        e.preventDefault();
        setCounter(e.target.value);
    };

    function insertProduct(e) {
        e.preventDefault();
        let couple = [product.id, counter];
        let basket = JSON.parse(localStorage.getItem("basket")) || [];
        let temp = 0;
        for (let i = 0; i < basket.length; i++) {
            if (basket[i][0] === product.id) {
                basket[i][1] = counter;
                temp++;
                break
            }
        };
        if (temp === 0) {
            basket.push(couple);
        };
        localStorage.setItem("basket", JSON.stringify(basket));
        history.push(`/shop/${props.match.params.type}/${props.match.params.category}/${props.match.params.underCategory}`);
    };

    function reloader(e) {
        insertProduct(e)
        window.location.reload();
    };

    return(
        <div className="singleProdContainer" id={openBurger}>
            <Link to={`/shop/${props.match.params.type}/${props.match.params.category}/${props.match.params.underCategory}`}><button data-testid="buttonReturn">Back</button></Link>
            <div className="singleProdBody">
                <h1>{product.name}</h1>
                <div className="singleProdFirstPart">
                    <div className="singleProdImage">
                        <img src={`data:image/png;base64,` + product.image} alt="product" />
                    </div>
                    <div className="singleProdBuy">
                        <h2>Price: {price}</h2>
                        <label htmlFor="counter">Number</label>
                        <input type="number" name="counter" value={counter} onChange={handleChange} />
                        <button className="insertButton" onClick={reloader}>Add to basket</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
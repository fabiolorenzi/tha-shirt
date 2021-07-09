import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./stylesheets/Basket.css";

function Basket() {
    const history = useHistory();

    const [products, setProducts] = useState([]);
    const [bill, setBill] = useState("");
    const [basketList, setBasketList] = useState([]);

    function compiler() {
        const html = products.map(product => {
            return(
                <div className="basketLine">
                    <img src={"data:image/png;base64," + product[4]} alt="product" />
                    <h3>{product[2]}</h3>
                    <h3>{product[3]} * {product[1]}</h3>
                    <button onClick={e => cancelItem(e, product[0])}>Remove</button>
                </div>
            );
        });
        setBasketList(html);
    };

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("basket")));
        compiler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let tot = 0;
        for (let i = 0; i < products.length; i++) {
            tot += parseInt(products[i][3]);
        };
        setBill(tot);
    }, [products]);
    
    const cancelItem = (e, id) => {
        e.preventDefault();
        let temp = products;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i][0] === id) {
                temp.splice(i, 1);
                setProducts(temp);
            };
        };
        alert("Item removed from basket.");
        localStorage.setItem("basket", JSON.stringify(temp));
        window.location.reload();
    };

    const pay = e => {
        e.preventDefault();
        alert("Thank you for have chosen us!");
        history.push("/");
        localStorage.removeItem("basket");
        window.location.reload();
    };

    return(
        <div className="basketContainer">
            <h1>Checkout</h1>
            <div className="basketList">
                {basketList}
            </div>
            <h1>{bill}</h1>
            <button onClick={pay}>Pay</button>
        </div>
    );
};

export default Basket;
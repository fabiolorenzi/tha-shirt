import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import "./stylesheets/SearchList.css";
import Product from "./Product.jsx";

function SearchList() {
    const searchWord = useSelector(state => state.searchWord);

    const [listItems, setListItems] = useState([]);
    let all = [];

    useEffect(() => {
        axios.get("http://localhost:8082/api/products")
            .then(res => all.push(res.data))
            .catch(err => console.log(err));
        for (let i = 0; i < all.length; i++) {
            if (all[i].name.includes(searchWord)) {
                setListItems(listItems => [...listItems, all[i]]);
            };
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="searchListContainer">
            <h1>You searched: {searchWord}</h1>
        </div>
    );
};

export default SearchList;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import "./stylesheets/SearchList.css";
import Product from "./Product.jsx";

function SearchList() {
    const searchWord = useSelector(state => state.searchWord);

    return(
        <div className="searchListContainer">
            <h1>You searched: {searchWord}</h1>
        </div>
    );
};

export default SearchList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./stylesheets/SearchBar.css";

function SearchBar() {
    const [search, setSearch] = useState("");
    const [prods, setProds] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/api/products/")
            .then(res => setProds(res.data))
            .catch(err => alert("Not possible to search now. Please retry later."));
    }, []);

    function handleChange(e) {
        e.preventDefault();
        setSearch(e.target.value);
    };

    let searchedProd = [];

    function searchItems(e) {
        e.preventDefault();
        searchedProd = [];
        prods.forEach(prod => {
            if (prod.name.toLowerCase().includes(search.toLowerCase())) {
                searchedProd.push(prod);
            }
        });
    };

    const emptySearch = e => {
        e.preventDefault();
        window.location.reload();
    };

    return(
        <div className="SBContainer" data-testid="SBContainer">
            <input
                type="text"
                name="search"
                value={search.value}
                onChange={handleChange}
            />
            <button onClick={searchItems} data-testid="SBSearch">Search</button>
            <button onClick={emptySearch} data-testid="SBCancel">Cancel</button>
        </div>
    );
};

export default SearchBar;
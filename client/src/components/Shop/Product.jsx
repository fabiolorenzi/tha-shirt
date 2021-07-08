import React, { useEffect, useState } from "react";
import axios from "axios";

import "./stylesheets/Product.css";

function Product({typeKey, catKey, undCatKey, id}) {
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
        image: ""
    });

    useEffect(() => {
        axios.get("http://localhost:8082/api/products/" + id)
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
                image: res.data.image
            }))
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="undCatContainer">
            <img src={"data:image/png;base64," + product.image} alt="category" />
            <h2>{product.name}</h2>
        </div>
    );
};

export default Product;
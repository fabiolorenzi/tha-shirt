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
        axios.get("http://localhost:8082/api/products/")
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].type === typeKey && res.data[i].category === catKey && res.data[i].underCategory === undCatKey && res.data[i].id === id) {
                        setProduct({
                            name: res.data[i].name,
                            type: res.data[i].type,
                            category: res.data[i].category,
                            underCategory: res.data[i].underCategory,
                            colour: res.data[i].colour,
                            description: res.data[i].description,
                            price: res.data[i].price,
                            published_date: res.data[i].published_date,
                            update_date: res.data[i].update_date,
                            image: res.data[i].image
                        });
                        break;
                    }
                };
            })
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
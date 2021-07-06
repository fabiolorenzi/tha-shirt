import React, { useState } from "react";
import axios from "axios";
import "./stylesheets/CreateProduct.css";

import ImageDropBox from "./ImageDropBox.jsx";

function CreateProduct() {
    const [prod, setProd] = useState({
        name: "",
        type: "",
        category: "",
        underCategory: "",
        colour: "",
        description: "",
        price: "",
        published_date: new Date(),
        update_date: "",
        image: ""
    });

    const handleChange = e => {
        setProd({...prod, [e.target.name]: e.target.value});
    };

    function createNewProd(e) {
        e.preventDefault();
        const newProd = ({
            name: prod.name,
            type: prod.type,
            category: prod.category,
            underCategory: prod.underCategory,
            colour: prod.colour,
            description: prod.description,
            price: prod.price,
            published_date: prod.published_date,
            update_date: "",
            image: prod.image
        });

        axios.post("http://localhost:8082/api/products/", newProd)
            .then(res => {
                alert("The new product has been created successfully!");
                setProd({
                    name: "",
                    type: "",
                    category: "",
                    underCategory: "",
                    colour: "",
                    description: "",
                    price: "",
                    published_date: new Date(),
                    update_date: "",
                    image: ""
                });
                window.location.reload();
            })
            .catch(err => alert(`${err}. Try again.`));
    };

    return(
        <div className="createProdContainer" data-testid="createProdContainer">
            <h1 data-testid="createProdTitle">Create product</h1>
            <form onSubmit={createNewProd}>
                <div>
                    <label htmlFor="name" data-testid="createProdLabelName">Name</label>
                    <input type="text" name="name" value={prod.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="type" data-testid="createProdLabelType">Type</label>
                    <input type="text" name="type" value={prod.type} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="category" data-testid="createProdLabelCategory">Category</label>
                    <input type="text" name="category" value={prod.category} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="underCategory" data-testid="createProdLabelUnderCategory">UnderCategory</label>
                    <input type="text" name="underCategory" value={prod.underCategory} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="colour" data-testid="createProdLabelColour">Colour</label>
                    <input type="text" name="colour" value={prod.colour} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="descrition" date-testid="createProdLabelDescription">Description</label>
                    <input type="text" name="description" value={prod.description} className="descriptionArea" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price" date-testid="createProdLabelPrice">Price</label>
                    <input type="text" name="price" value={prod.price} onChange={handleChange} />
                </div>
                <div>
                    <ImageDropBox />
                </div>
                <button type="submit" data-testid="createProdButtonSubmit">Create</button>        
            </form>
        </div>
    );
};

export default CreateProduct;
const express = require("express");
const router = express.Router();

const Product = require("../../models/Product.js");

router.get("/", (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(404).json({noproductsfound: "No products found"}))
});

router.get("/:id", (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(404).json({noproductfound: "No product found"}))
});

router.post("/", (req, res) => {
    Product.create(req.body)
        .then(product => res.json({msg: `${product} added successfully`}))
        .catch(err => res.status(400).json({error: `Unable to add ${err}`}))
});

router.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .then(product => res.json({msg: `${product} updated correctly`}))
        .catch(err => res.status(400).json({error: `Unable to update ${err}`}))
});

router.delete("/:id", (req, res) => {
    Product.findByIdAndRemove(req.params.id, req.body)
        .then(product => res.json({msg: `${product} removed successfully`}))
        .catch(err => res.status(404).json({error: `${err} not removed properly`}))
});

module.exports = router;
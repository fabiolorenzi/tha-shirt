const express = require("express");
const router = express.Router();

const User = require("../../models/User.js");

router.get("/", (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({nousersfound: "No users found"}))
});

router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({nouserfound: `${err} not found`}))
});

router.post("/", (req, res) => {
    User.create(req.body)
        .then(user => res.json({msg: `${user} added successfully`}))
        .catch(err => res.status(400).json({error: `Unable to add ${err}`}))
});

router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json({msg: `${user} updated correctly`}))
        .catch(err => res.status(400).json({error: `${err} not updated correctly`}))
});

router.delete("/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
        .then(user => res.json({msg: `${user} removed successfully`}))
        .catch(err => res.status(404).json({error: `Unable to remove ${err}`}))
});

module.exports = router;
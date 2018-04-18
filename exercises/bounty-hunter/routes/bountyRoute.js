const express = require("express");
const bountyRouter = express.Router();

const uuid = require("uuid");
let bounties = require("../bounty.js");

bountyRouter.route("/")
    .get((request, response) => {
        response.status(200).send(bounties);
    })
    .post((request, response) => {
        const newBounty = request.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        response.status(201).send(newBounty);
    })

bountyRouter.route("/:id")
    .get((request, response) => {
        const { id } = request.params;
        const foundBounty = bounties.filter(bounty => bounty._id === id);
        response.status(200).send(foundBounty);
    })
    .delete((request, response) => {
        const { id } = request.params;
        bounties = bounties.filter(bounty => bounty._id !== id);
        response.status(204).send({ message: `${id} was successfully removed` });
    })
    .put((request, response) => {
        const { id } = request.params;
        let editedBounty = request.body;
        bounties = bounties.map(bounty => bounty._id === id ? editedBounty = { ...bounty, ...editedBounty } : bounty);
        response.status(200).send(editedBounty);
    })

module.exports = bountyRouter; 
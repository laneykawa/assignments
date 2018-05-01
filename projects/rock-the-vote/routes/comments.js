const express = require("express");
const commentRouter = express.Router();

const CommentModel = require("../models/comments.js");

commentRouter.route("/")
    .get((req, res) => {
        CommentModel.find(req.query, (err, foundComments) => {
            if (err) return res.send(err);
            res.status(200).send(foundComments);
        });
    })
    .post((req, res) => {
        const newComment = new CommentModel(req.body);
        newComment.save((err, savedComment) => {
            if (err) return res.send(err);
            res.status(201).send(savedComment);
        });
    })

module.exports = commentRouter;
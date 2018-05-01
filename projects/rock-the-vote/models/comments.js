const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
    name: String,
});

module.exports = mongoose.model("comments", commentSchema);

const mongoose = require("mongoose");

const { Schema } = mongoose;

const genreSchema = new Schema({
    name: String,
});

module.exports = mongoose.model("genres", genreSchema);

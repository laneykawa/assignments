const mongoose = require("mongoose");

const { Schema } = mongoose;

const issueSchema = new Schema({
    title: String,
    description: String,
    img: String,  
    totalVotes: Number,
    voteCount: Number,
    commentIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments"
    }]
})

const IssueModel = mongoose.model("issues", issueSchema);

module.exports = IssueModel;
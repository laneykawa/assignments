const mongoose = require("mongoose");

const { Schema } = mongoose;

const issueSchema = new Schema({
    title: String,
    description: String, 
    totalVotes: Number,
    voteCount: Number,
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments"
    }
})

const IssueModel = mongoose.model("Issue", issueSchema);

module.exports = IssueModel;
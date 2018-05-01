const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logger = require("./middleware/logger.js");
const issueRouter = require("./routes/issues.js");
const commentRouter = require("./routes/comments.js");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(logger);

app.use("/issues", issueRouter);
app.use("/comments", commentRouter);

// updated Mongoose says you don't have to put the MDB port number. Then this is the database name. 
mongoose.connect("mongodb://localhost/issues", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port " + port));

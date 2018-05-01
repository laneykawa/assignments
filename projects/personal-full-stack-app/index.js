const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logger = require("./middleware/logger.js");
const artistRouter = require("./routes/artists.js");
const genreRouter = require("./routes/genres.js");
const contactRouter = require("./routes/contacts.js"); 
const eventRouter = require("./routes/events.js"); 

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(logger);

app.use("/artists", artistRouter);
app.use("/genres", genreRouter);
app.use("/contacts", contactRouter); 
app.use("/events", eventRouter); 

// updated Mongoose says you don't have to put the MDB port number. Then this is the database name. 
mongoose.connect("mongodb://localhost/people", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port " + port));
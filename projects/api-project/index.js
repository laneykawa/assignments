require("dotenv").config();
const bodyParser = require("body-parser")
const express = require("express");
const getSuperheros = require("./proxy.js");
const morgan = require("morgan");


const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.get("/api/marvel", (req, res) => {
    getSuperheros(req.query)
        .then(data => res.send(data))
        .catch(err => res.send(err));
})

app.listen(8080, () => console.log("Listening to my server on port 8080"));



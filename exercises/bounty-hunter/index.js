const express = require ("express"); 
const uuid = require ("uuid"); 
const bodyParser = require ("body-parser"); 

const app = express(); 

const bountyRouter = require("./routes/bountyRoute.js");
// let bounties = require ("./bounty.js")

const port = 8080; 

app.use(bodyParser.json()); 
app.use("/bounties", bountyRouter);

app.listen(port, () => console.log("Server running on port " + port));

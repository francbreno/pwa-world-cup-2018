const express = require("express");
const app = express();
const port = 8899;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(port, () => console.log(`server is up and running on port ${port}`));
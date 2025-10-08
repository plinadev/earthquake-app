const express = require("express");
const client = require("./elasticsearch/client");
require("dotenv").config();

const app = express();

const port = process.env.PORT;

const data = require("./data/retrieveAndIngestData");

app.use("/ingest-data", data);

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);

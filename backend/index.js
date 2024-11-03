const express = require("express");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

require("./config/db").dbConnect();

app.get("/", (_, res) => {
  res.send("This is the home page of our backend application.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

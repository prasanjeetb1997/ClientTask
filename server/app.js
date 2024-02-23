const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongodb = require("./config/mongodb")


app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/", require('./routes/client'))




app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
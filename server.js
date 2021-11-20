//dependencys
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

//imports
const Database = require("./configs/database");

//db config
Database();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes


//port
const PORT = process.env.PORT || 5000;

//server listen
app.listen(PORT, () => {
  console.log(`Server is running : ${PORT}`);
});

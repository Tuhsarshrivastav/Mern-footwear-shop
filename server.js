//dependencys
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require("fs");

//imports
const Database = require("./configs/database");

//db config
Database();

//middlewares
app.use(express.json({ limit: "2mb" }));
app.use(cors());
app.use(morgan("dev"));

//routes
readdirSync("./routes").map((r) =>
  app.use("/api", require("./routes/" + r))
);

//port
const PORT = process.env.PORT || 5000;

//server listen
app.listen(PORT, () => {
  console.log(`Server is running : ${PORT}`);
});

const mongoose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect(process.env.db, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

module.exports = Connection;
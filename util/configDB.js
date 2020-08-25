const mongoose = require("mongoose");

// In Dev. environment probably want to change the port depending on the local mongodb server
const mongodburl = process.env.MONGODB_URI || "mongodb://localhost:27017/rimba";

mongoose
  .connect(mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then((db) => console.log("DB has been created succesfully"))
  .catch((err) => console.log(err.reason));

module.exports = mongoose;

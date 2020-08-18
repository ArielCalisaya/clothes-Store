const mongoose = require("mongoose");

const mongodburl = process.env.MONGODB_URI || "mongodb://localhost:26040/rimba";

mongoose
  .connect(mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then((db) => console.log("DB has been created succesfully"))
  .catch((err) => console.log(err.reason));

module.exports = mongoose;

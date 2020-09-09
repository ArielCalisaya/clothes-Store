const clothesRoute = require("./routes/clothesRoute");
const userRoute = require("./routes/userRoute");
const bodyParser = require("body-parser");
const express = require("express");

/* Development Dependences ---------
const morgan = require("morgan");
app.use(morgan("dev")); */

// DB configuration
require("../util/configDB");

//config
const app = express();
const PORT = process.env.PORT || 3330;

app.use(bodyParser.json());
app.use("/api/users/", userRoute);
app.use("/api/clothes/", clothesRoute);

// Config for deploy
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});

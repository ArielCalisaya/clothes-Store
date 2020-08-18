const clothesRoute = require("./src/routes/clothesRoute");
const userRoute = require("./src/routes/userRoute");
const bodyP = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");

/* Development Dependences ---------
const morgan = require("morgan");
app.use(morgan("dev")); */

// DB configuration
require("./util/configDB");

const host = process.env.HOST;

dotenv.config();

//config
const app = express();
const PORT = process.env.PORT || 3330;

app.use(bodyP.json());
app.use(bodyP.urlencoded({ extended: false }));

app.use("/api/users/", userRoute);
app.use("/api/clothes/", clothesRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.listen(PORT, () => {
  console.log(`server running on port http://${host}:${PORT}`);
});

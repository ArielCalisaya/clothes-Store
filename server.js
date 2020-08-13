const clothesRoute = require("./src/routes/clothesRoute");
const userRoute = require("./src/routes/userRoute");
const bodyP = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// DB configuration
require("./util/configDB");

const host = process.env.HOST;

dotenv.config();

//config
const app = express();
const PORT = process.env.PORT || 3330;

app.use(bodyP.json());
app.use(bodyP.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/users/", userRoute);
app.use("/api/clothes/", clothesRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

app.listen(PORT, () => {
  console.log(`server running on port http://${host}:${PORT}`);
});

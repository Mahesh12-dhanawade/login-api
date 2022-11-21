const express = require("express");
const app = express();
require('dotenv').config()
let mongoose = require("mongoose");
let mongourl = process.env.mongoUrl
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const AuthContoller = require("./controller/authContoller");
app.use("/api/auth", AuthContoller);

// app.listen(port,() => {
//     console.log(`listening on port ${port}`)
// })
mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "juneintern",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

//Server
app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});

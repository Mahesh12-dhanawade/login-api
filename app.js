// const express = require("express");
// const app = express();
// let mongoose = require("mongoose");
// const port = process.env.PORT || 5000;
// const cors = require("cors");
// require('dotenv/config');
// app.use(cors());

// const AuthContoller = require("./controller/authContoller");
// app.use("/api/auth", AuthContoller);

// // app.listen(port,() => {
// //     console.log(`listening on port ${port}`)
// // })

// let url = process.env.mongoUrl
// mongoose
//   .connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: "juneintern",
//   })
//   .then(() => {
//     console.log("Database Connection is ready...");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //Server
// app.listen(port, () => {
//   console.log(`server is running http://localhost:${port}`);
// });

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
let port = process.env.port || 5000
app.use(cors());
app.options("*", cors());

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

const AuthContoller = require("./controller/authContoller");
app.use("/api/auth", AuthContoller);

//Database
mongoose
  .connect(process.env.MONGO_URL, {
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
  console.log(`server is running on ${port}`);
});

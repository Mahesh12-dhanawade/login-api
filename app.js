const express = require('express');
const app = express();
let dotenv = require('dotenv')
dotenv.config()
let mongoose = require('mongoose')
let db = process.env.MONGO_URL
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const AuthContoller = require('./controller/authContoller');
app.use('/api/auth',AuthContoller);

// //Database
mongoose
  .connect(db, {
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

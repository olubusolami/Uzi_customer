const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//connect to database
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => console.log("connected to DB!"));

//middleware
app.use(express.json());

//route middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

port = process.env.PORT || 3000;
app.listen(port, () => console.log("up and running well"));

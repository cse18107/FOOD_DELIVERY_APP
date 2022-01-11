const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const foodRouter = require('./routers/food-router');
const userRouter = require('./routers/user-router');

app.use(express.json());

app.use(cors());

const DB =
  "mongodb+srv://cse18107:cse18107@cluster0.itnji.mongodb.net/food-ordering-app?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB connected successfully");
  }).catch = (error) => {
  console.log(error);
};


app.use('/foods',foodRouter);

app.use('/users',userRouter);


app.listen(4000, () => {
  console.log("server is running on port 4000");
});

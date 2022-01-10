const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Food = require("./models/food-schema");

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

app.get("/", async (req, res) => {
  try {
    const food_data = await Food.find();
    res.status(200).json({
      status: "success",
      message: food_data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
});

app.get("/food/:id", async(req, res) => {
  try {
    const food_data = await Food.findById(req.params.id);
    console.log(food_data);
    res.status(200).json({
      status: "success",
      data: {
        food_data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
});

app.post("/", async (req, res) => {
  try {
    const food_details = await Food.create(req.body);
    res.status(201).json({
      status: "success",
      food_data: food_details,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
});


app.patch("/food/:id", async(req, res) => {
    try{
        const updated_data = await Food.findByIdAndUpdate(req.params.id,req.body);
        res.status(201).json({
            status: "success",
            food_data: updated_data,
          });
        } catch (err) {
          console.log(err);
          res.status(400).json({
            status: "failed",
            message: err,
          });
        }
});

app.delete("/food/:id", async(req,res) => {
    try{
        const deleted_data = await Food.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status: "success",
            food_data: deleted_data,
          });
        } catch (err) {
          console.log(err);
          res.status(400).json({
            status: "failed",
            message: err,
          });
        }
});


app.listen(4000, () => {
  console.log("server is running on port 4000");
});

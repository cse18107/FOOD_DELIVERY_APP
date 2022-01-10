const express = require("express");
const Food = require("../models/food-schema");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Its working",
  });
});

app.get("/food/:id", (req, res) => {});

app.post("/", async (req, res) => {
  try {
    const food_details = await Food.create(req.body);
    res.status(201).json({
      status: "success",
      food_data: food_details,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: {err},
    });
  }
});

app.patch("/food/:id", (req, res) => {});

app.delete("/food/:id", (res, req) => {});

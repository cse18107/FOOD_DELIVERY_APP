const Food = require('../models/food-schema');

exports.getAllFood = async (req, res) => {
  try {
    const food_data = await Food.find();
    res.status(200).json({
      status: "success",
      message: food_data,
    });
  } catch (err) {
      console.log(err);
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getFood = async (req, res) => {
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
};

exports.postFoodData = async (req, res) => {
  try {
    console.log(req.body);
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
};

exports.editFoodData = async (req, res) => {
  try {
    const updated_data = await Food.findByIdAndUpdate(req.params.id, req.body);
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
};

exports.deleteFoodData = async (req, res) => {
  try {
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
};

const express = require("express");
const foodControllers = require("../controllers/food-controllers");

const router = express.Router();

router
  .route("/")
  .get(foodControllers.getAllFood)
  .post(foodControllers.postFoodData);
router
  .route("/:id")
  .get(foodControllers.getFood)
  .patch(foodControllers.editFoodData)
  .delete(foodControllers.deleteFoodData);

  module.exports = router;

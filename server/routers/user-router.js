const express = require("express");
const userControllers = require("../controllers/user-controllers");
const router = express.Router();

router
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.postUserData);
router
  .route("/:id")
  .get(userControllers.getUser)
  .patch(userControllers.editUserData)
  .delete(userControllers.deleteUserData);

module.exports = router;

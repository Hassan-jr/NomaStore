const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require("../Controllers/Users");

router.route("/").get(getUsers).post(createUser);

router.route("/:id").delete(deleteUser).put(updateUser);

module.exports = router;

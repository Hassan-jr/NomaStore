const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  loginUser,
  oneuser
} = require("../Controllers/Users");

router.route("/").get(getUsers).post(createUser);
router.route("/login").post(loginUser);


router.route("/:id").delete(deleteUser).put(updateUser).get(oneuser);

module.exports = router;

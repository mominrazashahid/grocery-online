const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  getUserDetail,
  deleteUser,
  updateUser,
} = require("./users.controller");

// ----- GET REQUESTS
router.get("/", getUsers);
router.get("/user-detail/:id", getUserDetail);

// ----- POST REQUESTS
router.post("/create-user", createUser);

// ------ DELETE USER
router.delete("/delete-user/:id", deleteUser);

// ------ UPDATE USER
router.put("/update-user/:id", updateUser);

module.exports = router;

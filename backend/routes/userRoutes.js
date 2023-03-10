const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// only admin can view all users
router.get(
  "/",
  authenticateUser,
  // add admin strategy
  authorizePermissions("user", "admin"),
  getAllUsers
);
router.get("/showMe", authenticateUser, showCurrentUser);
router
  .route("/:id")
  .get(authenticateUser, getSingleUser)
  .patch(authenticateUser, updateUser)
  .delete(authenticateUser, deleteUser);

module.exports = router;

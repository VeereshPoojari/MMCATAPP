
var express = require("express");
var router = express.Router();
const Roles = require("./roles-implemention");
// const {authMiddleware}=require('../app/src/auth/authMiddleware')
/* GET Roles listing. */

router.post("/", Roles.list);
router.get("/all", Roles.listAll);
/**
 * Get a roles details
 */
router.get("/:id", Roles.detail);
// Add new role
router.post(
  "/create",
  Roles.add
);
// Update a role
router.post(
  "/update/:id",
  Roles.update
);
// Delete a user
router.delete(
  "/:id",
  Roles.del
);
module.exports = router;


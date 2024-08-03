
var express = require("express");
var router = express.Router();
const projectIMpl = require("./project_implimentation");
// const {authMiddleware}=require('../app/src/auth/authMiddleware')

router.post("/", projectIMpl.list);
router.post("/:organizationId", projectIMpl.listOrganizationId);
router.get("/all", projectIMpl.listAll);
/**
 * Get a projectIMpl details
 */
router.post(
  "/create",
  projectIMpl.add
);
router.get("/:id", projectIMpl.detail);
// Add new role

// Update a role
router.post(
  "/update/:id",
  projectIMpl.update
);
// Delete a user
router.delete(
  "/:id",
  projectIMpl.del
);
module.exports = router;


const router = require("express").Router();

// Import all of the routes from /api/ here
const userRoutes = require("./userRoutes");
const exampleDataRoutes = require("./exampleDataRoutes");
const searchRoutes = require("./searchRoutes")

// Connect the routes to the router here
router.use("/users", userRoutes);
router.use("/exampleData", exampleDataRoutes);
router.use("/search", searchRoutes);

module.exports = router;

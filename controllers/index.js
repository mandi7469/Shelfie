const router = require("express").Router();

// Import all of the routes from controllers here
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api/");
const collectionRoutes = require("./collectionRoutes");
const bookPageRoutes = require("./bookPageRoutes");

// Connect the routes to the router here
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/collection", collectionRoutes);
router.use("/book", bookPageRoutes);

module.exports = router;

let express = require('express');
let router = express.Router();

// Set up counting routes
let countingRoutes = require("./countingRoutes");
router.get('/counter', countingRoutes.getRoute);

module.exports = router;

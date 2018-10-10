let express = require('express');
let router = express.Router();

// Set up counting routes
let countingRoutes = require("./routes/counting");
router.get('/counter', countingRoutes.getRoute);

module.exports = router;

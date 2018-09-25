let express = require('express');
let router = express.Router();

let getCounting = require("./getCounting");

router.get('/counter', getCounting);

module.exports = router;

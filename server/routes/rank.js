var express = require('express');
const { createRank } = require('../controllers/rankController');
var router = express.Router();

/* POST student Rank. */
router.post('/', createRank);

module.exports = router;

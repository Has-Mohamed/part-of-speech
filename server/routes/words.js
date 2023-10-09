var express = require('express');
const { getWords } = require('../controllers/wordsController');
var router = express.Router();

/* GET word listing. */
router.get('/', getWords);

module.exports = router;

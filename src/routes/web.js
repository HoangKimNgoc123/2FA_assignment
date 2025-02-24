const express = require('express');
const { getHomepage, getLogin, getFinish } = require('../controller/homeController');
const router = express.Router();


router.get('/', getHomepage);
router.get('/Authenty', getLogin);
router.get('/finish', getFinish);

module.exports = router;
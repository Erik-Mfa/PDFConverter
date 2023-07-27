const express = require('express');
const router = express.Router();
const pdf = require('../src/Pdf/generate');

router.get('/', pdf);

module.exports = router;
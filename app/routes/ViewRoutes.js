const express = require('express');

const ViewController = require('../controllers/ViewController');

const router = express.Router();

router.get('/', ViewController.getViewContent);

module.exports = router;
const express = require('express');
const router = express.Router();
const discordController = require('../controllers/discordController');

router.get('/status', discordController.getActivityStatus);

module.exports = router;

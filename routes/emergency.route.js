var express = require('express');
var router = express.Router();
var emergency = require('../controllers/emergency.controller')

// for now this is an open api anyone can initaite the communication
router.post('/call',emergency.call);
router.post('/message',emergency.message);

module.exports = router; 

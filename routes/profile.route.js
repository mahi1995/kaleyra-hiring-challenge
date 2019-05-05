var express = require('express');
var router = express.Router();
var path = require('path')
var user = require('../controllers/profile.controller').user
var authMiddleware = require('../middlewares/auth.middleware').authenticate

/* GET profile page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname,'../views/profile.html'))
});

router.get('/user',authMiddleware, user)
module.exports = router;   
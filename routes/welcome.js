var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('CHÀO MỪNG BẠN ĐẾN VỚI HỆ THỐNG ');
});

module.exports = router;
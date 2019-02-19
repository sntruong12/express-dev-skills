var express = require('express');
var router = express.Router();

/* redirect to /skills */
router.get('/', function(req, res, next) {
  res.redirect('/skills');
});

module.exports = router;

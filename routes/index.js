var express = require('express');
var router = express.Router();
let brands = require('../public/jsondata/brands.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json(brands)
  // res.render('index', { title: 'Express' });
});

module.exports = router;
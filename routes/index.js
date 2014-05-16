var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'win8 style' });
});

router.get('/win8', function(req, res) {
  res.render('win8', { title: 'win8 style' });
});
router.get('/win8-button', function(req, res) {
  res.render('win8-button', { title: 'win8 style' });
});
router.get('/win8-category-list', function(req, res) {
  res.render('win8-category-list', { title: 'win8 style' });
});
router.get('/win8-list', function(req, res) {
  res.render('win8-list', { title: 'win8 style' });
});
router.get('/win8-table', function(req, res) {
  res.render('win8-table', { title: 'win8 style' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Recupera dados de um json */
router.get('/list-all-broadband', function (req, res, next) {
  res.send([
    { "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
    [
      { "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
      { "Name": "Landline", "Price": 35.00, "Type": "ll", "discount": -5.00 }
    ],

    [
      { "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
      { "Name": "AddonBB", "Type": "addon", "additionalValue": 10.00 }
    ],
    [
      { "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
      { "Name": "Landline", "Price": 35.00, "Type": "ll", "discount": -5.00 },
      { "Name": "AddonBB", "Type": "addon", "additionalValue": 10.00 }
    ]
  ]);
});


module.exports = router;

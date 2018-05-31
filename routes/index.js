var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Recupera dados de um json */
router.get('/list-all-broadband', function (req, res, next) {
  res.send(
    // {
    //   "Banda Larga 1":{"id":1, "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
    //   "Banda Larga 2":{"id":1, "Name": "Broadband2", "Price": 60.00, "Type": "bb" }       
    // }

   [ 
     {
      "nome":"Banda larga 1",
      "pacote":[
        {"id":1, "Name": "Broadband1", "Price": 40.00, "Type": "bb" }        
      ],      
      "total":40.00
    },

    {
      "nome":"Banda larga 2",
      "pacote":[
        {"id":2, "Name": "Broadband2", "Price": 60.00, "Type": "bb" }        
      ],
      "total":60.00      
    },

    {
      "nome" : "Banda Larga + TV",
      "pacote":[
        {"id":1, "Name": "Broadband2", "Price": 60.00, "Type": "bb" },
        {"id":3, "Name": "TV1", "Price": 50.00, "Type": "tv" },
        { "Name": "AddonBB", "Type": "addon", "additionalValue": 10.00, "Price":0.00 }  
      ],
      "total":90.00// ainda sem desconto
    }
  ]
    
  
  //   [
  //   { "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
  //   [
  //     { "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
  //     { "Name": "Landline", "Price": 35.00, "Type": "ll", "discount": -5.00 }
  //   ],

  //   [
  //     { "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
  //     { "Name": "AddonBB", "Type": "addon", "additionalValue": 10.00 }
  //   ],
  //   [
  //     { "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
  //     { "Name": "Landline", "Price": 35.00, "Type": "ll", "discount": -5.00 },
  //     { "Name": "AddonBB", "Type": "addon", "additionalValue": 10.00 }
  //   ]
  // ]
);
});


module.exports = router;

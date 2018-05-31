var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Recupera dados de um json */
router.get('/list-all-broadband', function (req, res, next) {
  res.send(  
   [ 
     {
      "descricao":"Internet",
      "pacote":[
        {"id":1, "Name": "Broadband1", "Price": 40.00, "Type": "bb" }        
      ],      
      "total":40.00
    },

    {
      "descricao":"Internet + Banda adicional",
      "pacote":[
        {"id":1, "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
        {"id":6, "Name": "AddonBB", "Price": 0.00, "Type": "addon" }
      ],      
      "total":50.00
    },

    {
      "descricao":"Internet + Fixo",
      "pacote":[
        {"id":1, "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
        {"id":5, "Name": "Landline", "Price": 35.00, "Type": "ll" }
      ],      
      "total":70.00
    },

    {
      "descricao":"Internet + Banda adicional + Fixo",
      "pacote":[
        {"id":1, "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
        {"id":5, "Name": "Landline", "Price": 35.00, "Type": "ll" },
        {"id":6, "Name": "AddonBB", "Price": 0.00, "Type": "addon" }
      ],      
      "total":80.00
    },

    //PLUS -------------------------------------------------------------------------------

    {
      "descricao":"Internet (Fibra)",
      "pacote":[
        {"id":2, "Name": "Broadband2", "Price": 60.00, "Type": "bb" },
        
      ],      
      "total":60.00
    },
    {
      "descricao":"Internet (Fibra) + Banda adicional",
      "pacote":[
        {"id":2, "Name": "Broadband2", "Price": 60.00, "Type": "bb" },
        {"id":6, "Name": "AddonBB", "Price": 0.00, "Type": "addon" }        
      ],      
      "total":60.00
    },
    {
      "descricao":"Internet (Fibra) + TV",
      "pacote":[
        {"id":2, "Name": "Broadband2", "Price": 60.00, "Type": "bb" },
        {"id":3, "Name": "TV1", "Price": 50.00, "Type": "tv" }
      ],      
      "total":0.00//TODO
    },
    {
      "descricao":"Internet (Fibra) + TV + 30 canais",
      "pacote":[
        {"id":2, "Name": "Broadband2", "Price": 60.00, "Type": "bb" },
        {"id":3, "Name": "TV1", "Price": 50.00, "Type": "tv" },
        {"id":7, "Name": "AddonTV", "Price": 0.00, "Type": "addon" }
      ],      
      "total":0.00//TODO
    },
    {
      "descricao":"Internet (Fibra) + TV + 60 canais",
      "pacote":[
        {"id":2, "Name": "Broadband2", "Price": 60.00, "Type": "bb" },
        {"id":3, "Name": "TV1", "Price": 50.00, "Type": "tv" },
        {"id":7, "Name": "AddonTV", "Price": 0.00, "Type": "addon" },
        {"id":8, "Name": "AddonTV-Ex1", "Price": 0.00, "Type": "addon" }
      ],      
      "total":0.00//TODO
    },
    {
      "descricao":"Internet (Fibra) + TV + 90 canais",
      "pacote":[
        {"id":2, "Name": "Broadband2", "Price": 60.00, "Type": "bb" },
        {"id":3, "Name": "TV1", "Price": 50.00, "Type": "tv" },
        {"id":7, "Name": "AddonTV", "Price": 0.00, "Type": "addon" },
        {"id":8, "Name": "AddonTV-Ex1", "Price": 0.00, "Type": "addon" },
        {"id":9, "Name": "AddonTV-Ex2", "Price": 0.00, "Type": "addon" }       
      ],      
      "total":0.00//TODO
    },
    
    


    
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

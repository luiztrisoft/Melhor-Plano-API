var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

function objetos() {
  [







  ]
}

function obj1() {
  return { "id": 1, "name": "Broadband1", "price": 40.00, "type": "bb", "additionalPrice": 0.00 }
}

function obj2() {
  return { "id": 2, "name": "Broadband2", "price": 60.00, "type": "bb", "additionalPrice": 0.00 }
}
function obj3() {
  return { "id": 3, "name": "TV1", "price": 50.00, "type": "tv", "additionalPrice": -10.00 }
}
function obj4() {
  return { "id": 4, "name": "TV2", "price": 120.00, "type": "tv", "additionalPrice": -20.00 }
}
function obj5() {
  return { "id": 5, "name": "Landline", "price": 35.00, "type": "ll", "additionalPrice": -10.00 }
}
function obj6() {
  return { "id": 6, "name": "AddonBB", "price": 0.00, "type": "addon", "additionalPrice": 10.00 }
}
function obj7() {
  return { "id": 7, "name": "AddonTV", "price": 0.00, "type": "addon", "additionalPrice": 35.00 }
}
function obj8() {
  return { "id": 8, "name": "AddonTV-Ex1", "price": 0.00, "type": "addon", "additionalPrice": 10.00 }
}
function obj9() {
  return JSON.stringify({ "id": 9, "name": "AddonTV-Ex2", "price": 0.00, "type": "addon", "additionalPrice": 5.00 })
}

function myFunction(quantidade, ids) {
  //return JSON.parse('{"descricao":"Internet dinamica" , "pacote":[{"id":1, "name":"Broadband X", "price": 22.00, "type":"bb"}], "total":700}');
  var plano = new Object();
  plano.descricao = "Plano ";
  plano.pacote = [obj5(), obj6()];
  plano.total = obj5().price + obj5().additionalPrice;
  return plano;
}

function gerarCombinacoesBB1(totalElements, elementCount) {
    console.log('Total de elementos: ' + totalElements);
    console.log('Elementos por combinação: ' + elementCount);
    var res = [];
    for (i = 0; i < Math.pow(2, totalElements); i++) { 
        var probe = i.toString(2).replace(new RegExp('0', 'g'), '');
        if(probe.length == elementCount)
            res.push(i);
    }    
    console.log(res.length + ' combinações encontradas.');
    console.log('---------------------------------------')
    console.log(res)
    return res;
    
}

// function CombineElements(collection, elementCount) {
//   var combinations = GenerateCombinations(collection.length, elementCount);
//   var res = [];
//   for(i = 0; i < combinations.length; i++) {
//       bitmapIndex = combinations[i].toString(2).split("").reverse().join("");
//       console.log(i + ':' + bitmapIndex);
//       var arItem = '';
//       for(j = 0; j < bitmapIndex.length + 1; j++)
//       {
//           if (bitmapIndex.substring(j,j+1) == '1')
//               arItem += collection[j];
//       }
//       res.push(arItem);
//   }
//   return res;
// }


router.get('/list-all-broadband', function (req, res, next) {
  res.send(
    [
      myFunction(0, 0),myFunction(0, 0)// BASE DE MYFUNCTION ESTÁ TRAZENDO CORRETAMENTE//DUAS CHAMADAS PARA BB1 E BB2
     //gerarCombinacoesBB1(5, 3)
      
     
     
     
      //  {
      //   "descricao":"Internet",
      //   "pacote":[
      //     {"id":1, "Name": "Broadband1", "Price": 40.00, "Type": "bb" }        
      //   ],      
      //   "total":40.00
      // },

      // {
      //   "descricao":"Internet + Banda adicional",
      //   "pacote":[
      //     {"id":1, "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
      //     {"id":6, "Name": "AddonBB", "Price": 0.00, "Type": "addon" }
      //   ],      
      //   "total":50.00
      // },

      // {
      //   "descricao":"Internet + Fixo",
      //   "pacote":[
      //     {"id":1, "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
      //     {"id":5, "Name": "Landline", "Price": 35.00, "Type": "ll" }
      //   ],      
      //   "total":70.00
      // },

      // {
      //   "descricao":"Internet + Banda adicional + Fixo",
      //   "pacote":[
      //     {"id":1, "Name": "Broadband1", "Price": 40.00, "Type": "bb" },
      //     {"id":5, "Name": "Landline", "Price": 35.00, "Type": "ll" },
      //     {"id":6, "Name": "AddonBB", "Price": 0.00, "Type": "addon" }
      //   ],      
      //   "total":80.00
      // },

      //PLUS -------------------------------------------------------------------------------


      // {
      //   "descricao": "Internet",
      //   "pacote": [
      //     { "id": 2, "name": "Broadband2", "Price": 60.00, "Type": "bb", "additionalPrice": 0.00, "discount": 0.00 }
      //   ],
      //   "total": 60.00
      // },
      // {
      //   "descricao": "Internet + adicional",
      //   "pacote": [
      //     { "id": 2, "name": "Broadband2", "Price": 60.00, "Type": "bb", "additionalPrice": 0.00, "discount": 0.00 },
      //     { "id": 6, "name": "AddonBB", "price": 0.00, "type": "addon", "additionalPrice": 10.00 }
      //   ],
      //   "total": 70.00
      // },
      // {
      //   "descricao": "Internet + TV",
      //   "pacote": [
      //     { "id": 2, "name": "Broadband2", "price": 60.00, "type": "bb", "additionalPrice": 0.00 },
      //     { "id": 3, "name": "TV1", "price": 50.00, "type": "tv", "additionalPrice": -10.00 }
      //   ],
      //   "total": 100.00
      // },
      // {
      //   "descricao": "Internet + Fixo",
      //   "pacote": [
      //     { "id": 2, "name": "Broadband2", "price": 60.00, "type": "bb", "additionalPrice": 0.00 },
      //     { "id": 5, "name": "Landline", "price": 35.00, "type": "ll", "additionalPrice": -10.00 }
      //   ],
      //   "total": 75.00
      // },



















      //   {
      //     "descricao": "Internet (Fibra) + TV + 60 canais",
      //     "pacote": [
      //       { "id": 2, "Name": "Broadband2", "Price": 60.00, "Type": "bb", "additionalPrice": 0.00, "discount": 0.00 },
      //       { "id": 3, "Name": "TV1", "Price": 50.00, "Type": "tv", "additionalPrice": 0.00, "discount": 0.00 },
      //       { "id": 7, "Name": "AddonTV", "Price": 0.00, "Type": "addon", "additionalPrice": 0.00, "discount": 0.00 },
      //       { "id": 8, "Name": "AddonTV-Ex1", "Price": 0.00, "Type": "addon", "additionalPrice": 0.00, "discount": 0.00 }
      //     ],
      //     "total": 130.00//TODO
      //   },
      //   {
      //     "descricao": "Internet (Fibra) + TV + 90 canais",
      //     "pacote": [
      //       { "id": 2, "Name": "Broadband2", "Price": 60.00, "Type": "bb" },
      //       { "id": 3, "Name": "TV1", "Price": 50.00, "Type": "tv" },
      //       { "id": 7, "Name": "AddonTV", "Price": 0.00, "Type": "addon" },
      //       { "id": 8, "Name": "AddonTV-Ex1", "Price": 0.00, "Type": "addon" },
      //       { "id": 9, "Name": "AddonTV-Ex2", "Price": 0.00, "Type": "addon" }
      //     ],
      //     "total": 12.00//TODO
      //   },


      // ].sort(function (p1, p2) {
      //   return p1.total - p2.total;
      // })


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
    ])
});


module.exports = router;

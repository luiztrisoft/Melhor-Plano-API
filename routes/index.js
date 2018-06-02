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
      

      // ].sort(function (p1, p2) {
      //   return p1.total - p2.total;
      // })
  
    ])
});


module.exports = router;

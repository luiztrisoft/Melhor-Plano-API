var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list-all-broadband', function (req, res, next) {
  res.send(
    // [
    //myFunction(0, 0),myFunction(0, 0)// BASE DE MYFUNCTION ESTÁ TRAZENDO CORRETAMENTE//DUAS CHAMADAS PARA BB1 E BB2
    //gerarCombinacoesBB1(5, 3)
    montarCombos().sort(function (p1, p2) {
      return p1.total - p2.total;
    })

    // ].sort(function (p1, p2) {
    //   return p1.total - p2.total;
    // })

    // ]

  )
});
var planos = [
  { "id": 1, "name": "Broadband1", "price": 40.00, "type": "bb", "additionalPrice": 0.00 },
  { "id": 2, "name": "Broadband2", "price": 60.00, "type": "bb", "additionalPrice": 0.00 },
  { "id": 3, "name": "TV1", "price": 50.00, "type": "tv", "additionalPrice": -10.00 },
  { "id": 4, "name": "TV2", "price": 120.00, "type": "tv", "additionalPrice": -20.00 },
  { "id": 5, "name": "Landline", "price": 35.00, "type": "ll", "additionalPrice": -10.00 },
  { "id": 6, "name": "AddonBB", "price": 0.00, "type": "addon", "additionalPrice": 10.00 },
  { "id": 7, "name": "AddonTV", "price": 0.00, "type": "addon", "additionalPrice": 35.00 },
  { "id": 8, "name": "AddonTV-Ex1", "price": 0.00, "type": "addon", "additionalPrice": 10.00 },
  { "id": 9, "name": "AddonTV-Ex2", "price": 0.00, "type": "addon", "additionalPrice": 5.00 }
];

function getPlano1() { return planos[0] }
function getPlano2() { return planos[1] }
function getPlano3() { return planos[2] }
function getPlano4() { return planos[3] }
function getPlano5() { return planos[4] }
function getPlano6() { return planos[5] }
function getPlano7() { return planos[6] }
function getPlano8() { return planos[7] }
function getPlano9() { return JSON.stringify(planos[8]) }

function montarCombos() {
  //definindo nós iniciais
  var broadbands = [];
  for (var i = 0; i < planos.length; ++i) {
    if (planos[i].type === 'bb') {
      broadbands.push(planos[i]);
    }
  }
  // for(var i = 0; i < broadbands.length; ++i){
  // }
  return criarCombinacoes(broadbands[0]);
}

function criarCombinacoes(broadbandInicial) {
  var arrayDeCombinacoes = gerarCombinacoesPossiveis(broadbandInicial);
  return arrayDeCombinacoes;
}

function gerarCombinacoesPossiveis(broadbandInicial) {  
  if (broadbandInicial.id === 1) {
    return definirRegrasBB1()    
  } else if (broadbandInicial.id === 2) {
    //console.log(2);
  } else {
    return;
  }
}

function definirRegrasBB1(){
  var possibilidades = [];
  planos[4].additionalPrice = -5;//paliativo
  var i, j, k, x = [planos[0], planos[4], planos[5]];
  possibilidades.push(criarPlanoJSON([planos[0]]));//primeiro plano
  for (i = 0; i < x.length; ++i) {
    if (x[i] === x[0]) {
      for (j = i + 1; j < x.length; ++j) {
        // possibilidades.push([  x[i], x[j] ]);//No push é onde monta o json     
        possibilidades.push(criarPlanoJSON([x[i], x[j]]));
        for (k = j + 1; k < x.length; ++k) {
          // possibilidades.push([ x[i], x[j], x[k]]);
          possibilidades.push(criarPlanoJSON([x[i], x[j], x[k]]));
        }
      }
    }
  }
  return possibilidades;
}

function definirRegrasBB2(){
  
}

function criarPlanoJSON(plano) {
  var p = new Object();
  p.descricao = "Plano ";
  p.pacote = plano;
  var total = 0;
  for (var i = 0; i < plano.length; ++i) {
    total = total + (plano[i].price + plano[i].additionalPrice);
  }
  p.total = total;
  return p;
}


module.exports = router;

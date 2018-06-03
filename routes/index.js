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

// function getPlano1() { return planos[0] }
// function getPlano2() { return planos[1] }
// function getPlano3() { return planos[2] }
// function getPlano4() { return planos[3] }
// function getPlano5() { return planos[4] }
// function getPlano6() { return planos[5] }
// function getPlano7() { return planos[6] }
// function getPlano8() { return planos[7] }
// function getPlano9() { return JSON.stringify(planos[8]) }

var possibilidades = [];

function montarCombos() {
  //definindo nós iniciais
  var broadbands = [];
  for (var i = 0; i < planos.length; ++i) {
    if (planos[i].type === 'bb') {
      broadbands.push(planos[i]);
    }
  }
  possibilidades = [];

  for (var i = 0; i < broadbands.length; ++i) {
    criarCombinacoes(broadbands[i]);
  }
  return possibilidades;
}

// function criarCombinacoes(broadbandInicial) {
//   var arrayDeCombinacoes = gerarCombinacoesPossiveis(broadbandInicial);
//   return arrayDeCombinacoes;
// }

function criarCombinacoes(broadbandInicial) {
  if (broadbandInicial.id === 1) {
    definirRegrasBB1()
  } else if (broadbandInicial.id === 2) {
    definirRegrasBB2()
  } else {
    return;
  }
}

function definirRegrasBB1() {
  planos[4].additionalPrice = -5;
  var i, j, k, x = [planos[0], planos[4], planos[5]];
  possibilidades.push(criarPlanoJSON([planos[0]]));
  
  for (i = 0; i < x.length; ++i) {
    if (x[i] === x[0]) {
      for (j = i + 1; j < x.length; ++j) {
        possibilidades.push(criarPlanoJSON([x[i], x[j]]));
        for (k = j + 1; k < x.length; ++k) {
          possibilidades.push(criarPlanoJSON([x[i], x[j], x[k]]));
        }
      }
    }
  }
}

function definirRegrasBB2() {
  planos[4].additionalPrice = -10;
  var x = [planos[1], planos[2], planos[3], planos[4], planos[5]]//, planos[6], planos[7], planos[8]];
  var tv1 = false;
  var tv2 = false;
  possibilidades.push(criarPlanoJSON([planos[1]]));

  for (i = 0; i < x.length; ++i) {
    if (x[i] === x[0]) {
      for (j = i + 1; j < x.length; ++j) {
        possibilidades.push(criarPlanoJSON([x[i], x[j]]));
        if (x[j].id === 3) {
          tv1 = true;
        }
        for (k = j + 1; k < x.length; ++k) {
          if (tv1 == true && x[k].id === 4) {            
            console.log('err 1')
            tv2 = true;            
            console.log('Se plano 3 ja existe nao inserimos o plano 4 \n Não há necessidade de tratar o inverso')
          } else {
            possibilidades.push(criarPlanoJSON([x[i], x[j], x[k]]));
          }
          for (l = k + 1; l < x.length; ++l) {
            if (tv1 == true && x[k].id === 4) {
              console.log('err 2')
              tv2 = true;
              //TODO tratar a linha fixa que tambem pode ter adicional de -30
              //x[k].additionalPrice = -30
            } else {              
              possibilidades.push(criarPlanoJSON([x[i], x[j], x[k], x[l]]));
            }
          }
        }
      }
    }
  }
}

function criarPlanoJSON(plano) {
  var p = new Object();
  p.descricao = "PLANO ";
  p.pacote = plano;
  var total = 0;
  for (var i = 0; i < plano.length; ++i) {
    total = total + (plano[i].price + plano[i].additionalPrice);
  }
  p.total = total;
  return p;
}

module.exports = router;

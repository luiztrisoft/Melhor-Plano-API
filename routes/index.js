var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list-all-broadband', function (req, res, next) {
  res.send(montarCombos().sort(function (p1, p2) {
    return p1.total - p2.total;
  })
  )
});

var planos = [
  { "id": 1, "name": "Broadband1", "price": 40.00, "type": "bb", "additionalPrice": 0.00 },
  { "id": 2, "name": "Broadband2", "price": 60.00, "type": "bb", "additionalPrice": 0.00 },
  { "id": 3, "name": "TV1", "price": 50.00, "type": "tv", "additionalPrice": -10.00 },
  { "id": 4, "name": "TV2", "price": 120.00, "type": "tv", "additionalPrice": -20.00 },
  { "id": 5, "name": "Landline", "price": 35.00, "type": "ll", "additionalPrice": 0.00 },
  { "id": 6, "name": "AddonBB", "price": 0.00, "type": "addon", "additionalPrice": 10.00 },
  { "id": 7, "name": "AddonTV", "price": 0.00, "type": "addon", "additionalPrice": 35.00 },
  { "id": 8, "name": "AddonTV-Ex1", "price": 0.00, "type": "addon", "additionalPrice": 10.00 },
  { "id": 9, "name": "AddonTV-Ex2", "price": 0.00, "type": "addon", "additionalPrice": 5.00 }
];

var possibilidades = [];

function montarCombos() {
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
  planos[4].additionalPrice = 0;
}

function definirRegrasBB2() {
  var additionalPrice = -10;
  planos[4].additionalPrice = additionalPrice;
  var x = [planos[1], planos[2], planos[3], planos[4], planos[5]];
  var y = [planos[6], planos[7], planos[8]];
  var possuiTV1 = false;
  possibilidades.push(criarPlanoJSON([planos[1]]));

  for (i = 0; i < x.length; ++i) {
    if (x[i] === x[0]) {
      for (j = i + 1; j < x.length; ++j) {
        possibilidades.push(criarPlanoJSON([x[i], x[j]]));
        if (x[j].id === 3) {
          possuiTV1 = true;
        }
        for (k = j + 1; k < x.length; ++k) {
          if (possuiTV1 == true && x[k].id === 4) {
            for (m = 0; m < y.length; ++m) {
              if (y[m].id === 7) {
                var possuiAddonTV1 = true;
                possibilidades.push(criarPlanoJSON([x[i], x[j], y[m]]));
                if (possuiAddonTV1 == true) {
                  for (n = m + 1; n < y.length; ++n) {
                    if (y[n].id === 8) {
                      var possuiAddonTV2 = true;
                      possibilidades.push(criarPlanoJSON([x[i], x[j], y[m], y[n]]))
                      if (possuiAddonTV2 == true) {
                        for (o = n + 1; o < y.length; ++o) {
                          possibilidades.push(criarPlanoJSON([x[i], x[j], y[m], y[n], y[o]]))
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            possibilidades.push(criarPlanoJSON([x[i], x[j], x[k]]));
            if (x[j].id === 3 || x[j].id === 4) {
              for (m = 0; m < y.length; ++m) {
                if (y[m].id === 7) {
                  var possuiAddonTV1 = true;
                  possibilidades.push(criarPlanoJSON([x[i], x[j], x[k], y[m]]));
                  if (possuiAddonTV1 == true) {
                    for (n = m + 1; n < y.length; ++n) {
                      if (y[n].id === 8) {
                        var possuiAddonTV2 = true;
                        possibilidades.push(criarPlanoJSON([x[i], x[j], x[k], y[m], y[n]]))
                        if (possuiAddonTV2 == true) {
                          for (o = n + 1; o < y.length; ++o) {
                            possibilidades.push(criarPlanoJSON([x[i], x[j], x[k], y[m], y[n], y[o]]))
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          for (l = k + 1; l < x.length; ++l) {
            if (x[k].id !== 4) {
              possibilidades.push(criarPlanoJSON([x[i], x[j], x[k], x[l]]));
              if (x[j].id === 3 || x[j].id === 4) {
                for (m = 0; m < y.length; ++m) {
                  if (y[m].id === 7) {
                    var possuiAddonTV1 = true;
                    possibilidades.push(criarPlanoJSON([x[i], x[j], x[k], x[l], y[m]]));
                    if (possuiAddonTV1 == true) {
                      for (n = m + 1; n < y.length; ++n) {
                        if (y[n].id === 8) {
                          var possuiAddonTV2 = true;
                          possibilidades.push(criarPlanoJSON([x[i], x[j], x[l], x[k], y[m], y[n]]))
                          if (possuiAddonTV2 == true) {
                            for (o = n + 1; o < y.length; ++o) {
                              possibilidades.push(criarPlanoJSON([x[i], x[j], x[k], x[l], y[m], y[n], y[o]]))
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  definirRegraParaLandline();
  definirRegrasParaPacotesDeTvAdicionais();
}

function definirRegrasParaPacotesDeTvAdicionais() {
  var total = 0;
  var possuiTV2 = false;

  for (var a = 0; a < possibilidades.length; a++) {
    for (var b = 0; b < possibilidades[a].pacote.length; b++) {
      if (possibilidades[a].pacote[b].id === 4) {
        possuiTV2 = true;
      }
      if (possuiTV2 == true && possibilidades[a].pacote[b].id === 7) {
        possibilidades[a].total = possibilidades[a].total - 20;
      }
    }
  }
}

function definirRegraParaLandline() {
  var total = 0;
  var possuiLandline = false;
  var possuiTV2 = false;

  for (var a = 0; a < possibilidades.length; ++a) {
    for (var b = 0; b < possibilidades[a].pacote.length; b++) {
      if (possibilidades[a].pacote[b].id === 4) {
        possuiTV2 = true;
      }
      if (possibilidades[a].pacote[b].id === 5) {
        possuiLandline = true;
      }
      if (possuiLandline == true && possuiTV2 == true) {
        if (possibilidades[a].pacote[b].id === 5) {
          possibilidades[a].pacote[b].additionalPrice = -30;
          possibilidades[a].total = possibilidades[a].total - 20;
        }
      }
    }
    possuiLandline = false;
    possuiTV2 = false;
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

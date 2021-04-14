// tela do personagem.

function magoDaEducacao() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/mago1.png')";
    setTimeout(function () {
        escolha1 = alert("Clique em ok para avançar.");
        magoFaseincial()
    }, 1200)
}
// Começo do jogo.
function magoFaseincial() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase1.png')";
    setTimeout(function () {
        escolha1 = prompt("Escolha o seu caminho.");
        if (escolha1 == 1) {
            setTimeout(function () {
                magoFase0b()
            }, 1200)
        }
        else if (escolha1 == 2) {
            setTimeout(function () {
                magoFase2()
            }, 1200)
        }

    }, 1200)
}
///
///
///
///
///
// Inicio da Fase 1 
function magoFase0b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase1sul.png')";
    setTimeout(function () {
        escolha1 = prompt("Escolha uma das opções.");
        if (escolha1 == 1) {
            setTimeout(function () {
                magogameover1()
            }, 800)
        }
        else if (escolha1 == 2) {
            setTimeout(function () {
                magofase1b()
            }, 800)
        }

    }, 800)
}
// Caminho vitoria / fase 1
function magofase1b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.png')";
    setTimeout(function () {
        setTimeout(function () {
            escolha1 = alert("Avançar");
            magofase1c()
        }, 800)


    }, 800)
}
function magofase1c() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.0.png')";
    setTimeout(function () {
        setTimeout(function () {
            escolha1 = alert("Você precisa derrotar os Reptilianos para poder desativar a bomba, Clique em Ok 20 vezes para derrotá-los.");
            magofase1d()
        }, 800)


    }, 800)
}
function magofase1d() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.1.png')";
    setTimeout(function () {
        setTimeout(function () {
            combateeducar()
        }, 800)


    }, 800)
}
function combateeducar() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.1.png')";
    setTimeout(function () {
        setTimeout(function () {
            while (educar < 20) {
                alert("Continuar atacando.");
                educar = educar + 1;
                alert(educar);
            }
            alert("Você derrotou os Reptlianos com sucesso.");
            magofase1vitoria()
        }, 800)
    }, 800)
}
function magofase1vitoria() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/vitoriafase4.png')";
    setTimeout(function () {
        setTimeout(function () {
            escolha1 = alert("Parabéns, você conseguiu salvar o mundo!!");
            location.reload();
        }, 800)


    }, 800)
}
// Final vitoria / fase 1

// Caminho gamer over. / fase 1
function magogameover1() {
    document.write('<html><html lang="pt-br"><head><meta charset="UTF-8"><link rel="stylesheet" href="styles.css"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><div id="pagFase2"></div><button id="Start" onclick="escolhaDePersona()"></button><script src="index.js"></script><script src="mago.js"></script><script src="fada.js"></script><script src="lord.js"></script></body></body></html>')  
    setTimeout(function () {
        escolha1 = alert("Você morreu, Aperte f5 para voltar.");
                location.reload();
    }, 800)
}
// Final gamer over. / fase 1
///
///
///
///
///
// Inicio da Fase 2 ////////
function magoFase2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase1norte.png')";
    setTimeout(function () {
        escolha1 = prompt("Escolha uma das opções.");
        if (escolha1 == 1) {
            setTimeout(function () {
                magofase2b()
            }, 800)
        }
        else if (escolha1 == 2) {
            setTimeout(function () {
                magofase2a()
            }, 800)
        }

    }, 800)
}
// Caminho vitoria / fase 2
function magofase2b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.png')";
    setTimeout(function () {
        setTimeout(function () {
            escolha1 = alert("Avançar");
            magofase2c()
        }, 800)


    }, 800)
}
function magofase2c() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.0.png')";
    setTimeout(function () {
        setTimeout(function () {
            escolha1 = alert("Você precisa derrotar os Reptilianos para poder desativar a bomba, Clique em Ok 20 vezes para derrotá-los.");
            magofase2d()
        }, 800)


    }, 800)
}
function magofase2d() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.1.png')";
    setTimeout(function () {
        setTimeout(function () {
            combate()
        }, 800)


    }, 800)
}
function combate() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.1.png')";
    setTimeout(function () {
        setTimeout(function () {
            while (educar < 20) {
                alert("Continuar atacando");
                educar = educar + 1;
                alert(educar);
            }
            alert("Você derrotou os Reptlianos com sucesso.");
            magofase2vitoria()
        }, 800)
    }, 800)
}
function magofase2vitoria() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/vitoriafase4.png')";
    setTimeout(function () {
        setTimeout(function () {
            alert("Você salvou o mundo.");
            location.reload();
        }, 800)
    }, 800)
}
// Final vitoria / fase 2

// Caminho gamer over. / fase 2
function magofase2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase3.0.png')";
    setTimeout(function () {
        setTimeout(function () {
            combate2a()
        }, 800)


    }, 800)
}
function combate2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase3.0.png')";
    setTimeout(function () {
        setTimeout(function () {
            while (educar < 100) {
                alert("Continue batendo até ele morrer.");
                educar = educar + 1;
                alert(educar);
            }
            magogameover2a()
        }, 800)
    }, 800)
}
function magogameover2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/gameover2.png')";
    setTimeout(function () {
        escolha1 = alert("Você morreu, Aperte f5 para voltar.");
        location.reload();
    }, 800)
}
// Final gamer over. / fase 2
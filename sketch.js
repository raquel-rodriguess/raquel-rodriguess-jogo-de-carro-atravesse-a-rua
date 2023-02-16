


function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraCarro();
  mostraAtor();
  movimentaCarro();
  movimentaAtor();
  voltaCarro();
  verificaColisao();
  marcaPonto();
  mostraPontos();

}




let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
//sons
let somColidiu;
let somTrilha;
let somPonto;

function preload(){
  
  imagemEstrada = loadImage("imagens/estrada.png")
  imagemAtor = loadImage("imagens/ator-1.png")
  imagemCarro = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  somColidiu= loadSound("sons/colidiu.mp3")
  somTrilha= loadSound("sons/trilha.mp3")
  somPonto= loadSound("sons/pontos.wav")
 imagemCarros=[imagemCarro, imagemCarro2,imagemCarro3,
              imagemCarro, imagemCarro2,imagemCarro3]
}

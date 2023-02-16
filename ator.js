
//ator
let xAtor=90;
let yAtor=369;
let larguraAtor=25;
let alturaAtor=25;
let colisao=false;
let pontos=0



function mostraAtor(){
  image(imagemAtor,xAtor,yAtor,larguraAtor,alturaAtor)
}
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor-=3
  }
  if(keyIsDown(DOWN_ARROW)){
    
    if(yAtor < 369){
      yAtor+=3
    }
  }
}
function verificaColisao(){
  for(let i=0 ; i < imagemCarros.length ; i++){
    colisao=collideRectCircle(xCarro[i] , yCarro[i], larguraCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      yAtor= 369;
      somColidiu.play();
    if(pontosMaiorQueZero()){
      pontos-=1
    }
    }
  }
    }
function marcaPonto(){
  if(yAtor == 30){
    
    pontos+=1;
    somPonto.play();
    yAtor=369;
  
  }
}
function mostraPontos(){
  stroke(255)
  textAlign(CENTER);
  textSize(25)
  fill(color( 255,0,0))
  text(pontos,width/5, 26)
}
function pontosMaiorQueZero(){
  return pontos > 0
} 
    //else{ pontos < 0}

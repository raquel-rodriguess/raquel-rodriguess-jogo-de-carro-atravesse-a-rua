let yCarro=[40,96,150,210, 260,315]
let xCarro=[600,600,600,600,600,600]
let velocidadeCarro=[ 5 , 4, 3.3, 3, 3.5, 2.3]




let larguraCarro=60;
let alturaCarro=40;







function mostraCarro(){
  for( let i=0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarro[i], yCarro[i], larguraCarro, alturaCarro)
  // soma mais 1 ao array
  }
}
function movimentaCarro(){
  for(i=0; i < xCarro.length; i++){
  xCarro[i]-=velocidadeCarro[i];
  }
  }
  
function voltaCarro(){
  for(i=0;i  < imagemCarros.length; i++){
  if(verificaPassouTela()){
    xCarro[i]=600;
  }
   }
  
  }
function verificaPassouTela(){
  return xCarro[i] < -30;
}


const min = document.getElementById("min");
const max = document.getElementById("max");
const val = document.getElementById("txtNumber");
const btn = document.getElementById("btnGhiceste");
const msg = document.getElementById("mesaj");
let gameOver = false;
let incercari = 3;

let minValue, maxValue, valoareaGenerata;
minValue = 1;
maxValue = 20;
valoareaGenerata = genereazaNumar(minValue, maxValue);

min.textContent = minValue;
max.textContent = maxValue;
msg.textContent = 'Inecrari: ' +incercari;

btn.addEventListener('click', ()=> {
  if(gameOver){
    resetGame();
    return;
  }
    if(val.value=='' || isNaN(val.value)){
        alert('Introdu un numar');
        return;
    };
    let userVal = parseInt(val.value);
    if(userVal!=valoareaGenerata){
      incercari--;
      val.value='';
      if(incercari==0){
        gameOverTrue();
        msg.textContent='Jocul sa sfirsit!';
      }else{
        msg.textContent='Mai ai incearca: ' +incercari;
      } 
    }else{
      gameOverTrue();
      msg.textContent='Felicitari, ai ghicit!'
      }
});


function gameOverTrue(){
  gameOver=true;
  val.disabled=true;
  btn.textContent='Mai incearca odata';
  alert('Ai pierdut, jocul sa sfirsit!');
};

function resetGame(){
  gameOver= false;
  incercari = 3;
  msg.textContent='Mai ai incearca: ' +incercari;
  btn.textContent = 'Ghiceste!'
  val.disabled=false;
  val.value='';
  valoareaGenerata = genereazaNumar(maxValue, maxValue);
}

function  genereazaNumar(minValue, maxValue){
    return Math.ceil(minValue + Math.random()*(maxValue-minValue))
}


console.log(genereazaNumar(1,10));
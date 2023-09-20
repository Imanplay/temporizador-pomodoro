let minutos = 25;
let segundos = 0;

function contador(){
   console.log(minutos, segundos);
     if (segundos === 0 && minutos > 0){
        minutos = minutos -1;
        segundos = 59;
    } else {
        segundos = segundos -1;
    }
document.getElementById('input').innerHTML = minutos + ' : ' + segundos;
}
setInterval(()=>contador(), 1000);


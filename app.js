let minutos = 25;
let segundos = 0;
let intervalo  ;

function contador(){
     if (segundos === 0 && minutos > 0){
        minutos = minutos -1;
        segundos = 59;
    } else {
        segundos = segundos -1;
    }
document.getElementById('input').innerHTML = minutos + ' : ' + segundos;
}
function iniciarContador(){
intervalo = setInterval(()=>contador(), 1000);

}

function pausar(){
    clearInterval(intervalo);
     intervalo= null;
}
iniciarContador()
let minutos = 25;
let segundos = 0;
let intervalo;
let isDescanso = false;
const botonStart = document.getElementById('botonStart');
const botonPausa = document.getElementById('botonStop')
const span = document.getElementById('input')
function contador() {
    if (segundos === 0 && minutos > 0) {
        minutos = minutos - 1;
        segundos = 59;
    } else {
        segundos = segundos - 1;
    }
    if (minutos === 0 && segundos === 0){
        pausar();
        isDescanso = !isDescanso;
        minutos = isDescanso ? 5 : 25;
        segundos = 0;
        iniciarContador();
    }
   
    document.getElementById('input').innerHTML = minutos.toString().padStart(2, '0') + ' : ' + segundos.toString().padStart(2, );
}

function iniciarContador() {
    intervalo = setInterval(() => contador(), 1000);
    botonStart.disabled = true;
    botonPausa.disabled = false;
}

new function descansar (){
    if (minutos && segundos === 0){
        return (isDescanso);
    }
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
    botonPausa.disabled = true;
    botonStart.disabled = false;
    
}
iniciarContador();
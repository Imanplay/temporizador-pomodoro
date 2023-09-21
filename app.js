let minutos = 0;
let segundos = 5;
let intervalo;
let isDescanso = false;

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

    document.getElementById('input').innerHTML = minutos + ' : ' + segundos;
}

function iniciarContador() {
    intervalo = setInterval(() => contador(), 1000);

}

new function descansar (){
    if (minutos && segundos === 0){
        return (isDescanso);
    } 
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}
iniciarContador()
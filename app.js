let minutos = 25;
let segundos = 0;
let intervalo;
let isDescanso = false;
const botonStart = document.getElementById('botonStart');
const botonPausa = document.getElementById('botonStop')
const span = document.getElementById('input')
const botonRestart = document.getElementById('botonRestart');

function contador() {
    if (segundos === 0 && minutos > 0) {
        minutos = minutos - 1;
        segundos = 59;
    } else {
        segundos = segundos - 1;
    }
    if (minutos === 0 && segundos === 0) {
        pausar();
        isDescanso = !isDescanso;
        minutos = isDescanso ? 5 : 25;
        segundos = 0;
        iniciarContador();
    }
    mostrarTimer();
    guardar(true);
}
function mostrarTimer() {
    span.innerHTML = minutos.toString().padStart(2, '0') + ' : ' + segundos.toString().padStart(2, '0');
}

function iniciarContador() {
    intervalo = setInterval(() => contador(), 1000);
    botonStart.disabled = true;
    botonPausa.disabled = false;
    guardar(true);
}

function descansar() {
    document.getElementById('descansando').innerHTML = "Tiempo de descansar";
    botonRestart.disabled = true;
    if (minutos && segundos === 0) {
        return (isDescanso);
    }
   
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
    botonPausa.disabled = true;
    botonStart.disabled = false;
    guardar(false);

}
cargar();

function guardar(active) {
    const estado = {
        minutes: minutos,
        seconds: segundos,
        active

    }
    localStorage.setItem('estado', JSON.stringify(estado));

}
function cargar() {
    const estado = JSON.parse(localStorage.getItem('estado'));
    if (estado === null) {
        minutos = 25;
        segundos = 0;
    } else {
        minutos = estado.minutes
        segundos = estado.seconds
    }
    if (estado.active) {
        iniciarContador();
        botonStart.disabled = true;
    } else {
        botonPausa.disabled = true;
    }
    mostrarTimer();
}

function reiniciar() {
    clearInterval(intervalo);
    minutos = 25;
    segundos = 0;
    botonStart.disabled = false;
    mostrarTimer();
}
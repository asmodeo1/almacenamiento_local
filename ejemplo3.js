const arrayPreguntas = [
    {pregunta: "Capital de España", respuesta1: "Madrid", respuesta2: "Barcelona", respuesta3: "Sevilla", correcta: 1},
    {pregunta: "Capital de Francia", respuesta1: "Lión", respuesta2: "Burdeos", respuesta3: "París", correcta: 3},
    {pregunta: "Capital de Alemania", respuesta1: "Berlin", respuesta2: "Munich", respuesta3: "Dresde", correcta: 1},
    {pregunta: "Capital de Colombia", respuesta1: "Medellín", respuesta2: "Bogotá", respuesta3: "Pereira", correcta: 2},
    {pregunta: "Capital de Venezuela", respuesta1: "Caracas", respuesta2: "Maturín", respuesta3: "Maracay", correcta: 1},
    {pregunta: "Capital de Argentina", respuesta1: "Córdoba", respuesta2: "Buenos Aires", respuesta3: "Mar de plata", correcta: 2},
    {pregunta: "Capital de México", respuesta1: "México D.C.", respuesta2: "Cancún", respuesta3: "Jalisco", correcta: 1},
    {pregunta: "Capital de Italia", respuesta1: "Milán", respuesta2: "Nápoles", respuesta3: "Roma", correcta: 3},
    {pregunta: "Capital de Portugal", respuesta1: "Lisboa", respuesta2: "Oporto", respuesta3: "Valença", correcta: 1},
    {pregunta: "Capital de Brasil", respuesta1: "Brasilia", respuesta2: "Río de Janeiro", respuesta3: "Sao Paulo", correcta: 1}
];

let aciertos = 0;
let fallos = 0;
let preguntaActual = 0;
let tiempo = 0;

function mostrarPregunta() {
    const pregunta = document.getElementById("pregunta");
    const respuesta1 = document.getElementById("textoRespuesta1");
    const respuesta2 = document.getElementById("textoRespuesta2");
    const respuesta3 = document.getElementById("textoRespuesta3");
    pregunta.textContent = arrayPreguntas[preguntaActual].pregunta;
    respuesta1.textContent = arrayPreguntas[preguntaActual].respuesta1;
    respuesta2.textContent = arrayPreguntas[preguntaActual].respuesta2;
    respuesta3.textContent = arrayPreguntas[preguntaActual].respuesta3;
    // Desmarcamos el radio que estuviese marcado
    document.getElementById("respuesta1").checked = false;
    document.getElementById("respuesta2").checked = false;
    document.getElementById("respuesta3").checked = false;
}

function comprobarPregunta() {
    let respuestaElegida;
    if(document.getElementById("respuesta1").checked) {
        respuestaElegida = document.getElementById("respuesta1").dataset.respuesta;
    } else if(document.getElementById("respuesta2").checked) {
        respuestaElegida = document.getElementById("respuesta2").dataset.respuesta;
    } else if(document.getElementById("respuesta3").checked) {
        respuestaElegida = document.getElementById("respuesta3").dataset.respuesta;
    } else {
        alert("Debes marcar una respuesta");
        return;
    }

    /* Otra forma 
    let respuestaElegida = null;
    for (const elemento of document.querySelectorAll("input[type='radio']")) {
        if(elemento.checked) {
            respuestaElegida = elemento.dataset.respuesta;
        }
    }
    if(respuestaElegida == null) {
        alert("Debes marcar una respuesta");
        return;
    }
    */
 
    /*Otra forma 
    let marcado = document.querySelector("input[type='radio']:checked");
    if(marcado == null) {
        alert("Debes marcar una respuesta");
        return;
    }
    let respuestaElegida = marcado.dataset.respuesta;
    */

    if(respuestaElegida == arrayPreguntas[preguntaActual].correcta) {
        aciertos++;
        mostrarAciertoFallo("aciertos", aciertos);
    } else {
        fallos++;
        mostrarAciertoFallo("fallos", fallos);
    }
    preguntaActual++;
    // Comprobamos si hemos terminado
    if(preguntaActual == arrayPreguntas.length) {
        alert(`Juego finalizado\nAciertos: ${aciertos}\nFallos: ${fallos}`);
        document.getElementById("comprobar").disabled = true;
        // Borramos los datos guardados
        localStorage.clear();
    } else {
        guardarEstado();
        mostrarPregunta();
    }
}

function mostrarAciertoFallo(id, valor) {
    const elemento = document.getElementById(id);
    elemento.textContent = valor;
    elemento.style.animation = "";
    elemento.offsetWidth;
    elemento.style.animation = "resaltar 1s";
}

function guardarEstado() {
    localStorage.setItem("preguntaActual", preguntaActual);
    localStorage.setItem("aciertos", aciertos);
    localStorage.setItem("fallos", fallos);
    localStorage.setItem("tiempo", tiempo);
}

function cargarEstado() {
    if(localStorage.getItem("preguntaActual") != null) {
        preguntaActual = localStorage.getItem("preguntaActual");
    }
    if(localStorage.getItem("aciertos") != null) {
        aciertos = localStorage.getItem("aciertos");
        document.getElementById("aciertos").textContent = aciertos;
    }
    if(localStorage.getItem("fallos") != null) {
        fallos = localStorage.getItem("fallos");
        document.getElementById("fallos").textContent = fallos;
    }
    if(localStorage.getItem("tiempo") != null) {
        tiempo = localStorage.getItem("tiempo");
        document.getElementById("tiempo").textContent = tiempo;
    }
}

function reiniciar() {
    aciertos = 0;
    fallos = 0;
    preguntaActual = 0;
    tiempo = 0;
    document.getElementById("aciertos").textContent = aciertos;
    document.getElementById("fallos").textContent = fallos;
    document.getElementById("tiempo").textContent = tiempo;
    mostrarPregunta();
    document.getElementById("comprobar").disabled = false;
    // Borramos los datos guardados
    localStorage.clear();
}

function incrementarTiempo() {
    tiempo++;
    document.getElementById("tiempo").textContent = tiempo;
    localStorage.setItem("tiempo", tiempo);
}

cargarEstado();
mostrarPregunta();

// Cada segundo incrementamos el tiempo
setInterval(incrementarTiempo, 1_000);

document.getElementById("comprobar").addEventListener("click", comprobarPregunta);
document.getElementById("reiniciar").addEventListener("click", reiniciar);


/* La forma clásica de ejecutar algo cuando se cargue toda la página 
window.onload = function() {
    mostrarPregunta();
}
    */

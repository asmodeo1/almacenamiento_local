
function ponerModoClaro() {
    ponerColor("black", "white");

}

function ponerModoOscuro() {
    ponerColor("white", "black")
}

function ponerColor(color, colorFondo) {
    const texto = document.getElementById("texto");
    texto.style.backgroundColor = colorFondo;
    texto.style.color = color;
    try {
        // Si no queda espacio se produce una excepción QuotaExceededError
        localStorage.setItem("color", color);
        localStorage.setItem("backgroundColor", colorFondo);
    } catch(excepcion) {
        window.alert(excepcion);
    }
}

function cargarModo() {
    const color = localStorage.getItem("color");
    const colorFondo = localStorage.getItem("backgroundColor");
    if(color != null && colorFondo != null) {
        ponerColor(color, colorFondo);
    }
}

/*function borrarAlmacenamiento() {
    localStorage.removeItem("color");
    localStorage.removeItem("backgroundColor");
}

setTimeout(borrarAlmacenamiento, 10_000);*/

cargarModo();
document.getElementById("modoClaro").addEventListener("click", ponerModoClaro);
document.getElementById("modoOscuro").addEventListener("click", ponerModoOscuro);


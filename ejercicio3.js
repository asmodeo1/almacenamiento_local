
function guardarDatos() {
    const texto = document.getElementById("texto").value;
    sessionStorage.setItem("texto", texto);
}

function guardarDatosAutomaticamente() {
    const texto = document.getElementById("texto").value;
    sessionStorage.setItem("texto", texto);
    // En lugar de las dos líneas anteriores podríamos poner solo una
    //guardarDatos();
    const iconoGuardado = document.getElementById("iconoGuardado");
    iconoGuardado.style.animation = "";
    iconoGuardado.offsetWidth;
    iconoGuardado.style.animation = "guardar 1s 3 alternate"
}

function cargarDatos() {
    const texto = document.getElementById("texto");
    texto.value = sessionStorage.getItem("texto");
}

cargarDatos();
setInterval(guardarDatosAutomaticamente, 120_000);

document.getElementById("guardar").addEventListener("click", guardarDatos);
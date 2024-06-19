
function guardarDatos() {
    const texto = document.getElementById("texto").value;
    sessionStorage.setItem("texto", texto);
}

function cargarDatos() {
    const texto = document.getElementById("texto");
    texto.value = sessionStorage.getItem("texto");
}

cargarDatos();
setInterval(guardarDatos, 120_000);
document.getElementById("guardar").addEventListener("click", guardarDatos);
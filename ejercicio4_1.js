
function guardarDato(evt) {
    const elemento = evt.target;
    sessionStorage.setItem(elemento.id, elemento.value);
}

function cargarDatos() {
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const ciudad = document.getElementById("ciudad");
    const telefono = document.getElementById("telefono");
    // Si no existe, devuelve null, pero no hay problema en asignar null a un value
    // ya que no mostrará nada
    nombre.value = sessionStorage.getItem("nombre");
    apellidos.value = sessionStorage.getItem("apellidos");
    ciudad.value = sessionStorage.getItem("ciudad");
    telefono.value = sessionStorage.getItem("telefono");
}

document.querySelectorAll("input[type='text']")
    .forEach( e => e.addEventListener("blur", guardarDato));

/* En lugar del forEach
const inputs = document.querySelectorAll("input[type='text']");
for (const e of inputs) {
    e.addEventListener("blur", guardarDato);
}
    */

document.getElementById("cargarDatos").addEventListener("click", cargarDatos);
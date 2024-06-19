function guardarNombre() {
    const nombre = document.getElementById("nombre");
    sessionStorage.setItem("nombre", nombre.value);
}

function guardarApellidos() {
    const apellidos = document.getElementById("apellidos");
    sessionStorage.setItem("apellidos", apellidos.value);
}

function guardarCiudad() {
    const ciudad = document.getElementById("ciudad");
    sessionStorage.setItem("ciudad", ciudad.value);
}

function guardarTelefono() {
    const telefono = document.getElementById("telefono");
    sessionStorage.setItem("telefono", telefono.value);
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


document.getElementById("nombre").addEventListener("blur", guardarNombre);
document.getElementById("apellidos").addEventListener("blur", guardarApellidos);
document.getElementById("ciudad").addEventListener("blur", guardarCiudad);
document.getElementById("telefono").addEventListener("blur", guardarTelefono);
document.getElementById("cargarDatos").addEventListener("click", cargarDatos);
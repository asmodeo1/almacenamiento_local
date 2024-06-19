// Guardar datos en el almacenamiento local
localStorage.setItem("nombre", "pepe");
localStorage.setItem("edad", 21);
const vehiculo = { marca: "opel", matricula: "61273BRA" };
localStorage.setItem("coche", JSON.stringify(vehiculo));
// Otra manera de guardar un dato
localStorage["ciudad"] = "vigo";

// Obtener datos del almacenamiento local
console.log(localStorage.getItem("edad"));
// Otra manera de obtener datos
console.log(localStorage["nombre"]);

// Eliminar un elemento
localStorage.removeItem("ciudad");

// Eliminar todos los elementos
localStorage.clear();

// Guardar datos en el almacenamiento de sesión
sessionStorage.setItem("nombre", "pepe");
// El resto de cosas (eliminar, leer, ...) es igual que con localStorage

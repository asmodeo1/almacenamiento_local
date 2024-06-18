// Creamos un array de tareas vacio
let arrayTareas = [];

function anhadirTarea() {
    const tarea = document.getElementById("tarea");
    if(tarea.checkValidity() == false) {
        alert("Debes introducir la tarea o al menos de 5 caracteres");
        tarea.focus();
        return;
    }
    // Comprobamos si la tarea ya existe aunque admite la misma en mayúscula, en minúscula, ...
    // indexOf busca en el array el valro indicado y devuelve su posición o -1 si no lo encuentra
    /*if(arrayTareas.indexOf(tarea.value) != -1) {
        alert("Esa tarea ya existe");
        tarea.focus();
        return;
    }*/
    // De este modo si que no admitiría tareas iguales aunque estén en minúsculas, mayúsculas, ...
    // some devuelve true si algún elemento de la colección cumple la condición dada
    if(arrayTareas.some( e => e.toLowerCase() == tarea.value.toLowerCase())) {
        alert("Esa tarea ya existe");
        tarea.focus();
        return;
    }

    /* El some equivale a
    let encontrado = false;
    for (const t of arrayTareas) {
        if(t.toLowerCase() == tarea.value.toLowerCase()) {
            encontrado = true;
            break;
        }
    }*/

    const ul = document.getElementById("tareas");
    crearLiTarea(ul, tarea.value);
    arrayTareas.push(tarea.value);
    // Guarda el array como una cadena de elementos separados por comas
    localStorage.setItem("tareas", arrayTareas);
}

function comprobarComa(evt) {
    const tecla = evt.key;
    // Impedimos escribir comas
    if(tecla == ",") {
        evt.preventDefault();
    }
}

function cargarTareas() {

    if(localStorage.getItem("tareas") != null) {
        // getItem devuelve un string con los elementos separados por comas
        // Con split devuelve un array con los elementos separados por la coma
        // El problema es que el usuario puede escribir una coma en la tarea, con lo que
        // la consideraría como otra. Una solución es impedir introducir comas
        // Lo ideal sería guardarlo como un array JSON (JSON.stringfy) y así no tendríamos problemas con las comas
        arrayTareas = localStorage.getItem("tareas").split(",");
    }

    const ul = document.getElementById("tareas");
    for (const tarea of arrayTareas) {
        crearLiTarea(ul, tarea);
    }
}

function crearLiTarea(ul, textoTarea) {
    const li = document.createElement("li");
    ul.appendChild(li);
    const span = document.createElement("span");
    li.appendChild(span);
    span.textContent = textoTarea;
    const boton = document.createElement("button");
    boton.addEventListener("click", eliminarTarea);
    li.appendChild(boton);
    boton.textContent = "🗑️";
    boton.classList.add("btn", "btn-warning");
    li.classList.add("list-group-item", "d-flex", "justify-content-between");
}

function eliminarTarea(evt) {
    // Suponiendo que no hay dos tareas con el mismo texto, para obtener
    // la tarea a eliminar podemos buscar su texto en el array
    // El texto de la tarea está en el span dentro del li, el cual es padre del botón
    const li = evt.target.parentNode;
    // Cogemos el texto del span
    const tarea = li.getElementsByTagName("span")[0].textContent;
    // Creamos un nuevo array con todas las tareas menos la que vamos a eliminar
    // Una manera de eliminar: arrayTareas.splice(arrayTareas.indexOf(tarea), 1);
    arrayTareas = arrayTareas.filter( e => e != tarea);
    li.remove(); // Eliminamos el li
    // La eliminamos del almacenamiento local. Como en este solo hay texto, lo más
    // fácil es guardar el array entero
    localStorage.setItem("tareas", arrayTareas);
}

cargarTareas();
document.getElementById("tarea").addEventListener("keydown", comprobarComa);
document.getElementById("anhadir").addEventListener("click", anhadirTarea);


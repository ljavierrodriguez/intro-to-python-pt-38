/* Variables (var, let, const) */
// comentario simple

let nombre = ""
let apellido = ''
let nombreCompleto = `contenido`

let edad = 50;
let saldo = 14.50;
let grados = -10.5;
let posicion = -5;

let activo = true || false;

let direccion;

let usuarios = null;

let persona = {
    nombre: '',
    apellido: ''
}

console.log(persona.nombre);
console.log(persona['nombre']);

let frutas = ["Pera", "Manzana", "Uva"];
//let nombres = new Array("Pedro", "Juan", "Miguel");


console.log(frutas[0])


function sumar(a, b){
    return a + b;
}

let restar = function(a, b){
    return a - b;
}

function multiplicar(a, b){
    
}
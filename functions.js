/* Functions */

/* 

function funcName(params){
    sentencias
}


const funcName = function(params){
    sentencias
}

*/

function saludo(){
    console.log("Hola")
}

const sumar = function(a, b){
    return a + b
}

//const sumar = (a, b) => a + b;

saludo()

let resultado = sumar(10, 10)
print(resultado)


let resultado2 = [1, 2, 3].map((num) => {
    return num**2
})
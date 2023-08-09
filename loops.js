/* Loops */

/* 

for(iterador; condicion; increment){
    sentencias
}

while (condicion){
    sentencias
}

do {
    setencias
} while(condicion)

for(let indice in coleccion){
    setencias
}

for (let valor of coleccion){
    sentencias
}

*/

for(let num = 1; num <= 10; num++){
    console.log(num)
}

let notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let size = notas.length; 
for(let indice = 0; indice < size; indice++){
    console.log(notas[indice]);
}

let notas2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let indice = 0; indice < notas2.length; indice++){
    console.log(notas2[indice]);
}

let num = 1;
while (num <= 10){
    console.log(num);
    num+=1;
}

num = 1;
do {
    console.log(num);
    num = num + 1;
} while (num <= 10);


for(let indice in notas){
    console.log(indice)
}

for(let valor of notas){
    console.log(valor)
}
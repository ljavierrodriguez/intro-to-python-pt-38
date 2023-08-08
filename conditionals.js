/* Conditionals */
/*  

if (condition) { // true
    sentences
}

if (condition) { // true
    sentences
} else { // false
    sentences
}

if (condition) { //true
    sentences
} else if (condition) { // true
    sentences
} else if (condition) { // true
    sentences
} else { // false 
    sentences
}


Operadores Logicos: (and, or, not) => (&&, ||, !)




*/

let a = 5;
let b = 6;
let c = 3;

if (a > b) {
    console.log(a);
}

if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

if (a > b && a > c) {
    console.log("A")
} else if (b > c) {
    console.log("B")
} else {
    console.log("C")
}
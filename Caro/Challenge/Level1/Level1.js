//OBJETIVO: Ordenamiento de Pivote

/*PAUTAS: Generar un array que contenga 15 elementos 
generados aleatoriamente (números enteros) y otro igual
pero con los elementos multiplicados por 2.
y realizar los códigos correspondientes.
El método debe estar encapsulado en una función
y devolver el array ordenado de mayor a menor.


*/

var arr = [];
var rand;
var swap, p;

function arrRand() {
    for (var i = 0; i < 5; i++) {
        rand = Math.round(Math.random() * 50);
        arr[i] = rand;
    }
    return arr;
}

console.log(arrRand());


function ordenado(array) {
    for (p = array.length - 1; p > 0; p--) {
        for (var i = 0; i < p; i++) {
            if (array[i] < array[p]) {
                swap = array[p];
                array[p] = array[i];
                array[i] = swap;
            }
        }
    }
    return array;
}

var arr2 = arr.map(function(numero) {
    return numero * 2;
});

console.log(ordenado(arr));
console.log(arr2);
console.log(ordenado(arr2));
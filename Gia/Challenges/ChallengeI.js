/*
Challenge I - Level I
Objetivo: Ordenamiento de Burbujeo y de Pivote
Pautas: generar un array que contenga 15 elementos generados aleatoriamente (números enteros) y realizar los códigos correspondientes a ambos métodos de ordenamiento.
Ambos métodos deben estar encapsulados en una función y devolver el array ordenado de mayor a menor.





QuickSort https://es.wikipedia.org/wiki/Quicksort
*/

// 15 elementos generados aleatoriamente: Lo hicimos con el disfraz.
var arr = [8,3,10,2,5];
  console.log('array desordenado: ' + arr);

/*
Para ordenarlos de mayor a menor, voy a ubicarme en el medio, para poder recorrer en la mitad del tiempo, a diferencia que arrancar de un lado al otro y recorrer tooooodo el array. Para ubicarme hago length/2 y saco el índice donde se encuentra
*/

var p = arr.length -1; var swap;


for (p = arr.length-1; p>0; p--){
  for (i=0; i<p; i++){
    // Si el valor de la posición en la que estoy parada [i] es mayor al valor de donde estoy parada [p]
    if (arr[i] > arr [p]){
      swap = arr[p];
      arr[p] = arr[i];
      arr[i] = swap;
    }
  }
}

console.log('array ordenado: ' +arr);

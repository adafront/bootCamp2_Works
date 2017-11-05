
/*Objetivo: Ordenamiento de Burbujeo y de Pivote
Pautas: generar un array que contenga 15 elementos
generados aleatoriamente (números enteros) y realizar
los códigos correspondientes a ambos métodos de ordenamiento.
Ambos métodos deben estar encapsulados en una función y
devolver el array ordenado de mayor a menor.*/


//Explico el algoritmo:


var array=[];


for (var i=0; i<15;i++){
array[i]=Math.floor(Math.random()*100);
}

console.log(array); /* <== Generacion de un array (llamado: "array")
                           con 15 elementos que se generan de manera aleatoria*/


function quickSort(arr, left, right){ /* <== parametros: el array,
                                       y los elementos left y right
                                       son generalmente 1era y última
                                       posicion del array */
   
   var pivot,  //se declara una variable pivote 
   partitionIndex;


  if(left < right){ /* esta condición me marca hasta cuando hacer la recursividad*/

    pivot = right; /* <== Por lo general esta variable
                    pivote es el último elemento del array*/

    partitionIndex = partition(arr, pivot, left, right); /* Es una función que ordena a los elementos
                                                            con menor valor al pivote del
                                                            lado izquierdo, y a los de mayor valor
                                                            de pivote del lado derecho,
                                                            a su vez retorna el valor del pivote en la variable
                                                            llamada partitionIndex
                                                          */
    
   
   quickSort(arr, left, partitionIndex - 1);/* se llama a la función quickSort en cada segmento,
                                               aca desde posicion 0 hasta el anterior al pivote*/
   quickSort(arr, partitionIndex + 1, right);/* aca desde la posicion siguiente
                                                al pivote hasta la última posicion del array*/
  }
  return arr;// retorna el array ordenado
}

function partition(arr, pivot, left, right){ /* Va haber una variable iteradora i y un 
                                                variable partitionIndex que va a
                                                ser el primer elemento del segmento */
   var pivotValue = arr[pivot],
       partitionIndex = left; 

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){ 
      swap(arr, i, partitionIndex); // Si el valor del elemento es menor al pivote, se hace swap entre
                                    // el valor de ese elemento y partitionIndex
      partitionIndex++;// si es asi partitionIndex suma 1.
    }
  }
  swap(arr, right, partitionIndex);/* finalizada todas las iteraciones se hace swap
                                    entre el partitionIndex y el pivote*/
  return partitionIndex;/* luego del swap el partitionIndex pasa a ser el valor del pivote
                         este valor es el que utilizamos cuando llamamos y quickSort
                         para los diferentes segmentos*/
}
  
  function swap(arr, i, j){ // Funcion swap
   var temp = arr[i]; 
   arr[i] = arr[j];
   arr[j] = temp;
}


 console.log(quickSort(array,0, array.length-1)); // Muestro por consola el array odenado de manera ascendente







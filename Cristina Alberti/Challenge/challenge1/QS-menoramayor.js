//ordenar un array de menor a mayor con el metodo quicksort tomando como pivot al ultimo elemento
 

var array= [3,8,10,2,5];


var p = array.lenth-1;

var swap;

console.log("Array desordenado :" + array);

for(p = array.length-1; p>0; p--){

for(i=0; i<p; i++){

	if(array[i]>array[p]){
		swap = array[p];
		array[p] = array[i];
		array[i] = swap;
	}
  }

}

console.log("Array ordenado :" + array);																																															
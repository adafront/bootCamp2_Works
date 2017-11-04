var array=[];

for (var i=0; i<=14;i++){
array[i]=(Math.floor(Math.random()*100)+1); //el +1 es para poder general el 100
}

console.log("array desordenado:",array);


function particion(array,izquierda,derecha) {
	

	var	pivote=array[Math.floor((izquierda+derecha)/2)];
	var	i=izquierda;
	var	j=derecha;

	while(i<=j){

		while(array[i]>pivote){
			i++;
		}

		while(array[j]<pivote){
			j--;
		}

		if(i<=j){
			swap(array,i,j);
			i++;
			j--;
		}
	}
	return i;
}

function swap( array,x,y){
	var izq=array[x],
		der=array[y];

	array[x]=der;
	array[y]=izq;
}

function quickSort(array,izq,der){
	var i;

    if (array.length>1){
		i=particion(array,izq,der);
		if(izq<i-1){
            quickSort(array,izq,i-1);
             }

        if(i<der){
            quickSort(array,i,der);
        }

    }

    return array;
}


var result = quickSort(array,0,array.length-1);
console.log("array ordenado de mayor a menor:",result);
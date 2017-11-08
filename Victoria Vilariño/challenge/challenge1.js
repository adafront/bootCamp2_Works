var array=[];

for (var i=0; i<=14;i++){
array[i]=(Math.floor(Math.random()*100)+1); //el +1 es para poder general el 100
}

console.log("array desordenado:",array);


for(p=array.length-1; p>0; p--){
	for (i=0;i<p;i++){
 	if (array[i]<array[p]){
 		swap=array[p];
 		array[p]=array[i];
 		array[i]=swap;
 		 	}
 
 		}
}

console.log("array ordenado:", array);
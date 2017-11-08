

var randomArr = [];

for (var i=0; i<15; i++){
	j = Math.floor(Math.random()*100);
	randomArr[i]=j;
}

console.log(`Este es el array de base ${randomArr}`);

p=randomArr.length-1; //pivote
var swap;

function quickSort(p){
for (p; p>0; p--){	
	for (var i=0 ; i < p ; i++){
		if (randomArr[p]<randomArr[i]){
			swap = randomArr[p];
			randomArr[p]=randomArr[i];
			randomArr[i]=swap;
				
		} 
	}
}
console.log(`Este es el array izq ${randomArr}`);
}

quickSort(p);





/*


*/

/*
function quickSort(randomArr){
	var pivote = randomArr[0];
	console.log(pivote);
	var izq = [];
	var der = [];

	for (var i=0; i < randomArr.length ; i++){
		if (randomArr[i]<pivote){
			izq.push(randomArr[i]);
			console.log(`Este es el array izq ${izq}`);

		} else {
			der.push(randomArr[i]);
			console.log(`Este es el array der ${der}`);
		}
	}

	// return quickSort(izq).concat(pivote, quickSort(der));
}

quickSort(randomArr);
*/


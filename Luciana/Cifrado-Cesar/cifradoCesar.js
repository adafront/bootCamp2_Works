//Cifrado Cesar:

var letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var sinCifrar=["y","n","d","j"]
var cifrado=[];
var decifrado=[];

cifrar(letras,sinCifrar);
decifrar(letras,cifrado);

function cifrar(letras,sinCifrar){

for(var i=0; i<sinCifrar.length; i++){
	for(var j=0; j<letras.length; j++){
		if(sinCifrar[i] == letras[j]){
			cifrado[i]=letras[(3+j)% letras.length];
			console.log(sinCifrar[i]+" cifrado es "+cifrado[i])
		}
	}
}

}

function decifrar(letras,cifrado){

for(var i=0; i<cifrado.length; i++){
	for(var j=0; j<letras.length; j++){
		if(cifrado[i] == letras[j]){
			if(j<=3){
				decifrado[i]=letras[(j-3)+letras.length];
				console.log(cifrado[i]+" decifrado es "+decifrado[i]);
			}
			else{
			decifrado[i]=letras[(j-3)];
			console.log(cifrado[i]+" decifrado es "+decifrado[i]);
			}
		}
	}
}

}


/*
for(var i=0; i<arr.length; i++){
	abcDesplazado[(i+n)%arr.length] = arr[i];
}
	console.log(abcDesplazado);
*/
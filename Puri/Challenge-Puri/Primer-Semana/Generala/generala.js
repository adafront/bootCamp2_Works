var dado = [1,2,3,4,5,6];
var lista = document.getElementById('lista'); 
var tiros = 0;
var tirada = [];
var limite = 20;
var puntos=0;
var iguales =0; 



function tirarDados(){
	for( var i= 0 ; i<5; i++){	
		var li = document.createElement('li'); 
		j = dado[Math.floor(Math.random()*dado.length)];
		tirada[i]=j;
		li.textContent = j;
		lista.appendChild(li);	
		li.className = 'formaDados';
	}
	console.log(`Estos son mis dados de este tiro: ${tirada}`);
	tiros+=1;
		console.log(`Tiro numero: ${tiros}`);
	if (tiros > limite) {
		alert(`Tiraste los dados más de ${limite} veces! Perdiste!`);
		location.reload();
	}
	contadorIguales();
}


function contadorIguales(){
	for (var j=0;j<tirada.length;j++){
		if (tirada[j]==tirada[j+1]) {
			iguales++;
			console.log(iguales);
		} 
	}
}



// mientras generala sea false, seguir jugando.
// con generala se gana 




var lis = document.getElementsByTagName('li');

function limpiar(){
	for (var j = 0; j<dado.length; j++){
	lista.removeChild(lis[0]);
	console.log(lis);
	}
}







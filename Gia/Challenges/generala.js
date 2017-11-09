/*Challenge I - Level II
Objetivo: Juego Generala
Pautas: emular el juego de la generala teniendo en cuenta que el jugador podrá lanzar 5
dados, cuyos valores serán aleatorios.
Se deberá guardar en un arreglo los valores obtenidos del juego y el puntaje elegido.
Se considera ganador a quien consiga generala en 20 tiros de dados, de lo contrario el juego terminará y se mostrará el mayor puntaje obtenido.
*/

function tirar(){
var maximo = 5; // puede lanzar hasta 5 dados
var uno;
var dos;
var tres;
var cuatro;
var cinco;
}

for(var i=1;i<6;i++){
	if((uno===5)&&(dos===5)&&(tres===5)&&(cuatro===5)&&(cinco===5)&&(seis===5))	// si hay 5 dados con el num 5
		console.log('¡GENERALA!') //gana!
	} else {

		console.log('vuelve a tirar los dados')
}
}

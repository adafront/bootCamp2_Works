/*Challenge I - Level III
Objetivo: Juego del ahorcado
Pautas: El juego se compondrá de 30 palabras, separadas en 3 niveles de complejidad, dada
por la cantidad de letras que la componen.
•
•
•
Baja: entre 5 y 6 letras
Media: entre 7 y 8 letras
Alta: mas de 9 letras
El juego se dividirá en partidas de 12 palabras, 4 para cada nivel, dentro de la partida.
Las palabras no podrán repetirse dentro de la partida y deberán seleccionarse en forma
aleatoria.
Para pasar de nivel, deberá tener un puntaje mínimo. Siguiendo la siguiente regla:
Nivel 1: 75 puntos
Nivel 2: 150 puntos
Condiciones para acumular puntaje:
Cada letra tendrá un valor de 5 puntos, lo cual determinará el valor de la palabra, cada letra
arriesgada descontará ese mismo valor de la palabra.
Ejemplo:
Carpincho -> valor de la palabra: 45 = 9 x 5
Arriesga A e I, luego adivina, puntaje obtenido: 35 puntos*/


var baja = ['encias','dormir','anillo','delfin','jazmin','rosal','camion','cereza','ruido','camino'];
var media = ['caballo','codorniz','frutilla','jengibre','colmillo'.'alfombra','escalera','cuchara','paraguas','tortuga'];
var alta = ['chocolate','unicornio','microondas','cocodrilo','seguimiento','cacerolazo','ministerio','gobernador','ensaladera','televisor'];
var jugar = document.getElementById('juego');

jugar.addEventListener('click',juega);


function juega() {
	
}
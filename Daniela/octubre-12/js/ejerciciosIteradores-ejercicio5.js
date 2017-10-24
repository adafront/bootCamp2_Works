/*-----------------  EJERCICIO 5 -----------------*/
/*
Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10],
 mostrar por pantalla el valor máximo y la cantidad de veces que se repite.
*/
/********** Con Array y For ***********/


var x = [10,24,36,7,98,11,14,20,98,14,10]
var i;
var numBig = x[0];
var time = 0;

    for (i = 0 ; i <= x.length ; i++) {
        
        if( x[i] >= numBig){
            if(numBig == x[i]){
                time = time +1;
            }else{
                time = 1;
            }
            numBig = x[i];
        }
    }
    console.log("El valor " +numBig+ " es el valor máximo del array y se repite: " +time+ " veces");    

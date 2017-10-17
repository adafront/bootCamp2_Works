/*-----------------  EJERCICIO 6 -----------------*/
/*
Dados los siguientes arreglos:
X = ["a","l","f","a"];
Y = ["a","l","f","a","j","o","r"]
Crear un bloque de código que permita determinar si:
• Ambos arreglos son iguales
• Cuál de los dos es más largo
• Cuantas letras tienen en común
*/
/********** Con Array y For ***********/

var y = ["a", "l", "f", "a", "j", "o", "r"];
var x = ["a", "l", "f", "a"];
var match = [];
var little=y;
var big=x;

var i;
var j;
var k;
var valSame;

var isDifferent = false;
var isFound = false;

//Ambos arreglos son iguales?
if(x.length == y.length){
    for( i = 0; i <= y.length-1; i++){
        if(x[i] != y[j]){
            isDifferent = true;
        }
    }  
}

//Cuál de los dos es más largo?    
else if(x.length > y.length){
        console.log("El array X es mas largo que el array Y");
        little = y;
        big = x;
        
        }else{
             console.log("El array Y es mas largo que el array X");
             little = x;
             big = y;
 
        }
console.log("El array little es: " +little);
console.log("El array big es: " +big);



//Cuantas letras tienen en común
for( i = 0; i < little.length; i++){
    isFound = false;
    for(j = 0; j < big.length; j++){
        if(little[i] == big[j] ){
           valSame = little[i]; 
           for (var k = 0; k < match.length; k++) {
               if (valSame == match[k] ) {
                   isFound = true;  
               }
           }
           if (isFound == false) {
                match[match.length] = valSame;
           }
        }
    }
            
}

console.log("Las letras que el array X e Y tienen en común : " +match);      
console.log("El array match tiene : " +match.length + " cantidad de valores");      

if(isDifferent == true){
    console.log("El array x e y son iguales")
}else{
    console.log("El array x e y NO son iguales")
}

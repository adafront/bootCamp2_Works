
/* 

// EJERCICIO NUMERO 1

var numero = prompt("Ingrese un numero");

if (numero%2 == 0){
	alert("el numero es par");
}
  
else {
	alert("el numero es impar");
}





// EJERCICIO NUMERO 2

let dias = prompt("Ingrese un numero del 1 al 7:");

switch(dias){
	case "1":
	alert("Lunes");
	break;
	case "2":
	alert("Martes");
	break;
	case "3":
	alert("Miercoles");
	break;
	case "4":
	alert("Jueves");
	break;
	case "5":
	alert("Viernes");
	break;
	case "6":
	alert("Sabado");
	break;
	case "7":
	alert("Domingo");
	break;
	default:
	alert("El numero no es valido");
	break;
}






// EJERCICIO NUMERO 3

var mes= prompt("Ingrese un mes:");

if (mes=="Febrero"){
	alert("Este mes tiene 28 días");
}

else if (mes == "Abril" || mes=="Junio" || mes=="Septiembre" ||mes =="Noviembre"){
	alert("Este mes posee 30 días");
}
else{
	alert("Este mes tiene 31 días");
}




var mes= "Enero";

switch (mes){
	case "Enero":
	alert("31 días");
	break;
	case "Febrero":
	alert("28 días");
	break;
	case "Marzo":
	alert("31 días");
	break;
	case "Abril":
	alert("31 días");
	break;
	case "Mayo":
	alert("31 días");
	break;
	case "Junio":
	alert("30 días");
	break;
	case "Julio":
	alert("31 días");
	break;
	case "Agosto":
	alert("31 días");
	break;
	case "Septiembre":
	alert("30 días");
	break;
	case "Octubre":
	alert("31 días");
	break;
	case "Noviembre":
	alert("30 días");
	break;
	case "Diciembre":
	alert("31 días");
	break;
	default:
	alert("Este mes no existe");
	break;
}


var mes= parseInt(prompt("Escriba un nuemero:"));

switch (mes){
	case 1:
	alert("31 días");
	break;
	case 2:
	alert("28 días");
	break;
	case 3:
	alert("31 días");
	break;
	case 4:
	alert("31 días");
	break;
	case 5:
	alert("31 días");
	break;
	case 6:
	alert("30 días");
	break;
	case 7:
	alert("31 días");
	break;
	case 8:
	alert("31 días");
	break;
	case 9:
	alert("30 días");
	break;
	case 10:
	alert("31 días");
	break;
	case 11:
	alert("30 días");
	break;
	case 12:
	alert("31 días");
	break;
	default:
	alert("Este mes no existe");
	break;
}






// EJERCICIO NUMERO 4

var numero;

if (numero<0){
	alert("Cuanta negatividad!");
}
else {
	alert("Cuanta positividad!");
}






// EJERCICIO NUMERO 5

var letra = prompt("Ingrese una letra del abcedario:");

if (letra=="a" || letra=="i" || letra=="o" || letra=="u" || letra=="e"){
	alert("Es un vocal!");
}
else {
	alert("No es vocal");
}



var letra = prompt("Elija una letra de abcedario: ");

switch(letra){
	case "A":
	case "a":
	alert("Esta letra es una vocal");
	break;
	case "E":
	case "e":
	alert("Esta letra es una vocal");
	break;
	case "I":
	case "i":
	alert("Esta letra es una vocal");
	break;
	case "U":
	case "u":
	alert("Esta letra es una vocal");
	break;
	case "O":
	case "o":
	alert("Esta letra es una vocal");
	break;
	default:
	alert("Esta letra es una consonante");
	break;
}






// EJERCICIO NUMERO 6

var x =parseInt(prompt("Ingrese el valor de x:"));
var y =parseInt(prompt("Ingrese el valor de y:"));
var z =parseInt(prompt("Ingrese el valor de z:"));
var total;


if (x>y){
	var total= x-z;
	console.log("El total de la resta entre x y z es: "+total);
	if (total>y){ 
		console.log("El total de la resta entre x y z es: "+total+". Y ademas es mayor que y.");
	}

} else {
	var total = (x+z)*y;
	console.log("El total de la suma entre x y z multiplicado por z es: "+total);
}


// Otra version

if (total<y){
	total=(x+z)*y;
}


// Otra version

if (!(total>y)){
	total=(x+z)*y;
}






// EJERCICIO NUMERO 7 

var sueldo = 40000;
var vigencia = parseInt(prompt("Ingrese el total de años trabajados: "));
var total;
var aumento;

if (vigencia>10){
	// var sueldo = sueldo + 0.1*sueldo 
	var aumento= (sueldo*10)/100;
	var total= sueldo+aumento;
	alert("Por haber trabajado más de 10 años en esta empresa, su sueldo será de: $"+total+".-");
}
else if (vigencia<=10 && vigencia>5){
	var aumento= (sueldo*7)/100;
	var total= sueldo+aumento;
	alert("Por haber trabajado más de 5 años en esta empresa, su sueldo será de: $"+total+".-");
}
else if (vigencia<=5 && vigencia>3){
	var aumento= (sueldo*5)/100;
	var total= sueldo+aumento;
	alert("Por haber trabajado más de 3 años en esta empresa, su sueldo será de: $"+total+".-");
}
else {
	var aumento= (sueldo*3)/100;
	var total= sueldo+aumento;
	alert("Por haber trabajado más de 3 años en esta empresa, su sueldo será de: $"+total+".-");
}



//////////////////////// LEVEL UP : 2 ///////////////////////////////


// EJERCICIO 1


var canje = 1000;
var puntos = parseInt(prompt("Ingrese sus puntos"));
var premium = confirm("Es usted premium?");
var pesos;



// Version mia 

if (canje<puntos){
	alert("Usted se lleva el producto de inmediato!");
}
else if (puntos>=(canje*50)/100){
	pesos = (canje-puntos)/3
	alert("Usted podra completar su canje con dinero siendo el total: $"+pesos+".-");
}
else if (puntos>=(canje*50)/100 && premium==true) {
	pesos = (canje-puntos)/5
	alert("Usted podra completar su canje con dinero siendo el total: $"+pesos+".-");
}
else {
	alert("Sus puntos no le alcanzan. Lo sentimos.")
}




///////////////////////// LEVEL UP : ARRAYS ////////////////////////////


// Ejericio 1 

var arr = [];
var n = 5;

for (var i= 0 ; i<n ; i++){
	arr = i;
	console.log(arr);
	
}



// Ejercicio 2 


var n = 5;
var arr =[];

for (var i= 0 ; i<=n ; i++){
	if (i%2==0){
		arr = 0;
		console.log(arr);
	}
	else { 
		arr = i;
		console.log(arr);
	}
}



// Ejercicio 3 y 4

var x = [10,24,36,7,98,11,14,20];
var max = x[0];
var pos = 0;

for (var i=0; i<=x.length-1; i++ ){
	if (x[i]>max){
		max = x[i];
		pos = i;
	}
}

console.log("Este es el valor de x: "+x);
console.log("Este es el valor de max: "+max);
console.log("Este es el valor de pos: "+pos);



// Ejercicio 5

var x = [10,24,36,7,98,11,14,20,98,14,10];
var max = 0;

for (var i=0; i<=x.length-1; i++ ){
	if (x[i]>max){
		max = x[i];
	}
}

console.log("Este es el valor de max: "+max);

var rep = 0;

for (var i=0; i<=x.length-1; i++ ){
	if (x[i]==max){
		rep=rep+1;
	}
}

console.log(`El numero mayor es ${max} y se repite ${rep} veces`);

// Opcion optima de Ej 5

var x = [10,24,36,7,98,11,14,20,98,14,10];
var max = x[0];
var rep = 0;

for (var i=0; i<x.length; i++ ){
	if (x[i]>=max){
		if (x[i]==max){
		rep=rep+1;
		} 
		else {
			rep=1
		} max = x[i];
	} 
}

console.log("Este es el valor de max: "+max);
console.log(`El numero mayor es ${max} y se repite ${rep} veces`);



// Ejercicio 6 

var X = ["a","l","f","a"];
var Y = ["a","l","f","a","j","o","r"];

if (X.length == Y.length){
	console.log("Son iguales");
} else { console.log("Son diferentes");}

if (X.length > Y.length) {
	console.log ("X es mas lagro que Y");
} else { console.log("Y es mas largo que X");}

var igual = 0;

for (var i= 0 ; i<=X.length-1 ; i++){
	for (var n= 0 ; n<=Y.length-1 ; n++) {
		if (Y[n] == X[i]){
			igual +=1;
		}
	}
}

console.log(`Los dos arrays tienen ${igual} letras en común.`);

// Otra manera mas optima de hacer Ej 6

var X = ["a","l","f","a"];
var Y = ["a","l","f","a","j","o","r"];
var distinto = false;

if (X.length == Y.legth){
	for(var i=0; i<X.length; i++){
		if (X[i]!=Y[i]){
			distinto=true;
		}
	}
}
else {
	if(X.length>Y.length){
		console.log("X es mas largo");
	}
	else {
		console.log("Y es mas largo");
	}
}

*/

// Ejercicio 7 


var datos1 = ["Fido","Gomez",26,15000.78,true];
var datos2 = ["Gervasio","Fernandez",32,28.550,false];
var aumento;

console.log(datos1);
console.log(datos2);

if (datos1[2]<datos2[2]){
	console.log(`Fido es menor que Gervasio. Fido tiene ${datos1[2]} años y Gervasio tiene ${datos2[2]}.`);
} else { console.log(`Fido es mayor que Gervasio. Fido tiene ${datos1[2]} años y Gervasio tiene ${datos2[2]}.`); }

if (datos1[4]){
	console.log("Fido esta casado");
} else if (datos2[4]) {console.log("Gervasio esta casado");}

aumento = (datos2[3]*12.5)/100;
console.log(aumento);

montoFinal = datos1[3]+aumento;
montoFinal = montoFinal.toFixed(2);

console.log(`El monto a cobrar por fido este mes sera de $ ${montoFinal} .-` );

alert("Euclides quiere almorzar. Como hace frío tiene ganas de un plato caliente en lugar de la acostumbrada ensalada. Pero si el plato caliente + la fanta resulta más caro que 95$ elegirá la opción de la ensalada con flan (solo si la combinacion no super su presupuesto inicial). Finalmente si no existe combinación que cumpla tomará un café con crema")

var presupuesto=95;
var  ensaldaConFlan, cafeConCrema;

var platoCalienteConFanta=prompt("El presupuesto es de $95. Ingrese el precio del plato caliente + Fanta");

if (platoCalienteConFanta>presupuesto){
var ensaldaConFlan=prompt("El dinero no alcanza para el plato caliente + Fanta. Ingrese el precio de la ensalda con flan");
}
if (platoCalienteConFanta<=presupuesto){
	alert("El dinero alcanza. Euclides comerá el plato caliente + Fanta")
}else if (ensaldaConFlan<=presupuesto){alert("Euclides comerá ensalada + Flan")}
else {alert("El dinero no alcanza para el plato caliente ni para la ensalada con flan. Euclides tomará café con crema")}



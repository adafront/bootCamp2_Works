/*
1 escala --> $$ -->llega el lunes justo
2 escalas --> $ -->tiene que pasar 7 dias en un hostel
*/


var presupuesto,precioVuelo1, precioVuelo2,prioridad,precioHostel;

precioVuelo1=500;
precioVuelo2=200;
precioHostel=140;

presupuesto=prompt("Hasta cuanto dinero esta dispuesto a gastar?");
if (presupuesto>=precioVuelo1){
    prioridad=prompt("Prioriza llegar antes(T) o gastar menos(D)?")
    if (prioridad=="T" || prioridad=="t"){
        alert("Tiene disponible un vuelo con una sola escala. Dia de llegada LUNES. Costo total: "+precioVuelo1)
    } else if(prioridad=="D" || prioridad=="d"){
        alert("Tiene disponible un vuelo con dos escalas. Deberá pasar 7 noches en un HOSTEL. Costo total: "+(precioVuelo2+precioHostel))}
        else {alert("Opcion Incorrecta")        
    }
} else if (presupuesto>=precioVuelo2){
     alert("Tiene disponible un vuelo con dos escalas. Deberá pasar 7 noches en un HOSTEL. Costo total: "+(precioVuelo2+precioHostel))
}





/* EJERCICIO 1
let = parseInt(prompt("ingresa valor de la compra"));
let precio = 100
let iva = 21
let precioConIva = precio*iva / 100  ;
let total = precioConIva + precio ;

alert(total)

*/
 /*

let creditos, acceso='juegos: ';

creditos = parseInt(prompt("¿Cuántos créditos vas a pagar?"));
switch (creditos){
    case 4:
        acceso += "Realidad Virtual";
    case 3:
        acceso += "Juegos 3D, ";
    case 2:
        acceso += "Juegos 2D, ";
    case 1:
        acceso += "Consolas ";
        break;
    default:
        acceso += "No ingresaste ningun credito. Intenta de nuevo"
}
alert(acceso); 
*/






/*
EJERCICIO 2
let tipo, oficina, mensaje;
tipo = prompt("Elija el tipo de coche");
switch(tipo){
    case 'gasolina':
    case '1':
        oficina ="100, gasolina";
        break;
    case 'diesel':
    case '2':
        oficina = "200, diesel";
        break;
    case 'electrico':
    case '3':
        oficina = "300, electrico";
        break;
     default:
        oficina='x';
}
mensaje = (oficina == 'x') ?  "No existe esa opción": ("Oficina "+oficina);
alert(mensaje);


*/

/* EJERCICIO 3

let factura, total
factura = parseInt(prompt('¿Cuánto compraste?') );
switch (true){
    case (factura >=100 && factura <= 300):
        descuento = 5;
        break
    case (factura >300 && factura <=400):
        descuento = 10;
        break
    case (factura >400):
        descuento = 15;
        break
    default:
        descuento = 0;

   }
total = factura*(1 - descuento/100);
alert("Debe pagar: " + total + "€");
*/




/*  EJERCICIO 4


let contar, max , mensaje='';
max = parseInt(prompt("Teclear un número entero"));
for(contar = 0; contar < max;  contar++)
{
mensaje += contar + ", ";
}
mensaje += contar;   //Evita la coma al final
alert(mensaje);
 
*/








/* EJERCICIO 5

let max, control;
max = parseInt(prompt("Número máximo "));
for (control = 0; control < max; control++)
{
    if( control % 3 == 2){
        console.log(control);
    }
}

*/


/*

let numero ;
let suma = 0 
let veces ;
let media ;



for (veces = 0; veces < 4; veces++)
{
    numero = parseInt(prompt("Escribi numero "));
    suma += numero;
}
media = suma/4;
alert("La media es " + media);

*/
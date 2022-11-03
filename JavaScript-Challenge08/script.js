// var n1, n2, n3, resultado;

// n1=parseInt(prompt("introduce n1"));
// n2=parseInt(prompt("introduce n2"));
// n3=prompt("introduce un signo");

// switch (n3){
//     case "+":
//         resultado= n1+n2;
//          break;
    
//     case "-":
//         if (n1>2){ 
//             resultado=n1-n2;
//         } else {
//             resultado= n2-n1;
//         }
//         break;

//     case "*":
//         resultado= n1*n2;
//         break;

//     case "/":
//         if(n1>n2){
//             resultado=n1/n2;

//         }else {
//             resultado = n2/n1;
//         } break;
//     }
// document.write(resultado);


// let numeros = []

//     for (let i = 0; i < 10; i++) {
//         let ingresoNumeros = prompt("ingresar numero: ");
//         numeros.push(ingresoNumeros);    
    
//     }

//     console.log(numeros);

//     numeros.forEach((element) => { 
//         if (element % 2 === 1) return console.log (element + " es inpar ");
//         else return console.log (element  + " es par ");
//     } );

//     let ordernarDeMenosAMas = numeros.sort((a,b) => {
//         return a-b;
//     });

//     console.log(ordernarDeMenosAMas[0]);
//     console.log(ordernarDeMenosAMas);

//     let ordernarDeMasAMenos = ordernarDeMenosAMas.reverse();
//     console.log(ordernarDeMasAMenos);
//     console.log(ordernarDeMasAMenos[0]);



// EJERCICIO 3


//  function numeros () {
//     let lista = []
//         for (let i = 0; i<4; i++){
//             let guardar=0;
//             guardar =parseInt(prompt("ingresa un numero"))
//             if (guardar <=10){
//             alert ('ingresar un numero menor a 10')
            

//             } lista.push(guardar);
//         }

      
      
//       return lista;
// }

// let jugador1; 
// let jugador2; 
// let arbitro;
// jugador1=numeros();
// jugador2=numeros();
// console.log (jugador1);
// console.log (jugador2);
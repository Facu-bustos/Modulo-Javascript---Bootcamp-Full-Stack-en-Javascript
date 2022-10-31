
  class Persona {
    nombre;
    edad;
    telefono;
    dni;
    pais;

    constructor(nombre, edad, telefono, dni, pais) {
      this.nombre = nombre;
      this.edad = edad;
      this.telefono = telefono;
      this.dni = dni;
      this.pais = pais;
    }
    
  }
  function capturar() {
  //console.log("capturado")
  let nombreCapturar = document.getElementById("nombre").value;
  //console.log(nombreCapturar);
  let edadCapturar = document.getElementById("edad").value;
 //console.log();
  let telefonoCapturar = document.getElementById("telefono").value;

  let dniCapturar = document.getElementById("dni").value;

  let paisCapturar = document.getElementById("pais").value;


 nuevosujeto = new Persona (nombreCapturar,edadCapturar,telefonoCapturar,dniCapturar,paisCapturar);
    //console.log();
    agregar();
  
}

let baseDatos= [];
function agregar(){

//console.log("capturado");
baseDatos.push(nuevosujeto);
console.log(baseDatos);
document.getElementById("tabla").innerHTML += '<td>'+nuevosujeto.nombre+'</td><td>'+nuevosujeto.edad+'</td><td>'+nuevosujeto.telefono+'</td><td>'+nuevosujeto.dni+'</td><td>'+nuevosujeto.pais+'</td>';
 ordenarArray();
}

function ordenarArray(){
  Array.sort (baseDatos);{
    
  }

}
ordenarArray.onclick =(ordenarArray) => {
agregar();
ordenarArray()  ;
}




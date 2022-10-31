class Persona {
    nombre
    apellido
    numeroIden
    estadoCivil

        constructor (nombre, apellido, numeroIden, estadoCivil){
            this.nombrePersona = nombre;
            this.apellidoPersona = apellido;
            this.numeroIdenPersona = numeroIden;
            this.estadoCivilPersona = estadoCivil;
        }

    datosPersonas(){
        return  " nombre " + this.nombrePersona + " apellido " + this.apellidoPersona + " numeroIden " + this.numeroIdenPersona + " estado civil " + this.estadoCivilPersona ; 
    }
       
};


let objPersona = new Persona(" Facundo, Bustos, 1973, soltero ")
console.log(objPersona.datosPersonas());

// EJERCICIO 1
// class Banco {
// cuentaCorriente;
// cajaAhorro;
// seguroDeVida;
// seguroHogar;

// constructor ( cuentaCorriente,cajaAhorro,seguroDeVida,seguroHogar){

// this.cuentaCorriente=cuentaCorriente;
// this.cajaAhorro=cajaAhorro;
// this.seguroDeVida=seguroDeVida;
// this.seguroHogar=seguroHogar;

// }
//  clone(){
//     return new Banco(this.cuentaCorriente,this.cajaAhorro,this.seguroDeVida,this.seguroHogar);
//  }
// }

// const dasd = Banco ("si", 25000,"si", "no,");
// const copy = cuentaDeBanco.clone();

// console.log();

// EJERCICIO 2

// class OficinaDistrito{
//     constructor(nombre, empleados){
//         this.nombre = nombre;
//         this.empleados = empleados
//         if(oficinaEnCentro instanceof OficinaDistrito){
//             return oficinaEnCentro
//         }else{
//             oficinaEnCentro = this;
//         }
//     console.log('se registró una oficina nueva')
//     }

//     verEmpleados(){
//         return this.empleados;
//     }
// }
// let oficinaEnCentro = null;

// class OficinaDistrito{
//     constructor(nombre, empleados){
//         if(!oficinaEnCentro){
//             this.nombre = nombre;
//             this.empleados = empleados
//             oficinaEnCentro = this;
//         }else{
//             return oficinaEnCentro
//         }
//     console.log('se registró una oficina nueva')
//     }

//     verEmpleados(){
//         return this.empleados;
//     }
// }

























/*
// punto 2 (- Supongamos que vamos a crear una oficina para una empresa determinada y estamos seguros que solo compraremos esa sola. La oficina tendrá un nombre y una cantidad fija de empleados. Si intento crear una segunda oficina me debería devolver la primera instancia creada. Aplicar el patron de diseño Singleton y explicar que principio SOLID es contrario a este patrón de diseño.)
let _singleton = null;
class Empresa{

constructor(nombre,empleados){
    if (!_singleton){
        this.nombre = nombre;
        this.empleados = empleados;
        _singleton = this
    } else
    return _singleton
    console.log("singleton class create")

}
singletonOperation () {
    {
        console.log(singles)
    }
}
getSingletonData(){
    return this.nombre + this.empleados;
}

}
 function init_singleton (){
    var empresa = new Empresa ("BS");
    var empresa = new Empresa ("BS2");
    console.log (Empresa.getSingletonData())
    console.log (Empresa.getSingletonData())
    console.log(Empresa instanceof Empresa);
    console.log ( Empresa instanceof Empresa);
    console.log ( Empresa === Empresa);
 }

 init_Empresa(); 
*/



//Ejercicio 3
/*
 class Pizza{
     constructor() {
         this.pizza = [];
         console.log ("Pedido terminado")
         
     }
 
     Construct (){
         for(var all in this.structure){

             let builder = new ConcreteBuilder()
             builder.BuildPart(this.structure[all]);
             builder.GetResult()
         }
     }
 }
 
 class hacerPizza {
    pizza;
    queso;
    tomate;
    anana;
    masaFina;
     constructor(pizza) {
    this.pizza = pizza;  
    this.queso = queso;
    this.tomate = tomate;
    this.anana = anana;
    this.masaFina = masaFina;
     }
 
     BuildPart (){
     }   
    }
        class ConcreteBuilder extends hacerPizza {
          
            constructor(pizza, queso, tomate, anana, masaFina) {
            super(pizza , queso, tomate, anana, masaFina);
            

            facade.log("ConcreteBuilder class created");
        }
    
        BuildPart (rawmaterial){
            facade.log("ConcreteBuilder BuildPart()");
            var material = rawmaterial
            this.product = new Product(material)
        }
    
        GetResult (){
            facade.log(JSON.stringify(this.product))
            return this.product
        }
    }
    class Product {
        constructor(material) {
            facade.log("Product class created");
            this.data = material
        }
    }
    
    function init_Builder() {
        let pizzeria = new Pizza();
        pizzeria.Construct()
    }
        */

/*
    class Color{
        color;
        constructor(color){
            this.color = color;
        }
    }

    class AppleFactory extends Color {
        manzana;
        constructor(manzana){
            super (color, Vencimiento);
            this.manzana=manzana
        }
    }
    
    class Vencimiento extends Color(){
        vencimiento;
        constructor(Vencimiento){
            this.Vencimiento = Vencimiento;
      
    }
 }
    let manzana = new AppleFactory ("roja", "mañana");
    console.log (manzana);
    */
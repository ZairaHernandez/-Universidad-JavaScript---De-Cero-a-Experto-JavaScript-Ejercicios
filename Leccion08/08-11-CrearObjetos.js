//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Al declarar e inicizalizar objetos lo hacemos por medio del constructor
let padre = new Persona('Abraham', 'Hernandez', 'AbrahamH@gmail.com');
//Imprimimos el nombrecompleto del padre con la función antes establecida
console.log(padre.nombreCompleto());
let madre = new Persona('Luisa', 'Ramirez', 'luisaR@gmail.com');
console.log(madre.nombreCompleto());

//asigamos nombre directamente
padre.nombre = 'Sebastian';

//Imprimimos la persona madre y padre
console.log( padre );
console.log( madre );

//Creacion de objetos segun el tipo de dato
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
miBoolean = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};




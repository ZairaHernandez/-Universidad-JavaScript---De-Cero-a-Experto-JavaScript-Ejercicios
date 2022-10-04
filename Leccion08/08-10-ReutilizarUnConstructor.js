//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

//Al declarar e inicizalizar objetos lo hacemos por medio del constructor
let padre = new Persona('Abraham', 'Hernandez', 'AbrahamH@gmail.com');
//Imprimimos el nombrecompleto del padre con la función antes establecida
console.log(padre.nombreCompleto());
let madre = new Persona('Luisa', 'Ramirez', 'luisaR@gmail.com');
console.log(madre.nombreCompleto());

padre.nombre = 'Carlos';

console.log(padre);
console.log(madre);

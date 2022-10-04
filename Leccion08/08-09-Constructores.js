//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

//Al declarar e inicizalizar objetos lo hacemos por medio del constructor
let padre = new Persona('Abraham', 'Hernandez', 'AbrahamH@gmail.com');
console.log(padre);
let madre = new Persona('Luisa', 'Ramirez', 'luisaR@gmail.com');
console.log(madre);

//Podemos modificar los datos
padre.nombre = 'Sebastian';

console.log(padre);
console.log(madre);
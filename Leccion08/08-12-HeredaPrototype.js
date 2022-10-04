//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '1111111111';

//Al declarar e inicizalizar objetos lo hacemos por medio del constructor
let padre = new Persona('Abraham', 'Hernandez', 'AbrahamH@gmail.com');
padre.tel = '2222222222';

//Imprimimos el telefono de la persona "padre"
console.log(padre.tel);

let madre = new Persona('Luisa', 'Ramirez', 'luisaR@gmail.com');
madre.tel = '3333333333';
console.log(madre.tel);


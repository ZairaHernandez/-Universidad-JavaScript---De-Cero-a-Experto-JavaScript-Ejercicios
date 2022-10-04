//Objeto de datos tipo persona
let persona = {
    nombre: 'Zaira',
    apellido: 'Hernandez',
    email: 'zaira@gmail.com',
    edad: 21,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido; //retorna el nombre y apellido
    }
}

//Asigamos el valor de forma directa por su identificador
persona.tel = '55443322';
persona.tel = '44332211';

console.log(persona);

//Eliminamos una propiedad
delete persona.tel;
console.log(persona);
let x = 10;
console.log(x.length);//Tamaño del objeto

//Objeto de datos tipo persona
let persona = {
    nombre: 'Zaira',
    apellido: 'Hernandez',
    email: 'zaira@gmail.com',
    edad: 21,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido; //retorna el nombre y apellido
    }
}

//Imprime persona por sus caracteristicas
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());

console.log(persona);

//Nuevo objeto persona
let persona2 = new Object();
persona2.nombre = 'Heidi';
persona2.direccion = 'Solares #34';
persona2.tel = '9876543219';

console.log( persona2.tel );
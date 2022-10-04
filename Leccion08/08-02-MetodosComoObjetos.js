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
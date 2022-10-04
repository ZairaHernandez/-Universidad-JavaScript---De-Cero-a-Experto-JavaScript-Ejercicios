//Objeto de datos tipo persona
let persona = {
    nombre: 'Zaira',
    apellido: 'Hernandez',
    email: 'zaira@gmail.com',
    edad: 21,
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido; //retorna el nombre y apellido
    }
}

console.log( persona.nombreCompleto );
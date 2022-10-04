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

//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido);

//for in(imagina un for each en java)
for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}


let personaArray = Object.values(persona); //Devuelve una matriz de los valores de la matriz
console.log(personaArray);

let personaString = JSON.stringify(persona); //Convierte un valor de JavaScript en una cadena JSON
console.log(personaString);
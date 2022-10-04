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

console.log( persona.nombre);
console.log( persona['apellido'] ); //Devuelve el valor que está en parentesis 'apellido'

//for in(imagina un for each en java)
for( nombrePropiedad in persona){
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad]);
}
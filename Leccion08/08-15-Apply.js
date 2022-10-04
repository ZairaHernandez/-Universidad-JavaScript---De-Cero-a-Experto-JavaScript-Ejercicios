
let persona1 = {
    nombre: 'Abraham',
    apellido: 'Hernandez',
    nombreCompleto: function (titulo, tel) {
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Heidi',
    apellido: 'Martinez'
}

//Uso de apply para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto('Lic', '1111111111') );

let arreglo = ['Ing','22222222222'];
console.log( persona1.nombreCompleto.apply( persona2, arreglo) ); //asigna el objeto this y el array
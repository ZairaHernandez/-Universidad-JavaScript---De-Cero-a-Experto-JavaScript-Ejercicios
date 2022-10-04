let persona1 = {
    nombre: 'Abraham',
    apellido: 'Hernandez',
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Heidi',
    apellido: 'Martinez'
}

//Uso de call para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call(persona2));
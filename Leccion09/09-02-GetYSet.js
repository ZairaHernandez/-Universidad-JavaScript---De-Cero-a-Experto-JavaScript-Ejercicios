class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    //Get y set(encapsulamiento)
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

//Instancia e inicialización de un objeto de la clase
let persona1 = new Persona('Zaira', 'Hernandez');
persona1.nombre = 'Maria';//equivalente a set nombre('Maria')
console.log( persona1.nombre );//get nombre
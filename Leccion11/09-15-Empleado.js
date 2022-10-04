//CLASE HIJA DE PERSONA
class Empleado extends Persona {
    //Atributo estatico
    static contadorEmpleados = 0;

    //Constructor que inicializa con parametros
    constructor(nombre,apellido,edad,sueldo){
        super(nombre, apellido, edad); //Agrega el super para inicializar la clase bien
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    //Solo tendrá accesos de lectura
    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    //Sobrescribimos el toString
    toString() {
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

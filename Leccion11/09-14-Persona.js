class Persona {
    //Atributo estatico
    static contadorPersonas = 0;

    //Constructor que inicializa con parametros
    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    //Solo tendrá accesos de lectura
    get idPersona() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    //Sobrescribimos el toString
    toString() {
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this.edad}`;
    }
}

class Cliente extends Persona {
    //Atributo estatico
    static contadorClientes = 0;
    //Constructor que inicializa con parametros
     constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre, apellido, edad); //Agrega el super para inicializar la clase bien
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    //Sobreescribimos el toString
    toString() {
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

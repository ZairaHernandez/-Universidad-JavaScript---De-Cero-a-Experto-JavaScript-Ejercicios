let miFuncion = function () {
    console.log("Saludos");
}

//No se aplica el concepto hoisting por la variable
/*const miFuncionFlecha = () => {
    console.log("Saludos desde la funcion flecha");
}*/

const miFuncionFlecha = () => console.log("Saludos desde la funcion flecha");

//miFuncionFlecha();

/*const saludar = () => {
    return "Saludos desde funcion flecha";
}*/

const saludar = () => "Saludos desde funcion flecha"; 
console.log(saludar());

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara' });

console.log(regresaObjeto());

/*const funcionConParametrosClasico = (mensaje) => console.log(mensaje);*/

/const funcionConParametros = (mensaje) => console.log(mensaje);*/

//const funcionVariosParametros = (op1,op2) => op1+op2;
const funcionConParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`; //Template string
}

console.log(funcionConParametros(3, 5));


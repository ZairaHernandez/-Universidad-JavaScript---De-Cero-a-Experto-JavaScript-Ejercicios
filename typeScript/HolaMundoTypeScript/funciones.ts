let saludo = "Hola mundo desde TypeScript";

saludo = "cambio";
let numero: number;
numero = 10;

let cualquiera: any;
cualquiera = "cadena";
cualquiera = 10;

const PI = 3.14;


function saludar() {
    console.log("Saludar adios");
    console.log(saludo);
    console.log(numero);
    console.log(PI);
}

saludar();
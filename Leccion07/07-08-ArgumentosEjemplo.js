//Lista de numeros enteros por argumentos
let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);
console.log(resultado);

//Declaración Función de tipo Expresión
//Función que recorre los argumentos y las suma en la variable suma
function sumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}
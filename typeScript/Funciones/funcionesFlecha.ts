let sum = function (a: number, b: number) {
    return a + b;
}
console.log(sum(5, 3));

let sumarFlecha = (a: number, b: number) => {
    return a + b;
};

console.log(sumarFlecha(2, 3));

var obtenerNombre = function () {
    return "Juan perez";
}

let obtenerNombreFlecha = () => "Juan Perez";

console.log(obtenerNombreFlecha());
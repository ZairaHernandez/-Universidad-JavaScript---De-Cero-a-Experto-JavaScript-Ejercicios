"use strict";
let sum = function (a, b) {
    return a + b;
};
console.log(sum(5, 3));
let sumarFlecha = (a, b) => {
    return a + b;
};
console.log(sumarFlecha(2, 3));
var obtenerNombre = function () {
    return "Juan perez";
};
let obtenerNombreFlecha = () => "Juan Perez";
console.log(obtenerNombreFlecha());

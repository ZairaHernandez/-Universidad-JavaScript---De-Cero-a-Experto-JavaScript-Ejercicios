//let autos = new Array('Nissan', 'BMW', 'FORD');
const autos = ['Nissan', 'BMW', 'FORD'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

//Imprime los datos
for (let i = 0; i < autos.length; i++) {
    console.log(i + ' : ' + autos[i]);
}

//Sobreescribe los datos
autos[1] = 'MerecedesBenz';
console.log(autos[1]);

//Agregar marca
autos.push('Audi');
console.log(autos);

//Mostramos el numero de marcas actuales
console.log(autos.length);
//Cambiamos el ultimo registro
autos[autos.length] = 'Cadillac';

console.log(autos);

//Cambiamos el registro de la posición 6
autos[6] = 'Porshe';
console.log(autos);
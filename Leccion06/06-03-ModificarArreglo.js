//let autos = new Array('Nissan', 'BMW', 'FORD');
const autos = ['Nissan', 'BMW', 'FORD'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

//Imprime los datos
for (let i = 0; i < autos.length; i++) {
    console.log(i + ' : ' + autos[i]);
}

//Sobreescribe directamente
autos[1] = 'MerecedesBenz';
console.log(autos[1]);

//Agrega marca
autos.push('Audi');
console.log(autos);
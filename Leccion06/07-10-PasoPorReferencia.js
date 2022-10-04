//Tipos de datos primitivos
let x = 10;

function cambiarValor(a) {
    a = 20;
}

//Paso por valor(función)
cambiarValor(x);//10
console.log(x); //console.log(a); 

const persona = {
    nombre: 'Zaira',
    apellido: 'Hernandez'
}

//Imagina que es un set
function cambiarValorObjeto(p1) {
    p1.nombre = 'Amalia';
    p1.apellido = 'Perez';
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);
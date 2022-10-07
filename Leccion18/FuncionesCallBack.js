miFuncion2();
mifuncion1();
function mifuncion1() {
    console.log('Funcion 1');
}

function miFuncion2() { 
    console.log('funcion2');
}

//Funcion de tipoCallback
let imp = function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, imprimir) { 
    let res = op1 + op2;
    imprimir(`Resultado: ${ res }`);
}


sumar(6, 4, imp);

//LLamadas asincronas con uso SetTimeOut
function miFuncionCallBack(){
    console.log("Saludo asincrono despues de 3s");
}
setTimeout(miFuncionCallBack, 3000); //despues de 3 seg

setTimeout(function () { console.log('Saludo asincrono 2') }, 4000);

setTimeout(() => console.log("Saludo asincrono 3"), 3000);




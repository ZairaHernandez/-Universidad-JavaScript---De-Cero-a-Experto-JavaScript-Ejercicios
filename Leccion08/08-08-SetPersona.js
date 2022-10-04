//Objeto de datos tipo persona
let persona = {
    nombre: 'Zaira',
    apellido: 'Hernandez',
    email: 'zaira@gmail.com',
    edad: 21,
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase(); //Sin importar la estructura siempre devolvemos mayúsculas(en idiomas)
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();  //Set, sin importar la estructura siempre asignamos mayúsculas
    },
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido; //Devuelve nombre y apellido
    }
}

console.log(persona.lang);

persona.lang = 'en';//se llama metodo set lang
console.log(persona.lang);//se llama metodo get lang
console.log(persona.idioma);
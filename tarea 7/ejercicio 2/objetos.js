/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/ 

//1.
const diego = {
    nombre: 'Diego',
    apellido: 'Poblete',
    edad: 30,
    altura: 1.65,
    eresDesarrollador: true
}

//2.
let varNombre = diego.nombre;
console.log(varNombre);

//3.
const mejorAmigoA = {
    nombre: 'Gonzalo',
    apellido: 'K.',
    edad: 28,
    altura: 1.70,
    eresDesarrollador: false
}

const mejorAmigoB = {
    nombre: 'Paolo',
    apellido: 'V.',
    edad: 29,
    altura: 1.75,
    eresDesarrollador: false
}

const listaDatosPersonales = new Array();
listaDatosPersonales.push(diego);
listaDatosPersonales.push(mejorAmigoA);
listaDatosPersonales.push(mejorAmigoB);
console.log(listaDatosPersonales);

//4.
listaDatosPersonales.sort((a,b) => {
    if(a.edad > b.edad){
        return -1;
    }else{
        return 1;
    }
})

console.log(listaDatosPersonales);
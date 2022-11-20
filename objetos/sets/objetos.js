//trabajando con objetos
const obj = {
    id: 4,
    nombre: "Diego",
    apellido: "Poblete",
    isDeveloper: true,
    libros_favoritos: ["La conjura de los necios", "Dracula", "De ratones y hombres"],
    "3-juegos": ["FFT", "AOE2", "CS"]
}

const prop = "isDeveloper";
console.log(obj[prop]);

//cuidado con copiar objetos enteros:
const obj2 = obj;
console.log(obj2);
obj2.nombre = "Jorge";
// *al copiar el objeto, copia también la dirección de memoria:
console.log(obj2.nombre);
console.log(obj.nombre);

//esta regla no aplica para valores primarios
let val1 = 4;
let val2 = val1;

val2 = 6;

console.log(val1);
console.log(val2);

//
const obj3 = {
    ...obj
}

console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Raúl";

console.log(obj.nombre);
console.log(obj3.nombre);

//como ordenar listas de objetos en función de una propiedad
const listaPeliculas = [
    {titulo: "El efecto mariposa", anio: 2004},
    {titulo: "TED", anio: 2012},
    {titulo: "Lo que el viento se llevó", anio: 1939},
    {titulo: "Titanic", anio: 1997}
]

//ordenar según año, menor a mayor
listaPeliculas.sort((a,b)=> a.anio-b.anio);
console.log(listaPeliculas);

//order alfabéticamente (por el titulo)
//listaPeliculas.sort((a,b) => {
//    if(substr(a.titulo,1)[0] > substr(b.titulo,1)[0]){
//        return 1;
//    }
//})

console.log(listaPeliculas);
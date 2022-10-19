/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

let fecNac = new Date(1992,10,02);
let libro = {
    titulo: 'El padrino',
    autor: 'Mario Puzo',
    fecha: 1969,
    url: 'https://es.wikipedia.org/wiki/El_padrino_(novela)'
};

let lista = ['Diego', '30', 'true', fecNac, libro];

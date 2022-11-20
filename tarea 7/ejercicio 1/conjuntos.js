/*
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
*/

//1
const familia = ['diego', 'jaoquin', 'javier', 'jorge', 'soledad']

const setFamilia = new Set(familia); 
//2
setFamilia.add('diego');

console.log(setFamilia);
//3
setFamilia.add('Javascript');

console.log(setFamilia);

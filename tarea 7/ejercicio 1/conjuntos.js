/*
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
*/

//1
const familia = [{ id:'diego'}, { id:'jaoquin'}, { id:'javier'}, { id:'jorge'}, { id:'soledad'}]

const setFamilia = new Set(familia); 
//2
setFamilia.add('diego');

let varDiego = familia.findIndex(x=>x.id=='diego')
let eliminado = familia.splice(varDiego,1);

console.log(familia;)

console.log(setFamilia);
//3
setFamilia.add('Javascript');

console.log(setFamilia);

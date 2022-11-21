/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos) 
*/

//La fecha de hoy
const hoy = new Date();
console.log(hoy)
//La fecha de tu nacimiento
const bdd  = new Date(1992,09,02);
console.log(bdd);

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let pasoCumple = (hoy>bdd);
console.log(pasoCumple);

//Una variable que contenga el día de tu nacimiento
let diaNac = bdd.getDate();
console.log(diaNac);

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNac = bdd.getMonth();
console.log(mesNac);

//Una variable que contenga el año de tu nacimiento (con 4 dígitos) 
let anioNac = bdd.getFullYear();
console.log(anioNac);

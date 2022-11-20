//Trabajando con fechas
const fecha = new Date();
console.log(fecha);

//los meses inicializan en 0
const fecha2 = new Date(1992, 09, 2, 2, 23, 52);
console.log(fecha2)

const fecha3 = new Date("October 13, 1979 12:15:05");
console.log(fecha3);

//comparación de fechas
console.log(fecha > fecha2);

const fecha5 = new Date(1992, 09, 2, 2, 23, 52);
console.log(fecha5);

console.log(fecha2===fecha5); //ESTO NO ESTA BIEN

console.log(fecha2.getTime()===fecha5.getTime())

//obtener mes
console.log(fecha2.getMonth()+1)

//obtener anio
console.log(fecha2.getFullYear());

//setear -formato- horario para otra region:
console.log(fecha.toLocaleDateString('en-GB'));
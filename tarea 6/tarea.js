/*Crea un archivo JS que contenga las siguientes líneas
1- Una variable que contenga la lista de la compra (mínimo 5 elementos)
2- Modifica la lista de la compra y añádele "Aceite de Girasol"
3- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
4- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
5- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
6- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
7- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
8- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
9- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/




//1)
const listaCompra = ["arroz", "leche", "lechuga", "galleta", "tabasco"];

//2) 
listaCompra.push("Aceite de Gisrasol") 
console.log(listaCompra);

//3)
listaCompra.pop();
console.log(listaCompra);

//4) Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

listaPeliculas = [{titulo:"rambo 1",director:"Coppola", fecha:{dia: 1, mes: 1, anio: 2002}},{titulo:"rambo 2",director:"Tarantino",fecha:{dia: 1, mes: 1, anio: 2006}},{titulo:"rambo 3",director:"Jodorowsky",fecha:{dia: 1, mes: 1, anio: 2010}}]

//5) Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const result = listaPeliculas.filter(word => word.fecha.anio >= 2010);;
console.log(result);

//6- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
function getDirectores({titulo,director,fecha}){
    return `${director}`;
}

const directores = listaPeliculas.map(getDirectores);
console.log(directores);

//7- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
function getTitulos({titulo,director,fecha}){
    return `${titulo}`;
}
const titulos = listaPeliculas.map(getTitulos);
console.log(titulos);

//8- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const nuevaLista = directores.concat(titulos);
console.log(nuevaLista);

//9- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/
const nuevaListaP = concat(...directores,...titulos);
console.log(nuevaListaP);
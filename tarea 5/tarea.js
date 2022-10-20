/*Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/

let alturaCms = 168;
let alturaMts = 1.68;
let pesoKg = 65.4;
let alturaMtsRedondeadaUp = alturaMts.toFixed(1);
    console.log(alturaMtsRedondeadaUp );
let pesoKgRedondeadoDown = Math.floor(pesoKg);
    console.log(pesoKgRedondeadoDown);

let comparacion = (Number.MAX_VALUE) === (Number.MAX_VALUE +1 );
console.log(comparacion);


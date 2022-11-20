//conjuntos (sets)
//un conjunto no permite valores repetidos, y puede utilizarse como para utilizar bases de datos, asegurandonos que no hayan tuplas repetidas

const array = [1,2,3,4, "hola", "hola", {id: 5}];

const miConjunto = new Set(array);

console.log(array);
console.log(miConjunto);

// .add
miConjunto.add(9);
console.log(miConjunto);

// .delete
miConjunto.delete("hola");
console.log(miConjunto);

// has()
console.log(array.includes(2));
console.log(miConjunto.has(2));

// .size()
console.log(miConjunto.size);

// .forEach();
miConjunto.forEach(valor=>{
    console.log(valor)
})

// agregando iterador
const it_miConjunto = miConjunto.values();
console.log(it_miConjunto);
const array_miConjunto = [...miConjunto];
console.log(array_miConjunto[1]);

// .clear
miConjunto.clear();
console.log(miConjunto);

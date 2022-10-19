/* Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break */

let num = 1;
let mul = 10;

while(true){
    num = num*mul;
    mul -=1;

    if(mul==0){
        break;
    }
}

console.log(num);
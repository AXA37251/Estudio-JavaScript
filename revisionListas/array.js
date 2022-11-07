const array = [2, 5, 9, 15, 1, 2, 0, 4];

console.log(array);

array.sort((a, b) => {
    return -1;  //da vuelta el array
});

console.log(array);

array.sort((a, b) => {
    if (a < b) {
        return -1;
    }else if (a > b) {
        return +1;
    }else {
        return 0;
    }
})

console.log(array)

const arrayNumerico = [1, 2, 4, 3, 65, 6, 4, 6, 7, 87, 32, 4, 65,  73, 82, 34, 33]

arrayNumerico.sort((a, b) => a - b)
console.log(arrayNumerico);

arrayNumerico.sort((a, b) => b-a)
console.log(arrayNumerico);
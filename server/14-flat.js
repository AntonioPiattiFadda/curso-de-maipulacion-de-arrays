const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

// EL numero que le ponga a flat indica la profundidad a la que tiene que llegar con el array.
const rta = matriz.flat(3);
console.log('for', newArray);
console.log('flat', rta);

const matriz1 = [
    [1,2,3],
    [4,5,6, [1,2,]],
    [7,8,9]
];

let newMatriz1 = [];

for (let p = 0; p < matriz1.length; p++) {
    const element = matriz1[p];
    for (let i = 0; i < element.length; i++) {
        const item = element[i];
        newMatriz1.push(item);
        for (let index = 0; index < newMatriz1.length; index++) {
            const ññ = newMatriz1[index];
            newMatriz1.push(ññ)
            console.log(newMatriz1);
            
        }
    }    
}
console.log(newMatriz1);


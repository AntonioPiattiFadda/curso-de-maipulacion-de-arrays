const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

// El primer valor es el acumulador y el segundo es el que vamos sumando. El 0 lo ponemos porque es el estado inicial
const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);


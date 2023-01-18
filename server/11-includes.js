const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

const rta = pets.includes('dog') // Atento porque includes no recibe una arroy function sino solo el elemento que busco. Tener en cuenta que si quiero trabajar con objetos tengo que poner la referencia del mismo, y si trabajo con strings puedo buscar una palabra dentro del string.
console.log('for', includeInArray);
console.log('includes', rta);

// Hacer lo de playground. No me salio bien!


const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--')
console.log('for', rtaFinal);
console.log('join', rta);


const title = 'Curso de manipulación de arrays';

// Si no le pongo el espacio entre las comillas, el split me divide por letra y no por palabra 
const urlSplit = title.split(' ')
console.log(urlSplit)

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);


const titleT = 'Curso de manipulación de arrays';
const Toni = titleT.toLowerCase()
.split(' ')
.join('----')

console.log(Toni);

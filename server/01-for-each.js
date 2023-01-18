const letters = ['a','b','c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for',element);
}

letters.forEach(item => console.log('forEach', item))


//Lo de abajo no funciona de esta fomrma
const rta = letters.forEach(item => item + "1")

console.log(rta);

const rtaToni = letters.forEach(leter => console.log(leter))
console.log('Toni'+rtaToni); //Aca me retorna un undefined
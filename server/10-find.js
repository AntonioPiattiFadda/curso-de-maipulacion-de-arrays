const numbers = [1,30,49,29,10,13];


// Find me devuelve un objeto que cumple con la condicional, filter lo que hacia era devolver un array con ese objeto o objetos. Siempre devueve un solo elemento y el primero que encuentre solo. Si hay mas elementos que cumplan la condicion mas adelante no van a ser evaluados.
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 302323) {
    rta = element;
    break;
  }
}
console.log('for', rta);
const rta2 = numbers.find(item => item === 302323)
console.log('find', rta2);


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];


// Find es muy bueno con id porque son elementos que sabemos que no se repiten.
const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3);
// Find te va a devolver tooodo el elemento que cumpla con esa condicional.

//Find index te va a devolver la posicion dentro del array donde se encuentra el objeto.
const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4);

// Find si no encuentra el elemento te devuvle undefined y FindIndex un -1 si no lo hace.
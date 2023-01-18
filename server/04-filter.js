const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    // LAs palabras que tengan mas de 6 letras cumplen con la condicion y van a ser parte del nuevo array sin modificar el array original.
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words );
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words );


const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
      },
  ];

  //Si cumple con las dos condiciones entran en el nuevo array.
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);


// Vamos a hacer un buscardor. Ver bien la sitaxtis de esto.
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Nico')); // Indludes tambioen puede ser parte del string osea que en este caso los Nicolas cumplen con la condicion.
console.log(search('hsdjkfhdsj'));
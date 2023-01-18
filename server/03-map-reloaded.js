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
];
console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta); // Me devuelve un array con todos los totales

// const rta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);
const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log("rta3", rta3);
console.log("original", orders);

// Esta funcion no la entiendo 100%
function addNewAttr(array) {
  return array.map(item => ({ 
    ...item, 'taxes': Math.trunc( item.total * .19 ) 
  })
  )
}
console.log(addNewAttr(orders));

const rta4 = orders.map((item) => {
  return {
    ...item,
    tax: Math.trunc( item.total * .19 )
  };
});

console.log("rta4", rta4);

const rtaConTaxes = orders.map(item => {
  return {
    ...item,
    taxes : 0.19
  }
})
console.log(rtaConTaxes);
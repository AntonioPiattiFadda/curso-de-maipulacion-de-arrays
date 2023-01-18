const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Update

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);


const productsT = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];

newProducts = [];

const Toni = productsT.findIndex(product => product.id === '🍔')
if (Toni !== -1) {
    newProducts.push(productsT[Toni])
    productsT.splice(productsT[Toni], 1)
}
console.log(productsT);
console.log(newProducts);

const productsV3 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
const update2 = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const To = productsV3.findIndex(item => item.id === update2.id)
if (To !== -1) {
    productsV3[To] = {
        ...productsV3[To],
        ...update2.changes
    }
}

console.log( productsV3[To]);


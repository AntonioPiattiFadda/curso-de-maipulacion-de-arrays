const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => { //Le ponemos como parametro el objeto que va a ser el output y cada uno de los elementos que vamos a analizar.

  // Lo que quiere decir ahora es que si no encuentra el objeto que esta analizando en la iteracion va a inicializar el conteo en uno pero si encambio, encuentra ya por segunda vez o mas el objeto, le va sumar uno al contador.
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {}// Le damos el valor inicial que es un objeto vacio.
);

console.log(rta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

// Interesante uso. Interesante concatenacion de funciones y como se aplica el map de una forma exquisita. Ndeaahhh
const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);

const rtaToni1 = data
.map(item => item.level)
.reduce((obj, item) =>{
  if (!obj[item]) {
    obj[item] = 1;
} else {
    obj[item] = obj[item] + 1;
}
return obj;
}, {});
console.log(rtaToni1);




// Concatenar los metodos se llama "pinames"


// RETO

const itemsReto = [1, 3, 2, 3,7,8,6,5,3,4,6,8,9,3,3,6,8,9,11,14,15,16,17];

//Este de abajo no funciona.
const rtaReto = itemsReto.reduce((obj, item) => {
    if (!obj[item] ) {
        obj[item] = 1;
    } else if (obj[item] <= 10){
      obj["from1to10"] + 1;
    }else if (obj[item] >= 10){
      obj["from10tox"] + 1;
    } 
    return obj;
}, {}
);

console.log(rtaReto);

// Solucion al reto que encontre en los comentarios.
const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
const result = arr.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5']++
  } else if (item <= 8) {
    obj['6-8']++
  } else {
    obj['9-10']++
  }
  return obj
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0
})

console.log(result)


const arr1 = [3, 10, 9, 4, 3, 1, 8, 15, 4, 7, 6];
const rta5= arr1.reduce((obje, item) =>{
  if (item <=5) {
    obje['1 to 5'] ++
  } else if (item <= 10) {
    obje['5 to 10']++
  } else {
    obje['10 to 20']++
  }
  return obje
},{
  "1 to 5" : 0,
  "5 to 10": 0,
  "10 to 20" : 0

})

console.log(rta5);

const itemsToni = [1, 3, 2, 3];

const rtaToni= itemsToni.reduce((obj, item)=>{
  if (!obj[item]) {
    obj[item] = 1;
} else {
    obj[item] = obj[item] + 1;
}
return obj;
}, {})
console.log(rtaToni);


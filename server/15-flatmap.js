const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

const rta = users.map((user) => user.attributes).flat();
const rta2 = users.flatMap((user) => user.attributes);
console.log("map-flat", rta);
console.log("rta2", rta2);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};


// Esto es un reto que hace en la clse que consiste en tener un array con todas las startDates...
// Object.values(calendars). va a retornar el valor del primer nivel de array que encuentre.. Despues flatmap tiene la limiacion de no poder indicarle la cantidad de nuveles que tiene que descender por lo que tengo que hacer un map despues.
const rta3 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});
console.log(rta3);